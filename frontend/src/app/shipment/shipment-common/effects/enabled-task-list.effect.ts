import {Injectable} from "@angular/core";
import {Actions, Effect, toPayload} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {State} from "../../../app.reducers";
import {Observable} from "rxjs/Observable";
import {TaskService} from "../api/task.service";
import * as actions from "../store/enbaled-tasks/enabled-task-list-page.actions";
import {EnabledTaskListSlice} from "../store/enbaled-tasks/enabled-task-list-page.slice";
import {
  RequestEnabledTasksFailedAction,
  RequestEnabledTasksSuccessfulAction
} from "../store/enbaled-tasks/enabled-task-list-page.actions";

@Injectable()
export class EnabledTaskListEffect {
  private id: string;
  constructor(private _actions: Actions,
              private _taskService: TaskService,
              private _store: Store<State>) {

  }

  @Effect() loadEnabledTasks = this._actions
    .ofType(actions.REQUEST_ENABLED_TASKS_FOR_SHIPMENT)
    .map((action: actions.RequestEnabledTasksForShipmentAction) => this.id = action.trackingId)
    .withLatestFrom(this._store, (action, state) => state.enabledTaskListSlice)
    .switchMap((enabledTaskListSlice: EnabledTaskListSlice) => {

      return this._taskService.findEnabledTasksToShipment(this.id);
    })
    .map(enabledTaskListSlice => new RequestEnabledTasksSuccessfulAction(enabledTaskListSlice))
    .catch(() => Observable.of(new RequestEnabledTasksFailedAction()));
}
