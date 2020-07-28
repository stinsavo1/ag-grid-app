import { LinkComponent } from '../cell-renderers/link/link.component';

/**
 * Video Title column settings
 */
export const titleColumn = {
  headerName: 'Video Title',
  field: 'title',
  filter: true,
  width: 300,
  suppressSizeToFit: true,
  cellRendererFramework: LinkComponent,
};
