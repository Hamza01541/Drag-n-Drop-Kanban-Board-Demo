import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient} from '@angular/common/http';

import { TaskBoardService } from './task-board.service';
import { HttpTestingController } from '@angular/common/http/testing';

describe('TranslateService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        TaskBoardService,
        HttpClient,
      ]
    });

    injector = getTestBed();
    httpMock = injector.inject(HttpTestingController);
  });

  describe('#Set the language', () => {
    afterEach(() => {
      httpMock.verify();
    });

    it('should be created', inject([TaskBoardService], (service: TaskBoardService) => {
      expect(service).toBeTruthy();
    }));

    it('test url', inject([TaskBoardService], (service: TaskBoardService) => {
      const url = 'assets/task-list.sample.json';
      service.gettaskLists();
      const req = httpMock.expectOne(url);
      expect(req.request.url).toEqual(url);
    }));
  });
});
