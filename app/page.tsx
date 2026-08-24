import { connectToDatabase } from "@/lib/mongodb";

type Project = {
    _id: string;
    name: string;
    description: string;
    status: "ACTIVE" | "COMPLETED" | "ARCHIVED";
    createdAt: string
};

const getProjects = async (): Promise<Project[]> => {

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/projects`,
        {
            cache: "no-store",
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch projects");
    }

    const result = await response.json();

    return result.data;
}

const Home = async () => {

  await connectToDatabase();

  const projects = await getProjects();

  
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-gray-900">
          DevTrack
        </h1>

        <p className="mt-2 text-gray-600">
          Manage your development projects and tasks.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-sm text-gray-700">Projects</p>
            <p className="mt-2 text-3xl font-bold text-gray-800">0</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-sm text-gray-700">Tasks</p>
            <p className="mt-2 text-3xl font-bold text-gray-800">0</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-sm text-gray-700">Completed</p>
            <p className="mt-2 text-3xl font-bold text-gray-800">0</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-sm text-gray-700">Pending</p>
            <p className="mt-2 text-3xl font-bold text-gray-800">0</p>
          </div>
        </div>
      </div>
    </main>
  );

}

export default Home;
