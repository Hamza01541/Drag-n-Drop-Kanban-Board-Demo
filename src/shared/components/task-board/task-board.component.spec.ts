import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TaskBoardComponent } from './task-board.component';

describe('TaskBoardComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TaskBoardComponent
      ],
    }).compileComponents();
  }));

  it('should create the TaskBoardComponent', () => {
    const fixture = TestBed.createComponent(TaskBoardComponent);
    const taskBoardComponent = fixture.componentInstance;
    expect(taskBoardComponent).toBeTruthy();
  });

});
