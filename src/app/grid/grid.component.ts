import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ColumnApi, GridApi, GridOptions } from 'ag-grid-community';
import { VideoService } from '../core/services/video.service';
import { ViewItem } from '../shared/models/viewItem.mode';
import { RecordsCountComponent } from './components/status-bars/records-count/records-count.component';
import { SelectedRecordsCountComponent } from './components/status-bars/selected-records-count/selected-records-count.component';
import { SelectionToggleComponent } from './components/status-bars/selection-toggle/selection-toggle.component';
import { thumbnailColumn } from './components/col-defs/thumbnail-column';
import { publishedAtColumn } from './components/col-defs/published-at-column';
import { titleColumn } from './components/col-defs/title-column';
import { descriptionColumn } from './components/col-defs/description-column';
import { selectionColumn } from "./components/col-defs/selection-column";

/**
 * Represent grid component with it configuration
 */
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  /**
   * Grid data
   */
  public rowData: Observable<ViewItem[]>;

  public gridConfiguration: GridOptions = {
    paginationAutoPageSize: true,
    suppressCellSelection: true,
    defaultColDef: {
      resizable: true,
      filter: true,
    },
    statusBar: {
      statusPanels: [
        {statusPanel: 'selectionToggleComponent', align: 'left'},
        {statusPanel: 'countStatusBarComponent'},
        {statusPanel: 'countSelectedRecordsComponent'}
      ]
    },
    rowHeight: 90,
    suppressRowClickSelection: true,
    frameworkComponents: {
      countStatusBarComponent: RecordsCountComponent,
      countSelectedRecordsComponent: SelectedRecordsCountComponent,
      selectionToggleComponent: SelectionToggleComponent
    },
    columnDefs: [
      selectionColumn,
      thumbnailColumn,
      publishedAtColumn,
      titleColumn,
      descriptionColumn,
    ],
    rowSelection: 'multiple',
    getContextMenuItems: (params) => this.getContextMenuItems(params),
    context: this
  };


  constructor(private videoService: VideoService) {
  }

  /**
   * Icon for conext menu 'open in new tab'
   */
  static getTabIcon(): string {
    return `
         <svg
         style="width: 16px; height: 16px; fill: #7F8C8D; margin-bottom: -2px;"
         viewBox="0 0 24 24"
         focusable="false"
         aria-hidden="true">
           <use xlink:href="#new-window"></use>
         </svg>
         <svg
         style="display: none"
         version="1.1"
         xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink" hidden>
           <symbol id="new-window" viewBox="0 0 24 24">
              <g transform="scale(0.0234375 0.0234375)">
                <path d="M598 128h298v298h-86v-152l-418 418-60-60 418-418h-152v-86zM810
                810v-298h86v298c0 46-40 86-86 86h-596c-48 0-86-40-86-86v-596c0-46 38-86 86-86h298v86h-298v596h596z"></path>
              </g>
          </symbol>
         </svg>
        `;
  }

  ngOnInit(): void {
    this.rowData = this.videoService.getVideos();
  }

  public onGridReady(event: { api: GridApi, columnApi: ColumnApi, type: string }): void {
    event.api.sizeColumnsToFit();
  }

  /**
   * Custom context menu
   */
  public getContextMenuItems(params): any[] {
    const openInNewTabAction = () => {
      window.open(this.videoService.getVideoUrlById(params.node.data.videoId), '_blank');
    };
    const openInNewTabItem = {
      name: 'Open in new tab',
      shortcut: 'Ctrl+Shift+Click',
      icon: GridComponent.getTabIcon(),
      action: openInNewTabAction
    };
    return [
      openInNewTabItem
    ];
  }
}
