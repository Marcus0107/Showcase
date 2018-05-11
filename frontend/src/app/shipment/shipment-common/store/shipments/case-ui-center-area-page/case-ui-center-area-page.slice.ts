import {ShipmentResource} from "../../../api/resources/shipment.resource";
import {InvoiceResource} from "../../../api/resources/invoice.resource";
import {EnabledTaskListSlice} from "../../enbaled-tasks/enabled-task-list-page.slice";
import {EnabledTaskListResource} from "../../../api/resources/enabled-task-list.resource";
import {CompletedTaskListResource} from "../../../api/resources/completed-task-list.resource";
import {TaskListResource} from "../../../api/resources/task-list.resource";

export interface CaseUiCenterAreaSlice {
  invoice?: InvoiceResource;
  shipment?: ShipmentResource;
  enabledTaskList?: TaskListResource;
  completedTaskList?: TaskListResource;
  activeTaskList?: TaskListResource;
}
