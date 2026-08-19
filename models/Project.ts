import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProject extends Document {
    name: string;
    description: string;
    status: "ACTIVE" | "COMPLETED" | "ARCHIVED";
    createdAt: Date;
}

const projectSchema = new Schema<IProject>(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            required: true,
            trim: true
        },

        status: {
            type: String,
            enum: ["ACTIVE", "COMPLETED", "ARCHIVED"],
            default: "ACTIVE"
        }
    },
    {
        timestamps: true
    }
)

// If the model already exists: Use existing model
// Otherwise : Create Model
const Project: Model<IProject> =
    mongoose.models.Project ||
    mongoose.model<IProject>("Project", projectSchema);

export default Project;