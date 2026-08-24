"use client";

import type { Project } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

type ProjectActionsProps = {
    project: Project
};


const ProjectActions = ({ project }: ProjectActionsProps) => {

    const router = useRouter();

    const [isDeleting, setIsDeleting] = useState(false);

    const [error, setError] = useState("");

    const handleDelete = async () => {

        const confirmed = window.confirm(
            `Are you sure you want to delete ${project.name}`
        );

        if (!confirmed) {
            return;
        }

        setIsDeleting(true);
        setError("");

        try {

            const response = await fetch(
                `/api/projects/${project._id}`,
                {
                    method: "DELETE"
                }
            );

            const result = await response.json();

            if (!response.ok) {
                setError(
                    result.message || "Failed to delete project"
                );

                return;
            }

            router.push("/projects");

            router.refresh();

        } catch (error) {

            console.error(error);

            setError("Something went wrong. Please try again");

        } finally {
            setIsDeleting(false);
        }
    }

    return (
        <div className="mt-6">
            {
                error && (
                    <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {error}
                    </div>
                )
            }

            <div className="flex gap-3">

                <button
                    type="button"
                    onClick={() =>
                        router.push(
                            `/projects/${project._id}/edit`
                        )
                    }
                    className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
                >
                    Edit Project
                </button>

                <button
                    type="button"
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className="rounded-lg border border-red-300 px-5 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {
                        isDeleting
                            ? "Deleting.."
                            : "Delete Project"
                    }
                </button>
            </div>
        </div>
    )
}

export default ProjectActions;

