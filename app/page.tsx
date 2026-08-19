import { connectToDatabase } from "@/lib/mongodb";

const Home = async () => {

  await connectToDatabase();

  
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
            <p className="text-sm text-gray-500">Projects</p>
            <p className="mt-2 text-3xl font-bold">0</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-sm text-gray-500">Tasks</p>
            <p className="mt-2 text-3xl font-bold">0</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-sm text-gray-500">Completed</p>
            <p className="mt-2 text-3xl font-bold">0</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-sm text-gray-500">Pending</p>
            <p className="mt-2 text-3xl font-bold">0</p>
          </div>
        </div>
      </div>
    </main>
  );

}

export default Home;
