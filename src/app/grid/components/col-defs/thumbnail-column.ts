import { ImageComponent } from '../cell-renderers/image/image.component';

/**
 * Thumbnail column settings
 */
export const thumbnailColumn = {
  headerName: '',
  field: 'thumbnail',
  filter: true,
  suppressSizeToFit: true,
  width: 150,
  cellRendererFramework: ImageComponent,
};
