import { Item } from './item.model';
import { PageInfo } from './pageInfo.mode';

export class ListResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: Item[];
}
