import { DateComponent } from '../cell-renderers/date/date.component';

/**
 * Published collumn setting
 */
export const publishedAtColumn = {
  headerName: 'Published on',
  field: 'publishedAt',
  suppressSizeToFit: true,
  cellRendererFramework: DateComponent,
  sortable: true,
  filter: true
};
