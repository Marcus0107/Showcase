import {NgModule} from "@angular/core";
import {ShipmentCaptureModule} from "./shipment-capture/shipment-capture.module";
import {ShipmentListModule} from "./shipment-list/shipment-list.module";
import {TaskListModule} from "./task-list/task-list.module";
import {EnabledTaskListModule} from "./task-list_enabledTask/task_enabled-list.module";
import {ShipmentCommonModule} from "./shipment-common/shipment-common.module";
import {ConfirmationService} from "primeng/primeng";

@NgModule({
    imports: [
      ShipmentCaptureModule,
      ShipmentCommonModule,
      ShipmentListModule,
      TaskListModule,
      EnabledTaskListModule
    ],
    providers: [ConfirmationService]
})
export class ShipmentModule {
}
