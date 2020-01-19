import { Injectable } from '@angular/core';

@Injectable()
export class VideoService {

  /**
   * Get url by video id
   */
  getVideoUrlById(videoId: string): string {
    return `https://www.youtube.com/watch?v=${videoId}`;
  }
}
