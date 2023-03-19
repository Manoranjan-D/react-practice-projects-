export interface ITodo {
  id: number;
  todo: string;
  completed: boolean;
  date: Date;
}

export class Todo implements ITodo {
  id: number;
  todo: string;
  completed: boolean;
  date: Date;

  constructor(id: number, todo: string, completed: boolean, date: Date) {
    this.id = id;
    this.completed = completed;
    this.todo = todo;
    this.date = date;
  }

  public static fromJSON(todoData: string) {
    const id = Math.floor(Math.random() * 1000);
    return new Todo(id, todoData, false, new Date());
  }
}
