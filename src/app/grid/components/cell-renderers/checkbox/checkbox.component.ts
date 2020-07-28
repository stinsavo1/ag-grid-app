import { Component } from "@angular/core";

@Component({
  selector: "ag-checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox..component.css"]
})
export class CheckboxComponent {

  public checked = false;
  protected api: any;
  private node: any;

  public agInit(params: any): void {
    this.node = params.node;
    this.api = params.api;
    this.api.addEventListener("selectionChanged", () => this.onSelectionChange());
  }

  protected toggleCheck(event: MouseEvent): void {

    event.preventDefault();
    event.stopPropagation();

    this.checked = !this.checked;
    this.node.setSelected(this.checked);
  }

  protected onSelectionChange(): void {
    this.checked = this.node.isSelected();
  }

}
