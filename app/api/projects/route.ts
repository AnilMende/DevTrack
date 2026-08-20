import { connectToDatabase } from "@/lib/mongodb"
import { createProjectSchema } from "@/lib/validations/project";
import Project from "@/models/Project";
import { NextResponse } from "next/server";


export const GET = async () => {

    try {
        // connecting to database
        await connectToDatabase();

        // get all documents from the mongodb
        const projects = await Project.find().sort({ createdAt: -1 });

        return NextResponse.json(
            {
                success: true,
                data: projects
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("Get projects error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch projects"
            },
            { status: 500 }
        );

    }
}

export const POST = async (request: Request) => {

    try {
        await connectToDatabase();

        const body = await request.json();

        const result = createProjectSchema.safeParse(body);

        // validation failed
        if (!result.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Failed",
                    errors: result.error.flatten().fieldErrors,
                },
                { status: 401 }
            )
        }

        const project = await Project.create(result.data);

        return NextResponse.json(
            {
                success: true,
                message: "Project created successfully",
                data: project
            },
            { status: 201 }
        );

    } catch (error) {
        console.error("Creat project error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to create project"
            },
            { status: 500 }
        );
    }
}