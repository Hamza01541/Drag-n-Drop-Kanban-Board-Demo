import { Component, Input, OnInit } from '@angular/core';
import { TaskList } from 'src/shared/models';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {
  @Input() taskLists: TaskList[];

  moveFromListIndex: number;
  moveFromTaskIndex: number;
  moveToListIndex: number;
  moveToTaskIndex: number;
  newListName: string;

  ngOnInit() {
    this.moveFromListIndex = null;
    this.moveFromTaskIndex = null;
    this.moveToListIndex = null;
    this.moveToTaskIndex = null;
    this.newListName = '';
  }

  /**
   * Adds new Task List on board.
   * After adding new List, does input field empty.
   * @returns {void}
   */
  addNewList(): void {
    if (this.newListName.length) {
      const newList = {
        name: this.newListName,
        tasks: []
      };

      this.taskLists.push(newList);
      this.newListName = '';
    }
  }

  /**
   * Adds new task in current selected list.
   * After adding new task, does input field empty.
   * @param currentTaskLists
   * @returns {void}
   */
  addNewTask(currentTaskList: TaskList): void {
    if (currentTaskList.newTaskName.length) {
      const newTask = {
        name: currentTaskList.newTaskName
      };

      currentTaskList.tasks.push(newTask);
      currentTaskList.newTaskName = '';
    }
  }

  /**
   * Drag start event listener.
   * @param {number} moveFromListIndex Current list index from where item is moving.
   * @param {number} ticketIndex
   * @returns {void}
   */
  ondragstart(moveFromListIndex: number, ticketIndex: number): void {
    this.moveFromListIndex = moveFromListIndex;
    this.moveFromTaskIndex = ticketIndex;
  }

  /**
   * Drag over event listener.
   * @param {number} moveFromListIndex Current list index from where item is moving.
   * @returns {void}
   */
  dragover(moveFromListIndex: number): void {
    this.moveToListIndex = moveFromListIndex;
  }

  /**
   * Drag leave event listener.
   * @param {number} moveToTaskIndex Task index when current selected task is being dropped.
   * @returns {void}
   */
  onDragLeave(moveToTaskIndex: number): void {
    this.moveToTaskIndex = moveToTaskIndex;
  }

  /**
   * Performs drag and drop functionality.
   * Checks either current being drag and drop item exists in a single list or not,
   * and adds/removes tasks from lists accordingly.
   * @returns {void}
   */
  dragAndDropTask(): void {
    if (this.moveToListIndex !== this.moveFromListIndex || this.moveToTaskIndex !== this.moveFromTaskIndex) {
      const moveFromTaskList = this.taskLists[this.moveFromListIndex].tasks;
      const moveToTaskList = this.taskLists[this.moveToListIndex].tasks;
      // Dropping position is on top then prepands selected task otherwise appends it.
      const insertIndex = this.moveToTaskIndex + (this.moveToTaskIndex === 0 ? 0 : 1);

      // Drag and drop within Same list
      if (this.moveToListIndex === this.moveFromListIndex) {
        const moveFromTask = moveToTaskList[this.moveFromTaskIndex];

        moveToTaskList.splice(this.moveFromTaskIndex, 1);
        moveToTaskList.splice(insertIndex, 0, moveFromTask);
      } else { // Drag and drop bwtween different lists
        const moveFromTask = moveFromTaskList[this.moveFromTaskIndex];
        moveFromTaskList.splice(this.moveFromTaskIndex, 1);

        // Checks either there is any exiting task in dropable list. If there is no existing task then adds dropped task in that list.
        moveToTaskList.length ? moveToTaskList.splice(insertIndex, 0, moveFromTask) : moveToTaskList.push(moveFromTask);
      }
    }

    this.moveToListIndex = null;
    this.moveToTaskIndex = null;
  }
}
