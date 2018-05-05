import {Component, OnDestroy, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {AirportResource} from "../../flights-common/api/airports/airport.resource";
import {AirlineResource} from "../../flights-common/api/airlines/airline.resource";
import {OrganizeFlightFormPageModel} from "../container/organize-flight-form-page.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AirlineService} from "../../flights-common/api/airlines/airline.service";
import {AirportService} from "../../flights-common/api/airports/airport.service";
import {State} from "../../../app.reducers";
import {RequestSingleShipment} from "../../../shipment/shipment-common/store/shipments/shipment-list-page/shipment-list-page.actions";
import {
  ResetShipmentCaptureSliceAction, ReloadStoreAction
} from "../../../shipment/shipment-common/store/shipments/shipment-capture-page/shipment-capture-page.actions";
import {SaveFlightAction} from "../../../shipment/shipment-common/store/shipments/organize-flight-page/organize-flight-page.actions";
import {OrganizeFlightResource} from "../../../shipment/shipment-common/api/resources/organize-flight.resource";
import {OrganizeFlightSlice} from "../../../shipment/shipment-common/store/shipments/organize-flight-page/organize-flight-page.slice";

@Component({
  selector: "educama-organize-flight-form",
  templateUrl: "./organize-flight-form.component.html",
  styleUrls: ["../organize-flight-form-style.scss"]
})
export class OrganizeFlightFormComponent implements OnInit, OnDestroy {

  private trackingId: string;
  value: Date;
  public airlineSuggestion: any;
  public airportSuggestion: any;

  selectedAirline: AirlineResource;
  selectedStartAirport: AirportResource;
  selectedDestinationAirport: AirportResource;


  public flightNumber: string;
  public price: number;

  public departureAirport: string;
  public departureDate: string;
  public destinationAirport: string;
  public destinationDate: string;


  public shipmentDetailSlice: Observable<OrganizeFlightSlice>;
  public shipmentDetailSliceSubscription: Subscription;

  public selectedTask: string;

  // model for the page
  public shipmentDetailInfoModel: OrganizeFlightFormPageModel = new OrganizeFlightFormPageModel();

  constructor(private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _store: Store<State>,
              private _airlineService: AirlineService,
              private _airportService: AirportService,) {

    this.shipmentDetailSlice = this._store.select(state => state.organizeFlightPageSlice);

    this.shipmentDetailSliceSubscription = this.shipmentDetailSlice.subscribe(
      shipmentCaptureSlice => this.updateShipmentCaptureModel(shipmentCaptureSlice)
    );
  }

  public ngOnInit() {
    this._activatedRoute.parent.params.subscribe(params => {
      this.trackingId = params["id"];
      this._store.dispatch(new RequestSingleShipment(params["id"]));
    });

    this.selectedTask = this._router.url.split("/")[3];

  }

  public ngOnDestroy() {
    this._store.dispatch(new ResetShipmentCaptureSliceAction(""));
    this.shipmentDetailSliceSubscription.unsubscribe();
  }


  // ***************************************************
  // Event Handler
  // ***************************************************

  // TODO: Remove if no evend is used, otherwise rename
  public loadAirlineSuggestions(event: any) {
    this._airlineService.findAirlineSuggestions(event.query)
      .subscribe(customerSuggestionResource => this.airlineSuggestion = customerSuggestionResource);
  }


  // ***************************************************
  // Data Retrieval
  // ***************************************************

  private updateShipmentCaptureModel(shipmentCaptureSlice: OrganizeFlightSlice) {
    this.shipmentDetailInfoModel.flight = shipmentCaptureSlice.flight;
  }

}
