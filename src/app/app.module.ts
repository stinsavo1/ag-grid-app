import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { GridModule } from './grid/grid.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { VideoService } from './core/services/video.service';
import { ListService } from './core/services/list.service';
import { NoContentComponent } from './no-content/no-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NoContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GridModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [VideoService, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
