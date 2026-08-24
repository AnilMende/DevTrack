import Link from "next/link";
import { notFound } from "next/navigation";

import type { Project } from "@/types";
import EditProjectForm from "@/components/projects/EditProjectForm";

type EditProjectPageProps = {
    params: Promise<{
        id: string;
    }>;
};

const getProject = async (
    id: string
): Promise<Project | null> => {

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${id}`,
        {
            cache: "no-store",
        }
    );

    if (response.status === 404) {
        return null;
    }

    if (!response.ok) {
        throw new Error("Failed to fetch project");
    }

    const result = await response.json();

    return result.data;
};

const EditProjectPage = async ({
    params,
}: EditProjectPageProps) => {

    const { id } = await params;

    const project = await getProject(id);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gray-50 px-6 py-10 sm:px-8">

            <div className="mx-auto max-w-2xl">

                <Link
                    href={`/projects/${project._id}`}
                    className="text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                    ← Back to Project
                </Link>

                <div className="mt-6">

                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Edit Project
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Update your project information.
                    </p>

                </div>

                <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

                    <EditProjectForm
                        project={project}
                    />

                </div>

            </div>

        </main>
    );
};

export default EditProjectPage;