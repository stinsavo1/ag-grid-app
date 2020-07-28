/**
 * Selection column configuration
 */
import { CheckboxComponent } from "../cell-renderers/checkbox/checkbox.component";
import { HeaderCheckboxComponent } from "../cell-renderers/checkbox/header.checkbox.component";

export const selectionColumn = {
  headerName: '',
  field: 'selection',
  width: 50,
  cellRendererFramework: CheckboxComponent,
  hide: true,
  headerComponentFramework: HeaderCheckboxComponent
};

