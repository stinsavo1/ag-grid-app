import { GridComponent } from './grid.component';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { RecordsCountComponent } from './components/status-bars/records-count/records-count.component';
import { SelectedRecordsCountComponent } from './components/status-bars/selected-records-count/selected-records-count.component';
import { SelectionToggleComponent } from './components/status-bars/selection-toggle/selection-toggle.component';
import { LinkComponent } from './components/cell-renderers/link/link.component';
import { DateComponent } from './components/cell-renderers/date/date.component';
import { ImageComponent } from './components/cell-renderers/image/image.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import 'ag-grid-enterprise';
import { CheckboxComponent } from "./components/cell-renderers/checkbox/checkbox.component";
import { HeaderCheckboxComponent } from "./components/cell-renderers/checkbox/header.checkbox.component";

/**
 * AgGrid components
 */
const gridComponents = [
  RecordsCountComponent,
  SelectedRecordsCountComponent,
  SelectionToggleComponent,
  LinkComponent,
  DateComponent,
  ImageComponent,
  CheckboxComponent,
  HeaderCheckboxComponent
];


@NgModule({
  declarations: [
    GridComponent,
    ...gridComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents(gridComponents),
  ],
})
export class GridModule {
}
