import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {State} from "../../../app.reducers";
import {TaskService} from "../api/task.service";
import * as actions from "../store/enbaled-tasks/enabled-task-list-page.actions";
import {
  RequestEnabledTasksSuccessfulAction
} from "../store/enbaled-tasks/enabled-task-list-page.actions";
import {Store} from "@ngrx/store";

@Injectable()
export class EnabledTaskListEffect {

  constructor(private _actions: Actions,
              private _taskService: TaskService,
              private _store: Store<State>) {}

  @Effect()
  requestEnabledTasksForShipment = this._actions
    .ofType(actions.REQUEST_ENABLED_TASKS_FOR_SHIPMENT)
    .map((action: actions.RequestEnabledTasksForShipmentAction) => action.trackingId)
    .switchMap((payload) => {
      return this._taskService.findEnabledTasksToShipment(payload)
    })
    .map(enabledTaskListSlice => new RequestEnabledTasksSuccessfulAction(enabledTaskListSlice))

  @Effect()
  startEnabledTask = this._actions
    .ofType(actions.START_ENABLED_TASK)
    .map((action: actions.StartEnabledTaskAction) => action)
    .switchMap((payload) => {
    return this._taskService.manuallyStartEnabledTask(payload.trackingId, payload.taskName)
    })
}
