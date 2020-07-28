import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponse } from '../../shared/models/searchList.model';
import { API_KEY, BASE_URL } from '../../config/app.config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Item } from '../../shared/models/item.model';
import { ViewItem } from '../../shared/models/viewItem.mode';

const maxResults = '50';
const type = 'video';
const part = 'snippet';

@Injectable()
export class VideoService {


  constructor(private http: HttpClient) {
  }

  /**
   * Get url by video id
   */
  getVideoUrlById(videoId: string): string {
    return `https://www.youtube.com/watch?v=${videoId}`;
  }

  /**
   * Get videos
   */
  getVideos(): Observable<ViewItem[]> {
    const fullUrl = `${BASE_URL}?key=${API_KEY}&maxResults=${maxResults}&type=${type}&part=${part}&q=john`;
    return this.http.get(fullUrl).pipe(map(
      (list: ListResponse) => {
        return list.items.map((item: Item) => {
          return new ViewItem(
            {
              title: item.snippet.title,
              publishedAt: item.snippet.publishedAt,
              description: item.snippet.description,
              thumbnail: item.snippet.thumbnails.default.url,
              videoId: item.id.videoId
            }
          );
        });
      }
      ));
  }
}
