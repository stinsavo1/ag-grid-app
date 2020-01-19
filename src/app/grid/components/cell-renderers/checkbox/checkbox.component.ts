import { Params } from 'src/app/shared/models/params.model';
import { Component, ViewChild, ElementRef } from '@angular/core';

/**
 * Header checkbox component for grid
 */
@Component({
  selector: 'app-header-checkbox-selection',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  private params: Params;
  private ascSort: string;
  private descSort: string;
  private noSort: string;
  private selectAll = false;
  @ViewChild('menuButton', { read: ElementRef, static: false }) public menuButton;

  private get isCheckboxVisible(): boolean {
    const { headerComponentParams } = this.params.column.colDef;
    if (typeof headerComponentParams === 'function') {
      return headerComponentParams(this.params);
    }
    return false;
  }

  private agInit(params: Params): void {
    this.params = params;
    params.column.addEventListener('sortChanged', this.onSortChanged.bind(this));
    params.api.addEventListener('selectionChanged', this.onSelectionChanged.bind(this));
  }

  private onMenuClicked(): void {
    this.params.showColumnMenu(this.menuButton.nativeElement);
  }

  private onSortChanged(): void {
    this.ascSort = this.descSort = this.noSort = 'inactive';
    if (this.params.column.isSortAscending()) {
      this.ascSort = 'active';
    } else if (this.params.column.isSortDescending()) {
      this.descSort = 'active';
    } else {
      this.noSort = 'active';
    }
  }

  /**
   * Update header checkbox state
   */
  private onSelectionChanged(): void {
    this.selectAll = this.params.api.getSelectedRows().length === this.params.api.getDisplayedRowCount();
  }

  private onSortRequested(order, event): void {
    this.params.setSort(order, event.shiftKey);
  }

  private onChange(event): void {
    event.preventDefault();
    if (this.selectAll) {
      this.params.api.selectAll();
    } else {
      this.params.api.deselectAll();
    }
  }
}
