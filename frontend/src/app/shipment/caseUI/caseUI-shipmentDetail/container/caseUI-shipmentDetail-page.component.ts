import {Component, OnDestroy, OnInit} from "@angular/core";
import {ShipmentCaptureSlice} from "../../../shipment-common/store/shipments/shipment-capture-page.slice";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
import {ShipmentService} from "../../../shipment-common/api/shipment.service";
import {State} from "../../../../app.reducers";
import {Store} from "@ngrx/store";
import * as actions from "../../../shipment-common/store/shipments/shipment-capture-page.actions";
import {CaseUIShipmentDetailModel} from "./caseUI-shipmentDetail-page.model";
import {AirlineService} from "../../../../flights/flights-common/api/airlines/airline.service";
import {AirlineResource} from "../../../../flights/flights-common/api/airlines/airline.resource";
import {AirlineSuggestionsResource} from "../../../../flights/flights-common/api/airlines/airline-suggestions.resource";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AirportService} from "../../../../flights/flights-common/api/airports/airport.service";
import {AirportResource} from "../../../../flights/flights-common/api/airports/airport.resource";


@Component({
  selector: "educama-caseui-shipment-detail-page",
  templateUrl: "./caseUI-shipmentDetail-page.component.html"
})
export class CaseUIShipmentDetailPageComponent implements OnInit, OnDestroy {


  public airlineSuggestion: any;
  public airportSuggestion: any;

  selectedAirline: AirlineResource;
  selectedAirport: AirportResource;
  // relevant slice of store and subscription for this slice
  public shipmentDetailSlice: Observable<ShipmentCaptureSlice>;
  public shipmentDetailSliceSubscription: Subscription;

  // model for the page
  public shipmentDetailInfoModel: CaseUIShipmentDetailModel = new CaseUIShipmentDetailModel();

  constructor(private _activatedRoute: ActivatedRoute,
              private _shipmentService: ShipmentService,
              private _store: Store<State>,
              private _airlineService: AirlineService,
              private _airportService: AirportService) {

    this.shipmentDetailSlice = this._store.select(state => state.shipmentCaptureSlice);

    this.shipmentDetailSliceSubscription = this.shipmentDetailSlice.subscribe(
      shipmentCaptureSlice => this.updateShipmentCaptureModel(shipmentCaptureSlice)
    );
  }

  public ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      if (params["id"] && params["id"] !== "capture") {
        this.loadShipment(params["id"]);
      }
      console.log(params["id"]);
    });
  }

  public ngOnDestroy() {
    this._store.dispatch(new actions.ResetShipmentCaptureSliceAction(""));
    this.shipmentDetailSliceSubscription.unsubscribe();
  }

  // ***************************************************
  // Event Handler
  // ***************************************************
  public loadAirlineSuggestions(event: any) {
    this._airlineService.findAirlineSuggestions(event.query)
      .subscribe(customerSuggestionResource => this.airlineSuggestion = customerSuggestionResource);
  }

  public loadAirportSuggestions(event: any) {
    this._airportService.findAirportSuggestions(event.query)
      .subscribe(customerSuggestionResource => this.airportSuggestion = customerSuggestionResource);
  }
  public onAirlineSelected(airline: AirlineResource) {

    this.selectedAirline = airline;
  }

  public onAirportSelected(airport: AirportResource) {

    this.selectedAirport = airport;
  }

  // ***************************************************
  // Data Retrieval
  // ***************************************************

  private loadShipment(trackingId: string) {
    this._shipmentService.findShipmentbyId(trackingId).subscribe(
      shipment => {
        this._store.dispatch(new actions.LoadShipmentAction(shipment));
      }
    );
    console.log(trackingId);
  }

  private updateShipmentCaptureModel(shipmentCaptureSlice: ShipmentCaptureSlice) {
    this.shipmentDetailInfoModel.shipment = shipmentCaptureSlice.shipment;
  }


}
