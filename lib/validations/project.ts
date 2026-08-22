import { z } from "zod";

export const createProjectSchema = z.object({

    name: z.string()
        .trim()
        .min(1, "Project name is required")
        .max(100, "Project name cannot exceed 100 characters"),

    description: z.string()
        .trim()
        .min(1, "Project description is required")
        .max(500, "Project description cannot exceed 500 characters"),

    status: z.enum(["ACTIVE", "COMPLETED", "ARCHIVED"])

});

export const updateProjectSchema = createProjectSchema.partial();

