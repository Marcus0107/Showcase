import {SharedModule} from "../../shared/shared.module";
import {CaseUIShipmentDetailComponent} from "./caseUI-shipmentDetail/presentationals/caseUI-shipmentDetail.component";
import {CaseUIShipmentDetailPageComponent} from "./caseUI-shipmentDetail/container/caseUI-shipmentDetail-page.component";
import {NgModule} from "@angular/core";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    CaseUIShipmentDetailComponent,
    CaseUIShipmentDetailPageComponent
  ],
  exports: [
    CaseUIShipmentDetailPageComponent
  ]
})
export class  CaseUIShipmentDetailModule {
}
