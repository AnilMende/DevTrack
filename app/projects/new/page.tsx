import Link from "next/link"
import CreateProjectForm from "@/components/projects/CreateProjectForm";

const NewProjectPage = () => {

    return (
        <main className="min-h-screen bg-gray-50 px-6 py-10 sm:px-8">

            <div className="mx-auto max-w-2xl">

                {/* Back Link */}
                <Link
                    href="/projects"
                    className="text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                    ← Back to Projects
                </Link>

                {/* Header */}
                <div className="mt-6">

                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Create Project
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Add a new project to your DevTrack workspace.
                    </p>

                </div>

                {/* Form Card */}
                <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

                    <CreateProjectForm />

                </div>

            </div>

        </main>
    );
};

export default NewProjectPage;