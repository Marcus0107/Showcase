import {Action} from "@ngrx/store";
import {InvoiceResource} from "../../../api/resources/invoice.resource";

// Invoice API actions
export const CREATE_INVOICE_ACTION = "CREATE_INVOICE_ACTION";
export const CREATE_INVOICE_SUCCESSFUL_ACTION = "CREATE_INVOICE_SUCCESSFUL_ACTION";
export const GET_INVOICE_FOR_SHIPMENT_ACTION = "GET_INVOICE_FOR_SHIPMENT_ACTION";
export const GET_INVOICE_FOR_SHIPMENT_SUCESSFULL_ACTION = "GET_INVOICE_FOR_SHIPMENT_SUCESSFULL_ACTION";
export const CLEAR_INVOICE_PAGE_SLICE_ACTION = "CLEAR_INVOICE_PAGE_SLICE_ACTION";

export class CreateInvoiceAction implements Action {
  type = CREATE_INVOICE_ACTION;

  constructor(public trackingID: string, public payload: InvoiceResource) {
  }
}

export class CreateInvoiceSuccessfulAction implements Action {
  type = CREATE_INVOICE_SUCCESSFUL_ACTION;

  constructor(public payload: InvoiceResource) {
  }
}

export class GetInvoiceForShipmentAction implements Action {
  type = GET_INVOICE_FOR_SHIPMENT_ACTION;

  constructor(public trackingId: string) {
  }
}

export class GetInvoiceForShipmentSucessfullAction implements Action {
  type = GET_INVOICE_FOR_SHIPMENT_SUCESSFULL_ACTION;

  constructor(public payload: InvoiceResource) {
  }
}

export class ClearInvoicePageSliceAction implements Action {
  type = CLEAR_INVOICE_PAGE_SLICE_ACTION;

  constructor() {
  }
}
