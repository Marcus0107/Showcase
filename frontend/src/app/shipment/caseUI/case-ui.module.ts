import {LeftSideBarModule} from "./case-uI-left-side-bar/case-ui-left-side-bar.module";
import {NgModule} from "@angular/core";
import {CaseUiComponent} from "./case-ui.component";
import {CaseUIShipmentDetailModule} from "./case-uI-shipment-detail/case-ui-shipment-detail.module";
import {ROUTING} from "../../app.routes";
import {NavigationModule} from "../../navigation/navigation.module";
import {SharedModule} from "primeng/primeng";
import {CaseUiCenterAreaModule} from "./case-ui-center-area/case-ui-center-area.module";

@NgModule({
  imports: [
    LeftSideBarModule,
    CaseUIShipmentDetailModule,
    CaseUiCenterAreaModule,
    NavigationModule,
    ROUTING
  ],
  declarations: [
    CaseUiComponent
  ],
  exports: [
    CaseUiComponent
  ]
})
export class CaseUIModule {
}
