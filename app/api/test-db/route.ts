import { connectToDatabase } from "@/lib/mongodb"
import Project from "@/models/Project";
import { NextResponse } from "next/server";


export const GET = async () => {

    try {
        await connectToDatabase();

        // creating mongodb document
        const project = await Project.create({
            name : "Test Project",
            description : "Testing MongoDB connection with Next.js",
            status : "ACTIVE"
        });

        // returning response 
        return NextResponse.json(
            {
                success : true,
                message : "Project created successfully",
                data : project
            },
            { status : 201 }
        );

    } catch (error) {
        console.error("TestDB error :", error);

        return NextResponse.json(
            {
                success : false,
                message : "Failed to connect to database"
            },
            { status : 500 }
        );

    }
}