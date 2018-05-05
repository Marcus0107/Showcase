import {Component, Input} from "@angular/core";
import {ShipmentResource} from "../../../shipment-common/api/resources/shipment.resource";

@Component({
  selector: "educama-caseui-shipment-detail",
  templateUrl: "./case-ui-shipment-detail.component.html",
  styleUrls: ["../case-ui-shipment-detail-style.scss"]
})
export class CaseUIShipmentDetailComponent {
  @Input()
  public shipment: ShipmentResource;

  constructor() {
  }
}
