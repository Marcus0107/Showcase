import {ActionReducer, Action} from "@ngrx/store";
import * as actions from "./case-ui-center-area-page.actions";
import {CaseUiCenterAreaSlice} from "./case-ui-center-area-page.slice";
import {CASE_UI_CENTER_AREA_SLICE} from "./case-ui-center-area-page.initial-state";

export function caseUiCenterAreaReducer(state: CaseUiCenterAreaSlice = CASE_UI_CENTER_AREA_SLICE,
                                        action: Action): CaseUiCenterAreaSlice {
  switch (action.type) {
    case actions.LOAD_INVOICE_FOR_CENTER_AREA_SUCCESSFUL_ACTION:
      const loadInvoiceSuccessfull = action as actions.LoadInvoiceSuccessfulForCaseUiCenterAreaAction;
      return Object.assign({}, state, {
        invoice: loadInvoiceSuccessfull.invoice
      });
    case actions.LOAD_ACTIVE_TASKS_FOR_CENTER_AREA_SUCCESFULL_ACTION:
      const loadActiveTasksSuccessfull = action as actions.LoadActiveTasksSuccesfullForCaseUiCenterAreaAction;
      return Object.assign({}, state, {
        activeTaskList: loadActiveTasksSuccessfull.activeTaskList
      });
    case actions.LOAD_ENABLED_TASKS_FOR_CENTER_AREA_SUCCESSFUL_ACTION:
      const loadEnabledTasksSuccessfull = action as actions.LoadEnabledTasksSuccessfulForCaseUiCenterAreaAction;
      return Object.assign({}, state, {
        enabledTaskList: loadEnabledTasksSuccessfull.enabledTaskList
      });
    case actions.LOAD_COMPLETED_TASKS_FOR_CENTER_AREA_SUCCESSFUL_ACTION:
      const loadCompletedTasksSuccessfull = action as actions.LoadCompletedTasksSuccessfulForCaseUiCenterAreaAction;
      return Object.assign({}, state, {
        completedTaskList: loadCompletedTasksSuccessfull.completedTaskList
      });
    case actions.LOAD_SHIPMENT_FOR_CENTER_AREA_SUCCESSFUL_ACTION:
      const loadShipmentSuccessfull = action as actions.LoadShipmentSuccesfullForCaseUiCenterAreaAction;
      return Object.assign({}, state, {
        shipment: loadShipmentSuccessfull.shipment
      });
    case actions.CLEAR_CASE_UI_CENTER_AREA_SLICE:
      return Object.assign([], state, {
        shipment: null,
        invoice: null,
        completedTaskList: null,
        activeTaskList: null,
        enabledTaskList: null
      });
    default:
      return state;
  }
}

export const CASE_UI_CENTER_AREA_REDUCER: ActionReducer<CaseUiCenterAreaSlice> = caseUiCenterAreaReducer;
