import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import * as shipmentCaptureActions from "../store/shipments/shipment-capture-page/shipment-capture-page.actions";
import * as organizeFlightactions from "../store/shipments/organize-flight-page/organize-flight-page.actions";
import {
  RequestTasksForShipmentAction
} from "../store/tasks/task-list-page.actions";
import {
  RequestEnabledTasksForShipmentAction
} from "../store/enbaled-tasks/enabled-task-list-page.actions";
import {
  RequestCompletedTaskForShipmentAction
} from "../store/completed-tasks/completed-task-list-page.actions";
import {RequestSingleShipment} from "../store/shipments/shipment-list-page/shipment-list-page.actions";


@Injectable()
export class CommonEffect {
  constructor(private _actions: Actions) {
  }

  @Effect()
  reloadShipment = this._actions
    .ofType("RELOAD_STORE_ACTION")
    .mergeMap((action: shipmentCaptureActions.ReloadStoreAction) => [
      new RequestSingleShipment(action.trackingId),
      new RequestTasksForShipmentAction(action.trackingId),
      new RequestEnabledTasksForShipmentAction(action.trackingId),
      new RequestCompletedTaskForShipmentAction(action.trackingId)
    ]);

}
