"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { updateProjectSchema } from "@/lib/validations/project";


import type { Project } from "@/types";

type EditProjectFormData = z.infer<
    typeof updateProjectSchema
>;

type EditProjectFormProps = {
    project: Project;
};

const EditProjectForm = ({
    project,
}: EditProjectFormProps) => {

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm<EditProjectFormData>({
        resolver: zodResolver(updateProjectSchema),

        defaultValues: {
            name: project.name,
            description: project.description,
            status: project.status,
        },
    });

    const onSubmit = async (
        data: EditProjectFormData
    ) => {

        const response = await fetch(
            `/api/projects/${project._id}`,
            {
                method: "PATCH",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(data),
            }
        );

        const result = await response.json();

        if (!response.ok) {
            console.error(result);
            return;
        }

        router.push(`/projects/${project._id}`);
        router.refresh();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
        >

            {/* Name */}
            <div>

                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900"
                >
                    Project Name
                </label>

                <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className={`mt-2 block w-full rounded-lg border px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:ring-2 ${errors.name
                        ? "border-red-400 focus:ring-red-100"
                        : "border-gray-300 focus:border-gray-900 focus:ring-gray-100"
                        }`}
                />

                {errors.name && (
                    <p className="mt-1.5 text-sm text-red-600">
                        {errors.name.message}
                    </p>
                )}

            </div>

            {/* Description */}
            <div>

                <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-900"
                >
                    Description
                </label>

                <textarea
                    id="description"
                    rows={5}
                    {...register("description")}
                    className={`mt-2 block w-full resize-none rounded-lg border px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:ring-2 ${errors.description
                        ? "border-red-400 focus:ring-red-100"
                        : "border-gray-300 focus:border-gray-900 focus:ring-gray-100"
                        }`}
                />

                {errors.description && (
                    <p className="mt-1.5 text-sm text-red-600">
                        {errors.description.message}
                    </p>
                )}

            </div>

            {/* Status */}
            <div>

                <label
                    htmlFor="status"
                    className="block text-sm font-medium text-gray-900"
                >
                    Status
                </label>

                <select
                    id="status"
                    {...register("status")}
                    className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-100"
                >
                    <option value="ACTIVE">
                        Active
                    </option>

                    <option value="COMPLETED">
                        Completed
                    </option>

                    <option value="ARCHIVED">
                        Archived
                    </option>
                </select>

                {errors.status && (
                    <p className="mt-1.5 text-sm text-red-600">
                        {errors.status.message}
                    </p>
                )}

            </div>

            {/* Submit */}
            <div className="flex justify-end border-t border-gray-100 pt-6">

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-lg bg-black px-6 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {isSubmitting
                        ? "Saving..."
                        : "Save Changes"
                    }
                </button>

            </div>

        </form>
    );
};

export default EditProjectForm;