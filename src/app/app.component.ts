import { Component, OnInit } from '@angular/core';
import { TaskList } from 'src/shared/models';
import { TaskBoardService } from 'src/shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  taskLists: TaskList[];

  constructor(private taskBoardService: TaskBoardService) { }

  ngOnInit() {
    this.taskLists = [];
    this.gettaskLists();
  }

  /**
   * Gets task lists.
   * @returns {void}
   */
  gettaskLists(): void {
    this.taskBoardService.gettaskLists().subscribe(taskLists => {
      this.taskLists = taskLists;
    }, error => {
      this.taskLists = [];
    });
  }
}
