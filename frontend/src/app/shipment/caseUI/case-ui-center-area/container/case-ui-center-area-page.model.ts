import {ShipmentResource} from "../../../shipment-common/api/resources/shipment.resource";
import {TaskResource} from "../../../shipment-common/api/resources/task.resource";
import {InvoiceResource} from "../../../shipment-common/api/resources/invoice.resource";

export class CaseUiCenterAreaPageModel {
  public shipment: ShipmentResource;
  public invoice: InvoiceResource;
}
