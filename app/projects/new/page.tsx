import Link from "next/link"
import CreateProjectForm from "@/components/projects/CreateProjectForm";

const NewProjectPage = () => {

    return (
        <main>
            <Link href="/projects">
                ← Back to Projects
            </Link>

            <h1>Create Project</h1>

            <CreateProjectForm />
        </main>
    )
}

export default NewProjectPage;