import Link from "next/link"

const Navbar = () => {

    return (
        <nav className="border-b bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-4">
                <Link
                    href="/"
                    className="text-xl font-bold text-gray-900"
                >
                    DevTrack
                </Link>

                <div className="flex gap-6">
                    <Link
                        href="/"
                        className="text-gray-600 hover:text-gray-900"
                    >
                        Dashboard
                    </Link>

                    <Link
                        href="/projects"
                        className="text-gray-600 hover:text-gray-900"
                    >
                        Projects
                    </Link>
                </div>
                
            </div>
        </nav>
    )
}

export default Navbar;