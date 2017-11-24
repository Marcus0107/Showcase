import {LeftSideBarModule} from "./caseUI-leftSideBar/leftSideBar.module";
import {LeftSideBarComponent} from "./caseUI-leftSideBar/leftSideBar.component";
import {NgModule} from "@angular/core";
import {CaseUiComponent} from "./caseUi.component";

@NgModule({
    imports: [
      LeftSideBarModule
    ],
  declarations:[
    CaseUiComponent
  ],
  exports:[
    CaseUiComponent
  ]
})
export class CaseUIModule {
}
