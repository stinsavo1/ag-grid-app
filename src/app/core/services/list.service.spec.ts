import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ListService } from './list.service';


describe('SearchListService', () => {

  let service: ListService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ListService]
    });
    service = TestBed.get(ListService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get url with parameters', () => {
    const mockResponse = [{
      items: [
        {
          id: 3
        }
      ]
    }];
    const query = 'testquery';
    service.getVideos(query)
      .subscribe(r => {
        expect(r.items.length > 0).toBe(true);
      });

    const req = httpTestingController.expectOne((r) => r.url.includes(query));
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });
});
