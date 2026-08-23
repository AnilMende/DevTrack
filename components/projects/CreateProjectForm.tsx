"use client";

import { createProjectSchema } from "@/lib/validations/project";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


type CreateProjectFormData = {
    name: string;
    description: string;
    status: "ACTIVE" | "COMPLETED" | "ARCHIVED";
}


const CreateProjectForm = () => {

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },

    } = useForm<CreateProjectFormData>({
        resolver: zodResolver(createProjectSchema),
        defaultValues: {
            name: "",
            description: "",
            status: "ACTIVE"
        }
    });


    const onSubmit = async (data: CreateProjectFormData) => {

        const response = await fetch("/api/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (!response.ok) {
            console.error(result);
            return;
        }

        router.push("/projects");

        router.refresh();
    }



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">
                    Project Name
                </label>

                <input type="text" id="name" {...register("name")} />

                {
                    errors.name && (
                        <p>{errors.name.message}</p>
                    )
                }
            </div>

            <div>
                <label htmlFor="description">
                    Description
                </label>

                <textarea id="description" rows={5} {...register("description")} />

                {
                    errors.description && (
                        <p>{errors.description.message}</p>
                    )
                }

            </div>

            <div>
                <label htmlFor="status">
                    Status
                </label>

                <select id="status" {...register("status")}>
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="COMPLETED">Completed</option>
                    <option value="ARCHIVED">Archived</option>
                </select>

                {
                    errors.status && (
                        <p>{errors.status.message}</p>
                    )
                }
            </div>

            <button type="submit" disabled={isSubmitting}>
                {
                    isSubmitting
                        ? "Creating..."
                        : "Create Project"
                }
            </button>
        </form>
    )

}

export default CreateProjectForm;