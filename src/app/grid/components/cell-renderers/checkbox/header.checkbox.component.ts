import { Component } from "@angular/core";
import { CheckboxComponent } from "./checkbox.component";

@Component({
  selector: "header-ag-checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./header.checkbox.component.css"]
})
export class HeaderCheckboxComponent extends CheckboxComponent {

  public checked = false;

  public agInit(params: any): void {
    super.agInit(params);
  }

  protected toggleCheck(event: MouseEvent): void {

    event.preventDefault();
    event.stopPropagation();

    if (!this.checked) {
      this.api.selectAll();
    } else {
      this.api.deselectAll();
    }
  }

  protected onSelectionChange(): void {
    this.checked = this.api.getModel().getRowCount() === this.api.getSelectedNodes().length;
  }
}
