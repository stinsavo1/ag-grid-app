import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Params } from '@angular/router';
import { VideoService } from 'src/app/core/services/video.service';

/**
 * Link cell component for grid
 */
@Component({
  selector: 'app-link-cell',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements ICellRendererAngularComp {
  private params: Params;
  public url: string;
  public title: string;

  constructor(private service: VideoService) { }

  public agInit(params): void {
    this.params = params;
    this.setUrl(this.params);
  }

  public setUrl(params: Params): void {
    this.url = this.service.getVideoUrlById(params.data.videoId);
    this.title = params.value;
  }

  public refresh(): boolean {
    this.setUrl(this.params);
    return true;
  }
}
