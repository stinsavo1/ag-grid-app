import { Params } from 'src/app/shared/models/params.model';
import { Component } from '@angular/core';

/**
 * Panel component selected records for grid
 */
@Component({
  selector: 'app-selected-records-count',
  templateUrl: './selected-records-count.component.html',
  styleUrls: ['./selected-records-count.component.scss']
})
export class SelectedRecordsCountComponent {

  private count = 0;
  private params: Params;

  private agInit(params: Params): void {
    this.params = params;
    this.params.api.addEventListener('selectionChanged', this.onSelectionChange.bind(this));
  }

  /**
   * Recalculate selected rows on selection change
   */
  private onSelectionChange(): void {
    this.count = this.params.api.getSelectedRows().length;
  }
}
