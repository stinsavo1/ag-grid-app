import { GridApi, ColumnApi } from 'ag-grid-community';

export class Params {
  api: GridApi;
  columnApi: ColumnApi;
  context: any;
  [key: string]: any;
}
