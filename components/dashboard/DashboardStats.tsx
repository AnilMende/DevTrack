import { getDashboardStats } from "@/lib/dashboard";
import { title } from "process";

const DashboardStats = async () => {

    const stats = await getDashboardStats();

    const cards = [
        {
            title: "Total Projects",
            value: stats.totalProjects,
            description: "Projects you're managing"
        },
        {
            title: "Total Tasks",
            value: stats.totalTasks,
            description: "Tasks across all projects"
        },
        {
            title: "Completed",
            value: stats.completedTasks,
            description: "Tasks completed"
        },
        {
            title: "Pending",
            value: stats.pendingTasks,
            description: "Tasks still in progress"
        }
    ];

    return (
        <section className="mt-8">

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                {cards.map((card) => (
                    <div
                        key={card.title}
                        className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                    >

                        <p className="text-sm font-medium text-gray-500">
                            {card.title}
                        </p>

                        <p className="mt-3 text-3xl font-bold text-gray-900">
                            {card.value}
                        </p>

                        <p className="mt-2 text-sm text-gray-500">
                            {card.description}
                        </p>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default DashboardStats;