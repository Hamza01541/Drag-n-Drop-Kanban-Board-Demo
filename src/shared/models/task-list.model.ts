export interface TaskList {
name: string;
newTaskName?: string;
tasks: Task[];
}

export interface Task {
    name: string;
}
