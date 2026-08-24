
import { connectToDatabase } from "./mongodb";
import Project from "@/models/Project";
import Task from "@/models/Task";

export const getDashboardStats = async () => {

    await connectToDatabase();

    const [
        totalProjects,
        totalTasks,
        completedTasks,
        pendingTasks
    ] = await Promise.all([

        Project.countDocuments(),
        Task.countDocuments(),

        Task.countDocuments({
            status: "COMPLETED"
        }),

        Task.countDocuments({
            status: {
                $in: ["TODO", "IN_PROGRESS"],
            },
        })
    ]);


    return {
        totalProjects,
        totalTasks,
        completedTasks,
        pendingTasks
    };

}