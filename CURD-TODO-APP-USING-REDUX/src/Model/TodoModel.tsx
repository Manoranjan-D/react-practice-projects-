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
    this.todo = todo;
    this.completed = completed;
    this.date = date;
  }

  public static fromJson(todo: string) {
    const id = Math.floor(Math.random() * 1000);
    return new Todo(id, todo, false, new Date());
  }
}
