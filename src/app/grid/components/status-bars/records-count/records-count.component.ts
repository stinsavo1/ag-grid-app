import { Params } from 'src/app/shared/models/params.model';
import { Component } from '@angular/core';

/**
 * Panel component total records count for grid
 */
@Component({
  selector: 'app-records-count',
  templateUrl: './records-count.component.html',
  styleUrls: ['./records-count.component.scss']
})
export class RecordsCountComponent {

  private params: Params;
  private count = 0;

  private agInit(params: Params): void {
    this.params = params;
    this.params.api.addEventListener('modelUpdated', this.onModelUpdate.bind(this));
  }

  /**
   * Get total row count
   */
  private onModelUpdate(): void {
    this.count = this.params.api.getModel().getRowCount();
  }
}
