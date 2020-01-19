import { Component } from '@angular/core';
import { Params } from '@angular/router';

@Component({
  selector: 'app-selection-toggle',
  templateUrl: './selection-toggle.component.html',
  styleUrls: ['./selection-toggle.component.scss']
})
export class SelectionToggleComponent {

  private params: Params;

  /**
   * Can restore selected nodes
   * after triggering 'selection' modes
   */
  private selectedNodes = [];

  private agInit(params: Params): void {
    this.params = params;
  }

  /**
   * Show or hide 'selection' column
   */
  private toggleSelectionMode(event): void {
    event.preventDefault();
    const visible = this.getCurrentVisibility();
    if (visible) {
      this.selectedNodes = this.params.api.getSelectedNodes();
      this.params.api.deselectAll();
    } else {
      this.selectedNodes.forEach(node => node.setSelected(true));
    }
    this.setColumnVisibility('selection', !visible);
  }

  /**
   * Set visibility of column
   */
  private setColumnVisibility(columnKey: string, visible: boolean): void {
    this.params.columnApi.setColumnVisible(columnKey, visible);
  }

  /**
   * Get visibility of 'selection' column
   */
  private getCurrentVisibility(): boolean {
    return this.params.columnApi.getColumn('selection').isVisible();
  }
}
