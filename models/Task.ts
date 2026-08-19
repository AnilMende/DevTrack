
import mongoose, { Schema, Document, Model } from "mongoose";

export interface ITask extends Document {
    title: string;
    description: string;
    projectId: mongoose.Types.ObjectId;
    status: "TODO" | "IN_PROGRESS" | "COMPLETED";
    priority: "LOW" | "MEDIUM" | "HIGH";
    dueDate: Date;
    createdAt: Date;
    updatedAt: Date;
}

const taskSchema = new Schema<ITask>({

    title: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: true,
        trim: true
    },

    projectId: {
        type: Schema.Types.ObjectId,
        ref: "Project",
        required: true
    },

    status: {
        type: String,
        enum: ["TODO", "IN_PROGRESS", "COMPLETED"],
        default: "TODO"
    },

    priority: {
        type: String,
        enum: ["LOW", "MEDIUM", "HARD"],
        default: "MEDIUM"
    },

    dueDate: {
        type: Date,
        required: true
    }
},
    {
        timestamps: true
    }
);

const Task: Model<ITask> =
    mongoose.models.Task ||
    mongoose.model<ITask>("Task", taskSchema);

export default Task;