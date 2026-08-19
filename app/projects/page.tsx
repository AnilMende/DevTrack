
const ProjectsPage = () => {

    return(
        <main className="min-h-screen bg-gray-100 p-8">
            <div className="mx-auto max-w-6xl">
                <h1 className="text-3xl font-bold text-gray-900">
                    Projects
                </h1>

                <p className="mt-2 text-gray-600">
                    Manage your development projects.
                </p>

                <div className="mt-8 rounded-xl bg-white p-8 shadow">
                    <p className="text-gray-500">
                        No projects yet.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default ProjectsPage;