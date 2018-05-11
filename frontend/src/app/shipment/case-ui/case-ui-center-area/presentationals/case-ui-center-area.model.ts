import {ShipmentResource} from "../../../shipment-common/api/resources/shipment.resource";
import {InvoiceResource} from "../../../shipment-common/api/resources/invoice.resource";
import {TaskListResource} from "../../../shipment-common/api/resources/task-list.resource";

export class CaseUiCenterAreaModel {
  public shipment: ShipmentResource;
  public invoice: InvoiceResource;
  public activeTaskList: TaskListResource;
  public enabledTaskList: TaskListResource;
  public completedTaskList: TaskListResource;
}
