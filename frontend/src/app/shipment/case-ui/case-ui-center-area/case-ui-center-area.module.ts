import {SharedModule} from "../../../shared/shared.module";
import {NgModule} from "@angular/core";
import {FieldsetModule} from "primeng/primeng";
import {CaseUiCenterAreaComponent} from "./presentationals/case-ui-center-area.component";
import {CaseUiCenterAreaPageComponent} from "./container/case-ui-center-area-page.component";
import {OrganizeFlightFormModule} from "../../../flights/organize-flight-form/organize-flight-form.module";
import {ShipmentCaptureModule} from "../../shipment-capture/shipment-capture.module";
import {TaskListModule} from "../../task-list/task-list.module";

@NgModule({
  imports: [
    SharedModule,
    FieldsetModule,
    ShipmentCaptureModule,
    TaskListModule
  ],
  declarations: [
    CaseUiCenterAreaComponent,
    CaseUiCenterAreaPageComponent
  ],
  exports: [
    CaseUiCenterAreaComponent,
    CaseUiCenterAreaPageComponent
  ]
})
export class CaseUiCenterAreaModule {
}
