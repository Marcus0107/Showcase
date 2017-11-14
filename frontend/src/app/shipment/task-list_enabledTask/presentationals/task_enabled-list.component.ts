import {Component, Input, Output, EventEmitter} from "@angular/core";
import {TaskResource} from "../../shipment-common/api/resources/task.resource";
import {EnabledTaskListRowModel} from "../container/task_enabled-list-page.model";
import {ConfirmationService, ConfirmDialogModule} from "primeng/primeng";

@Component({
    selector: "educama-enabled-task-list",
    templateUrl: "./task_enabled-list.component.html",
    providers: [ConfirmationService]
})
export class EnabledTaskListComponent {

    constructor(private confirmationService: ConfirmationService) {}

    @Input()
    public enabledTaskList: EnabledTaskListRowModel[];

    @Output()
    public selectedEnabledTask: TaskResource = new TaskResource();

    @Output()
    public taskSelectedEvent: EventEmitter<string> = new EventEmitter();

    public onRowSelect(event: Event) {
     this.confirm();
    }

  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.taskSelectedEvent.emit(this.selectedEnabledTask.trackingId);
      }
    });
  }
}
