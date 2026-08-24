import ProjectCard from "@/components/projects/ProjectCard";
import Link from "next/link";

type Project = {
    _id: string;
    name: string;
    description: string;
    status: "ACTIVE" | "COMPLETED" | "ARCHIVED";
    createdAt: string
};

const getProjects = async (): Promise<Project[]> => {

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/projects`,
        {
            cache: "no-store",
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch projects");
    }

    const result = await response.json();

    return result.data;
}


const ProjectsPage = async () => {
    const projects = await getProjects();

    return (
        <main className="min-h-screen bg-gray-50 p-6 sm:p-8">
            <div className="mx-auto max-w-6xl">

                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                            Projects
                        </h1>

                        <p className="mt-1 text-sm text-gray-500">
                            Manage your development projects.
                        </p>
                    </div>

                    <Link
                        href="/projects/new"
                        className="inline-flex w-fit items-center rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
                    >
                        + Create Project
                    </Link>

                </div>

                {/* Projects */}
                <section className="mt-8">

                    {projects.length === 0 ? (

                        <div className="rounded-xl border border-gray-200 bg-white p-10 text-center shadow-sm">

                            <h2 className="text-lg font-semibold text-gray-900">
                                No projects yet
                            </h2>

                            <p className="mt-2 text-sm text-gray-500">
                                Create your first project to get started.
                            </p>

                            <Link
                                href="/projects/new"
                                className="mt-5 inline-flex rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
                            >
                                Create Project
                            </Link>

                        </div>

                    ) : (

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                            {projects.map((project) => (
                                <ProjectCard
                                    key={project._id}
                                    project={project}
                                />
                            ))}

                        </div>

                    )}

                </section>

            </div>
        </main>
    );
};

export default ProjectsPage;
