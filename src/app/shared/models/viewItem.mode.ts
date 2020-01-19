export class ViewItem {
  title: string;
  publishedAt: string;
  description: string;
  thumbnail: string;
  videoId: string;

  constructor(init: Partial<ViewItem>) {
    Object.assign(this, init);
  }
}
