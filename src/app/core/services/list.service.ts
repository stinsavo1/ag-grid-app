import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponse } from '../../shared/models/searchList.model';
import { API_KEY, BASE_URL } from 'src/app/config/app.config';

/**
 * Fetch data service for grid
 */
@Injectable()
export class ListService {

  constructor(private http: HttpClient) { }

  /**
   * Get videos
   */
  getVideos(query: string): Observable<ListResponse> {
    const maxResults = '50';
    const type = 'video';
    const part = 'snippet';
    const fullUrl = `${BASE_URL}?key=${API_KEY}&maxResults=${maxResults}&type=${type}&part=${part}&q=${query}`;
    return this.http.get<ListResponse>(fullUrl);
  }
}
