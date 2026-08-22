import { connectToDatabase } from "@/lib/mongodb";
import { updateProjectSchema } from "@/lib/validations/project";
import Project from "@/models/Project";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { success } from "zod";


type RouteContext = {
    params: Promise<{ id: string }>;
};

export const GET = async (request: Request, { params }: RouteContext) => {

    try {

        const { id } = await params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid project Id"
                },
                { status: 400 }
            )
        };

        await connectToDatabase();

        // find project by id
        const project = await Project.findById(id);

        if (!project) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Project not found"
                },
                { status: 404 }
            );
        }

        // if the project is available with the Id then return it
        return NextResponse.json(
            {
                success: true,
                data: project
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("Get project error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch project"
            },
            { status: 500 }
        );
    }

}

// PATCH
export const PATCH = async (request: Request, { params }: RouteContext) => {

    try {
        const { id } = await params;

        // if the id is not valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid project Id"
                },
                { status: 400 }
            );
        }

        const body = await request.json();

        const result = updateProjectSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Validation failed",
                    errors: result.error.flatten().fieldErrors,
                },
                { status: 400 }
            );
        }

        await connectToDatabase();

        // finding the project with the id and updating the document
        // with the result
        const project = await Project.findByIdAndUpdate(
            id,
            result.data,
            {
                new: true,
                runValidators: true
            }
        );

        if (!project) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Project not found"
                },
                { status: 404 }
            );
        }


        return NextResponse.json(
            {
                success: true,
                message: "Project updated successfully",
                data: project
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("Update project error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to update project"
            },
            { status: 500 }
        );

    }
}

// Delete Project
export const DELETE = async (request : Request, { params} : RouteContext) => {

    try {
        const { id } = await params;

        if(!mongoose.Types.ObjectId.isValid(id)){
            return NextResponse.json(
                {
                    success : false,
                    message : "Invalid project Id"
                },
                { status : 400 }
            );
        };

        await connectToDatabase();

        // delete project by id
        const project = await Project.findByIdAndDelete(id);

        if(!project){
            return NextResponse.json(
                {
                    success : false,
                    message : "Project not found"
                },
                { status : 404 }
            )
        };

        return NextResponse.json(
            {
                success : true,
                message : "Project deleted successfully"
            },
            { status : 200 }
        );

    } catch (error) {
        console.error("Delete project error:", error);

        return NextResponse.json(
            {
                success : false,
                message : "Failed to delete project"
            },
            { status : 500 }
        );
        
    }
}