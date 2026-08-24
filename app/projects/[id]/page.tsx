
import ProjectActions from "@/components/projects/ProjectActions";
import type { Project } from "@/types";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProjectPageProps = {
    params: Promise<{ id: string }>
};


const getProject = async (id: string): Promise<Project | null> => {

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${id}`,
        {
            cache: "no-store"
        }
    );

    if (response.status === 404) {
        return null;
    }

    if (!response.ok) {
        throw new Error("Failed to fetch projects");
    }

    const result = await response.json();

    return result.data;
}


const ProjectPage = async ({ params }: ProjectPageProps) => {

    const { id } = await params;

    // pass the id to the getProject
    const project = await getProject(id);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gray-50 px-6 py-10 sm:px-8">

            <div className="mx-auto max-w-4xl">

                {/* redirect to projects */}
                <Link
                    href="/projects"
                    className="text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                    ← Back to Projects
                </Link>

                {/* Project Header */}
                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                            {project.name}
                        </h1>

                        <p className="mt-2 text-gray-600">
                            {project.description}
                        </p>
                    </div>

                    <span className="w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                        {project.status}
                    </span>

                </div>

                {/* Project Details */}
                <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

                    <h2 className="text-lg font-semibold text-gray-900">
                        Project Details
                    </h2>

                    <dl className="mt-5 space-y-4">

                        <div>
                            <dt className="text-sm font-medium text-gray-500">
                                Project ID
                            </dt>

                            <dd className="mt-1 break-all text-sm text-gray-900">
                                {project._id}
                            </dd>
                        </div>

                        <div>
                            <dt className="text-sm font-medium text-gray-500">
                                Status
                            </dt>

                            <dd className="mt-1 text-sm text-gray-900">
                                {project.status}
                            </dd>
                        </div>

                        <div>
                            <dt className="text-sm font-medium text-gray-500">
                                Created
                            </dt>

                            <dd className="mt-1 text-sm text-gray-900">
                                {new Date(project.createdAt).toLocaleDateString()}
                            </dd>
                        </div>

                    </dl>

                </div>

                {/* Actions */}
                <ProjectActions project={project}/>
            </div>
        </main>
    )
}

export default ProjectPage;