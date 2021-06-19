import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TaskBoardService {

  constructor(private http: HttpClient) { }

 /**
  * Gets task lists.
  * @returns {Observable<any>}
  */
  gettaskLists(): Observable<any> {
    const url = 'assets/task-list.sample.json';
    return this.http.get(url);
  }
}
