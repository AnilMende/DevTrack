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
        `${process.env.NEXT_PUBLIC_APP_URL}/api/projects`,
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
        <main className="min-h-screen bg-gray-100 p-8">
            <div className="mx-auto max-w-6xl">
                <h1 className="text-3xl font-bold text-gray-900">
                    Projects
                </h1>

                <Link href="/projects/new">Create Project</Link>

                {/* <p className="mt-2 text-gray-600">
                    Manage your development projects.
                </p>

                <div className="mt-8 rounded-xl bg-white p-8 shadow">
                    <p className="text-gray-500">
                        No projects yet.
                    </p>
                </div> */}

                <section>
                    {
                        projects.map((project) => (

                            <ProjectCard
                                key={project._id}
                                project={project}
                            />
                        ))
                    }
                </section>
            </div>
        </main>
    )
}

export default ProjectsPage;