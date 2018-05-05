import {Component, Input, OnInit, AfterViewInit} from "@angular/core";
import {ShipmentResource} from "../../../shipment-common/api/resources/shipment.resource";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {InvoiceResource} from "../../../shipment-common/api/resources/invoice.resource";
import {State} from "../../../../app.reducers";
import {Store} from "@ngrx/store";
import {RequestTasksForShipmentAction} from "../../../shipment-common/store/tasks/task-list-page.actions";
import {Observable} from "rxjs/Observable";
import {TaskListSlice} from "../../../shipment-common/store/tasks/task-list-page.slice";
import {Subscription} from "rxjs/Subscription";
import {CompletedTaskListEffect} from "../../../shipment-common/effects/completed-task-list.effect";
import {CompletedTaskListSlice} from "../../../shipment-common/store/completed-tasks/completed-task-list-page.slice";
import {CompletedTaskResource} from "../../../shipment-common/api/resources/completed-task.resource";
import {isUndefined} from "util";

@Component({
  selector: "educama-caseui-center-area",
  templateUrl: "./case-ui-center-area.component.html"
})
export class CaseUiCenterAreaComponent implements OnInit {
  @Input()
  public shipment: ShipmentResource;

  @Input()
  public invoice: InvoiceResource;


  public activeTaskListSlice: Observable<CompletedTaskListSlice>;
  public activeTaskListSliceSubscription: Subscription;

  public invoiceSelected: boolean;

  constructor(private _formBuilder: FormBuilder,
              private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _store: Store<State>) {

    this.activeTaskListSlice = this._store.select(state => state.completedTaskListSlice);
    this.activeTaskListSliceSubscription = this.activeTaskListSlice.subscribe(
      invoiceSlice => {
      }
    );
  }


  public ngOnInit() {
    //this.changeShipmentForm = this.initalizeChangeShipmentForm();
    //this.displayInvoiceForm = this.initalizeInvoiceForm();

  }


  public createInvoiceIsSelected() {
    this._activatedRoute.parent.params.subscribe(params => {
      if (this._router.url.includes("createInvoice")) {
        this.invoiceSelected= true;
      }else{
        this.invoiceSelected = false;
      }
    });
  }
}
