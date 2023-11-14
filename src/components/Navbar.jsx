import { Link } from "react-router-dom"

const Navbar = () => {

    window.onload = function () {
        const btn = document.querySelector("button.mobile-menu-button");
        const menu = document.querySelector(".mobile-menu");
        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });
    };

    return (
        <div>
            <nav className="">
                <div className="max-w-6xl mx-auto px-6 py-8">
                    <div className="flex justify-between md:block md:justify-start">
                        <div className="flex justify-between">
                            <Link to="/" className="flex items-center px-2">
                                <h1 className="font-poppins font-semibold text-xl tracking-[8px]">LATIF.</h1>
                            </Link>
                            <div className="hidden md:flex items-center space-x-6">
                                <Link to="/" className="px-2 text-gray-500 font-semibold hover:text-gray-800 transition duration-300">Home</Link>
                                <Link to="/whoami" className="px-2 text-gray-500 font-semibold hover:text-gray-800 transition duration-300">Whoami</Link>
                                <Link to="/drawing-game" className="px-2 text-gray-500 font-semibold hover:text-gray-800 transition duration-300">Project</Link>
                                <Link to="/" className="px-2 text-gray-500 font-semibold hover:text-gray-800 transition duration-300">Contact Me</Link>
                            </div>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button className="outline-none mobile-menu-button">
                                <svg className=" w-6 h-6 text-gray-500 hover:text-gray-800 "
                                    x-show="!showMenu"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hidden mobile-menu">
                    <ul className="px-6 pb-4 border-b border-b-slate-600/[0.2]">
                        <li><Link to="/" className=" block text-sm px-2 py-3 font-semibold text-gray-500 hover:text-gray-800 transition duration-300 goto-page">Home</Link></li>
                        <li><Link to="/Whoami" className=" block text-sm px-2 py-3 font-semibold text-gray-500 hover:text-gray-800 transition duration-300 goto-page">Whoami</Link></li>
                        <li><Link to="/drawing-game" className=" block text-sm px-2 py-3 font-semibold text-gray-500 hover:text-gray-800 transition duration-300 goto-page">Project</Link></li>
                        <li><Link to="/" className=" block text-sm px-2 py-3 font-semibold text-gray-500 hover:text-gray-800 transition duration-300 goto-page">Contact Me</Link></li>
                    </ul>
                </div>

            </nav >
        </div >
    )
}

export default Navbar