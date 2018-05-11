import {Action} from "@ngrx/store";
import {InvoiceResource} from "../../../api/resources/invoice.resource";
import {ShipmentResource} from "../../../api/resources/shipment.resource";
import {TaskListResource} from "../../../api/resources/task-list.resource";

// Invoice API actions
export const LOAD_SHIPMENT_FOR_CENTER_AREA_ACTION = "LOAD_SHIPMENT_FOR_CENTER_AREA_ACTION";
export const LOAD_ACTIVE_TASKS_FOR_CENTER_AREA_ACTION = "LOAD_ACTIVE_TASKS_FOR_CENTER_AREA_ACTION";
export const LOAD_ENABLED_TASKS_FOR_CENTER_AREA_ACTION = "LOAD_ENABLED_TASKS_FOR_CENTER_AREA_ACTION";
export const LOAD_COMPLETED_TASKS_FOR_CENTER_AREA_ACTION = "LOAD_COMPLETED_TASKS_FOR_CENTER_AREA_ACTION";
export const LOAD_INVOICE_FOR_CENTER_AREA_ACTION = "LOAD_INVOICE_FOR_CENTER_AREA_ACTION";

export const LOAD_SHIPMENT_FOR_CENTER_AREA_SUCCESSFUL_ACTION = "LOAD_SHIPMENT_FOR_CENTER_AREA_SUCCESSFUL_ACTION";
export const LOAD_ACTIVE_TASKS_FOR_CENTER_AREA_SUCCESFULL_ACTION = "LOAD_ACTIVE_TASKS_FOR_CENTER_AREA_SUCCESFULL_ACTION";
export const LOAD_ENABLED_TASKS_FOR_CENTER_AREA_SUCCESSFUL_ACTION = "LOAD_ENABLED_TASKS_FOR_CENTER_AREA_SUCCESSFUL_ACTION";
export const LOAD_COMPLETED_TASKS_FOR_CENTER_AREA_SUCCESSFUL_ACTION = "LOAD_COMPLETED_TASKS_FOR_CENTER_AREA_SUCCESSFUL_ACTION";
export const LOAD_INVOICE_FOR_CENTER_AREA_SUCCESSFUL_ACTION = "LOAD_INVOICE_FOR_CENTER_AREA_SUCCESSFUL_ACTION";

export const CLEAR_CASE_UI_CENTER_AREA_SLICE = "CLEAR_CASE_UI_CENTER_AREA_SLICE";
export const RELOAD_SHIPMENT_AND_TASK_FOR_CASE_UI_ACTION = "RELOAD_SHIPMENT_AND_TASK_FOR_CASE_UI_ACTION";

export class LoadShipmentForCaseUiCenterAreaAction implements Action {
  type = LOAD_SHIPMENT_FOR_CENTER_AREA_ACTION;

  constructor(public trackingID: string) {
  }
}

export class LoadShipmentSuccesfullForCaseUiCenterAreaAction implements Action {
  type = LOAD_SHIPMENT_FOR_CENTER_AREA_SUCCESSFUL_ACTION;

  constructor(public shipment: ShipmentResource) {
  }
}

export class LoadActiveTasksForCaseUiCenterAreaAction implements Action {
  type = LOAD_ACTIVE_TASKS_FOR_CENTER_AREA_ACTION;

  constructor(public trackingID: string) {
  }
}

export class LoadActiveTasksSuccesfullForCaseUiCenterAreaAction implements Action {
  type = LOAD_ACTIVE_TASKS_FOR_CENTER_AREA_SUCCESFULL_ACTION;

  constructor(public activeTaskList: TaskListResource) {
  }
}

export class LoadEnabledTasksForCaseUiCenterAreaAction implements Action {
  type = LOAD_ENABLED_TASKS_FOR_CENTER_AREA_ACTION;

  constructor(public trackingID: string) {
  }
}

export class LoadEnabledTasksSuccessfulForCaseUiCenterAreaAction implements Action {
  type = LOAD_ENABLED_TASKS_FOR_CENTER_AREA_SUCCESSFUL_ACTION;

  constructor(public enabledTaskList: TaskListResource) {
  }
}

export class LoadCompletedTasksForCaseUiCenterAreaAction implements Action {
  type = LOAD_COMPLETED_TASKS_FOR_CENTER_AREA_ACTION;

  constructor(public trackingID: string) {
  }
}

export class LoadCompletedTasksSuccessfulForCaseUiCenterAreaAction implements Action {
  type = LOAD_COMPLETED_TASKS_FOR_CENTER_AREA_SUCCESSFUL_ACTION;

  constructor(public completedTaskList: TaskListResource) {
  }
}

export class LoadInvoiceForCaseUiCenterAreaAction implements Action {
  type = LOAD_INVOICE_FOR_CENTER_AREA_ACTION;

  constructor(public trackingID: string) {
  }
}

export class LoadInvoiceSuccessfulForCaseUiCenterAreaAction implements Action {
  type = LOAD_INVOICE_FOR_CENTER_AREA_SUCCESSFUL_ACTION;

  constructor(public invoice: InvoiceResource) {
  }
}

export class ClearCaseUiCenterAreaSlice implements Action {
  type = CLEAR_CASE_UI_CENTER_AREA_SLICE;

  constructor() {
  }
}

export class ReloadShipmentAndTasksForCaseUiACtion implements Action {
  type = RELOAD_SHIPMENT_AND_TASK_FOR_CASE_UI_ACTION;

  constructor(public trackingId: string) {
  }
}





