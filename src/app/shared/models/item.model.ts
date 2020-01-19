import { ID } from './id.model';
import { Snippet } from './snippet.model';

export class Item {
  kind: string;
  etag: string;
  id: ID;
  snippet: Snippet;
}
