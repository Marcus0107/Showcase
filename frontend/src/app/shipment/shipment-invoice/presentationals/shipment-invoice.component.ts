import {Component, EventEmitter, OnDestroy, OnInit, Output} from "@angular/core";
import {InvoiceResource} from "../../shipment-common/api/resources/invoice.resource";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {State} from "../../../app.reducers";
import {
  ReloadStoreAction,
  ResetShipmentCaptureSliceAction
} from "../../../shipment/shipment-common/store/shipments/shipment-capture-page/shipment-capture-page.actions";
import {InvoicePageSlice} from "../../shipment-common/store/shipments/invoice-page/invoice-page.slice";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {RequestSingleShipment} from "../../shipment-common/store/shipments/shipment-list-page/shipment-list-page.actions";



@Component({
  selector: "educama-shipment-invoice",
  templateUrl: "./shipment-invoice.component.html"
})
export class ShipmentInvoiceComponent implements OnInit, OnDestroy {
  public disabled = true;
  public displayDialog: boolean;
  private trackingId: string;
  public invoiceCreationDate: string;
  public preCarriage: any;
  public exportInsurance: any;
  public exportCustomsClearance: any;
  public flightPrice: any;
  public importInsurance: any;
  public importCustomsClearance: any;
  public onCarriage: any;
  public managementFee: any;
  public serviceFee: any;
  public discount: any;

  public shipmentDetailSlice: Observable<InvoicePageSlice>;
  public shipmentDetailSliceSubscription: Subscription;

  @Output()
  public createInvoiceEvent: EventEmitter<InvoiceResource> = new EventEmitter();

  constructor(private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _store: Store<State> ) {
    this.shipmentDetailSlice = this._store.select(state => state.invoicePageSlice);
  }

  public ngOnInit() {
    this._activatedRoute.parent.params.subscribe(params => {
      this.trackingId = params["id"];
      this._store.dispatch(new RequestSingleShipment(params["id"]));
    });
  }

  public ngOnDestroy() {
    this._store.dispatch(new ResetShipmentCaptureSliceAction(""));
    this.shipmentDetailSliceSubscription.unsubscribe();
  }

  public saveInvoice() {
    this.createInvoiceEvent.emit(
      new InvoiceResource(
        this.trackingId, this.invoiceCreationDate, this.preCarriage, this.exportInsurance, this.exportCustomsClearance,
        this.flightPrice, this.importInsurance, this.importCustomsClearance, this.onCarriage, this.managementFee, this.serviceFee,
        this.discount
      ));

    this._store.dispatch(new ReloadStoreAction(this.trackingId));
    this._router.navigate(["caseui/" + this.trackingId]);
  }

  public cancleInvoice() {
    this._store.dispatch(new ReloadStoreAction(this.trackingId));
    this._router.navigate(["caseui/" + this.trackingId]);
  }
}



