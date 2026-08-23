import Link from "next/link";

type ProjectCardProps = {
    project: {
        _id: string;
        name: string;
        description: string;
        status: "ACTIVE" | "COMPLETED" | "ARCHIVED";
    }
}

const ProjectCard = ({ project }: ProjectCardProps) => {

    const statusStyles = {
        ACTIVE: "bg-green-100 text-green-700",
        COMPLETED: "bg-blue-100 text-blue-700",
        ARCHIVED: "bg-gray-100 text-gray-600",
    };

    return (
        <article className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            {/* Header */}
            <div className="flex items-start justify-between gap-4">

                <h2 className="text-lg font-semibold text-gray-900">
                    {project.name}
                </h2>

                <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[project.status]}`}
                >
                    {project.status}
                </span>

            </div>

            {/* Description */}
            <p className="mt-4 flex-1 text-sm leading-6 text-gray-600">
                {project.description}
            </p>

            {/* Footer */}
            <div className="mt-6 border-t border-gray-100 pt-4">

                <Link
                    href={`/projects/${project._id}`}
                    className="text-sm font-medium text-gray-900 hover:underline"
                >
                    View Project →
                </Link>

            </div>

        </article>
    );
};

export default ProjectCard;
