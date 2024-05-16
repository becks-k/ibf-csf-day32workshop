export class ToDo {
    description!: string;
    priority!: string;
    dueDate!: Date;

    constructor(description: string, priority: string, dueDate: Date) {
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
    }

}