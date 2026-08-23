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

    return (
        <article>

            <h2>{project.name}</h2>

            <p>{project.description}</p>

            <p>Status : {project.status}</p>

            <Link href={`/projects/${project._id}`}>
                View Project
            </Link>
        </article>
    )
}

export default ProjectCard;