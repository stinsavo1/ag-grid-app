import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { GridModule } from './grid/grid.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { VideoService } from './core/services/video.service';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GridModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
