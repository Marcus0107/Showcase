import {ActionReducer, Action} from "@ngrx/store";
import * as actions from "./invoice-page.actions";
import {INVOICE_LIST_SLICE_INITIAL_STATE} from "./invoice-page.initial-state";
import {InvoicePageSlice} from "./invoice-page.slice";

export function invoicePageReducer(state: InvoicePageSlice = INVOICE_LIST_SLICE_INITIAL_STATE,
                                   action: Action): InvoicePageSlice {
  switch (action.type) {
    case actions.CREATE_INVOICE_SUCCESSFUL_ACTION:
      const saveFlightSuccessfultAction = action as actions.CreateInvoiceSuccessfulAction;
      return Object.assign({}, state, {
        invoice: saveFlightSuccessfultAction.payload
      });
    case actions.GET_INVOICE_FOR_SHIPMENT_SUCESSFULL_ACTION:
      const getFlightSuccessfultAction = action as actions.GetInvoiceForShipmentSucessfullAction;
      return Object.assign({}, state, {
        invoice: getFlightSuccessfultAction.payload
      });
    case actions.CLEAR_INVOICE_PAGE_SLICE_ACTION:
      return Object.assign({}, state, {
        invoice: null
      });
    default:
      return state;
  }
}

export const INVOICE_PAGE_REDUCER: ActionReducer<InvoicePageSlice> = invoicePageReducer;
