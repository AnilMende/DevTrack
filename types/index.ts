

export type ProjectStatus = "ACTIVE" | "COMPLETED" | "ARCHIVED";

export type TaskStatus = "TODO" | "IN_PROGRESS" | "COMPLETED";

export type TaskPriority = "LOW" | "MEDIUM" | "HIGH";

export interface Project {
    _id : string;
    name : string;
    description : string;
    status : ProjectStatus;
    createdAt : Date;
    updatedAt : Date;
}

export interface Task {
    _id : string;
    title : string;
    description : string;
    projectId : string;
    status : TaskStatus;
    priority : TaskPriority;
    dueDate : Date;
    createdAt : Date;
    updatedAt : Date;
}