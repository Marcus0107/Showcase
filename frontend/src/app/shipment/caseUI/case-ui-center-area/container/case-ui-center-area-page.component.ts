import {Component, OnChanges, OnDestroy, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Router} from "@angular/router";
import {State} from "../../../../app.reducers";
import {Store} from "@ngrx/store";
import {ShipmentCaptureSlice} from "../../../shipment-common/store/shipments/shipment-capture-page/shipment-capture-page.slice";
import {RequestSingleShipment} from "../../../shipment-common/store/shipments/shipment-list-page/shipment-list-page.actions";
import {
  ReloadStoreAction,
  ResetShipmentCaptureSliceAction
} from "../../../shipment-common/store/shipments/shipment-capture-page/shipment-capture-page.actions";
import {CaseUiCenterAreaPageModel} from "./case-ui-center-area-page.model";
import {TaskListSlice} from "../../../shipment-common/store/tasks/task-list-page.slice";
import {InvoicePageSlice} from "../../../shipment-common/store/shipments/invoice-page/invoice-page.slice";


@Component({
  selector: "educama-caseui-center-area-page",
  templateUrl: "./case-ui-center-area-page.component.html"
})
export class CaseUiCenterAreaPageComponent implements OnInit, OnChanges {


  constructor(private _activatedRoute: ActivatedRoute,
              private _store: Store<State>) {


  }

  public ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
        this._store.dispatch(new ReloadStoreAction(params["id"]));
      });
  }

  public ngOnChanges() {
    this._activatedRoute.params.subscribe(params => {
        this._store.dispatch(new ReloadStoreAction(params["id"]));
      });
  }

  // ***************************************************
  // Event Handler
  // ***************************************************





}
