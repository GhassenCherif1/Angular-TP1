export type TodoStatus = 'waiting' | 'in progress' | 'done';
let idGenerated = 1;

export class Todo {
  id: number;

  constructor(
    public name = '',
    public content = '',
    public status: TodoStatus = 'waiting'
  ) {
    this.id = idGenerated++;
    this.status = status;
  }
}