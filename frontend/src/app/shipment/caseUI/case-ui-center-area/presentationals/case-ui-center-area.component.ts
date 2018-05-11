import {Component, Input, OnChanges} from "@angular/core";
import {ShipmentResource} from "../../../shipment-common/api/resources/shipment.resource";
import {InvoiceResource} from "../../../shipment-common/api/resources/invoice.resource";
import {NavigationStart, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {ShipmentCaptureSlice} from "../../../shipment-common/store/shipments/shipment-capture-page/shipment-capture-page.slice";
import {Observable} from "rxjs/Observable";
import {InvoicePageSlice} from "../../../shipment-common/store/shipments/invoice-page/invoice-page.slice";
import {State} from "../../../../app.reducers";
import {Store} from "@ngrx/store";
import {CompletedTaskListResource} from "../../../shipment-common/api/resources/completed-task-list.resource";
import {CompletedTaskListModel} from "../../../completed-task-list/container/completed-task-list-page.model";
import {CompletedTaskListSlice} from "../../../shipment-common/store/completed-tasks/completed-task-list-page.slice";
import {CompletedTaskResource} from "../../../shipment-common/api/resources/completed-task.resource";
import {TaskResource} from "../../../shipment-common/api/resources/task.resource";
import {TaskListSlice} from "../../../shipment-common/store/tasks/task-list-page.slice";
import {isUndefined} from "util";

@Component({
  selector: "educama-caseui-center-area",
  templateUrl: "./case-ui-center-area.component.html"
})
export class CaseUiCenterAreaComponent {

  public shipment: ShipmentResource;
  public invoice: InvoiceResource;
  public completedTasks: CompletedTaskResource[];
  public activeTasks: TaskResource[];
  public selectedTask: string;

  public selectedTabIndex = 0;

  public shipmentSliceSubscription: Subscription;
  public invoiceSliceSubscription: Subscription;
  public completedTaskListSubscription: Subscription;
  public activeTaskListSubscription: Subscription;

  // relevant slice of store and subscription for this slice
  public shipmentSlice: Observable<ShipmentCaptureSlice>;
  public invoiceSlice: Observable<InvoicePageSlice>;
  public completedTaskListSlice: Observable<CompletedTaskListSlice>;
  public activeTaskListSlice: Observable<TaskListSlice>;

  public enableFlightTab = false;
  public enableInvoiceTab = false;

  constructor(private _router: Router,
              private _store: Store<State>) {


    _router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.evaluateUrl(event.toString());
      }
    });

    this.shipmentSlice = this._store.select(state => state.shipmentCaptureSlice);
    this.shipmentSliceSubscription = this.shipmentSlice.subscribe(
      shipmentCaptureSlice => this.updateShipmentModel(shipmentCaptureSlice)
    );

    this.invoiceSlice = this._store.select(state => state.invoicePageSlice);
    this.invoiceSliceSubscription = this.invoiceSlice.subscribe(
      invoiceSlice => this.updateInvoiceModel(invoiceSlice)
    );

    this.completedTaskListSlice = this._store.select(state => state.completedTaskListSlice);
    this.completedTaskListSubscription = this.completedTaskListSlice.subscribe(
      completedTaskListSlice => {
        this.evaluateCompletedTask(completedTaskListSlice.completedTaskList);
        return this.updateCompletedTaskList(completedTaskListSlice);
      }
    );

    this.activeTaskListSlice = this._store.select(state => state.taskListSlice);
    this.activeTaskListSubscription = this.activeTaskListSlice.subscribe(
      activeTaskListSlice => {
        this.evaluateActivedTask(activeTaskListSlice.taskList);
        return this.updateActiveTaskList(activeTaskListSlice);
      }
    );
  }

  private evaluateUrl(evevntString: string) {
    if (evevntString.includes("changeShipment")) {
      this.selectedTask = "changeShipment";
      this.selectedTabIndex = 0;
    } else if (evevntString.includes("completeShipment")) {
      this.selectedTask = "completeShipment";
      this.selectedTabIndex = 0;
    } else if (evevntString.includes("organizeFlight")) {
      this.selectedTask = "organizeFlight";
      this.selectedTabIndex = 1;
    } else if (evevntString.includes("createInvoice")) {
      this.selectedTask = "createInvoice";
      this.selectedTabIndex = 2;
    } else {
      this.selectedTask = "none";
    }
  }

  private evaluateCompletedTask(tasks: CompletedTaskResource[]) {
    if (this.enableFlightTab !== true) {
      this.enableFlightTab = !isUndefined(tasks.find(task => task.name === "Complete Shipment Order"));
    }
    if (this.enableInvoiceTab !== true) {
      this.enableInvoiceTab = !isUndefined(tasks.find(task => task.name === "Organize Flight"));
    }
  }

  private evaluateActivedTask(tasks: TaskResource[]) {
    if (this.enableFlightTab !== true) {
      this.enableFlightTab = !isUndefined(tasks.find(task => task.name === "Organize Flight"));
    }
  }


  // ***************************************************
  // Data Retrieval
  // ***************************************************

  private updateShipmentModel(shipmentCaptureSlice: ShipmentCaptureSlice) {
    this.shipment = shipmentCaptureSlice.shipment;
  }

  private updateInvoiceModel(invoicePageSlice: InvoicePageSlice) {
    this.invoice = invoicePageSlice.invoice;
  }

  private updateCompletedTaskList(completedTaskListSlice: CompletedTaskListSlice) {
    this.completedTasks = completedTaskListSlice.completedTaskList;
  }

  private updateActiveTaskList(activeTaskListSlice: TaskListSlice) {
    this.activeTasks = activeTaskListSlice.taskList;
  }
}
