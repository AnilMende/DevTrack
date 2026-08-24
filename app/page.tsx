import Link from "next/link";
import DashboardStats from "@/components/dashboard/DashboardStats";

const HomePage = () => {

    return (
        <main className="min-h-screen bg-gray-50 px-6 py-10 sm:px-8">

            <div className="mx-auto max-w-6xl">

                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div>

                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                            DevTrack
                        </h1>

                        <p className="mt-2 text-gray-600">
                            Track your projects and tasks in one place.
                        </p>

                    </div>

                    <Link
                        href="/projects"
                        className="w-fit rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
                    >
                        View Projects
                    </Link>

                </div>

                {/* Statistics */}
                <DashboardStats />

            </div>

        </main>
    );
};

export default HomePage;
