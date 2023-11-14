import { Link } from "react-router-dom"
import Cright from "./Cright"

const Footer = () => {
    return (
        <div className=" bg-[#2c2c2c] text-slate-200 ">
            <div className="mx-12 py-16 text-center">
                <div className="flex flex-row">
                    <div className="basis-1/4">
                        <div className="flex flex-col gap-2">
                            <div>
                                <h1 className="font-bold text-lg">NAVIGATE</h1>
                            </div>
                            <div>
                                <Link to="/" className="hover:text-white text-base font-normal">Home</Link>
                            </div>
                            <div>
                                <Link to="/whoami" className="hover:text-white text-base font-normal">Whoami</Link>
                            </div>
                            <div>
                                <Link to="/drawing-game" className="hover:text-white text-base font-normal">Project</Link>
                            </div>
                            <div>
                                <Link to="/" className="hover:text-white text-base font-normal">Contact Me</Link>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/4">
                        <div className="flex flex-col gap-2">
                            <div>
                                <h1 className="font-bold text-lg">LATEST NEWS</h1>
                            </div>
                            <div>
                                Masih proses maintenance sabar
                            </div>
                            <div>
                                Masih proses maintenance sabar
                            </div>
                            <div>
                                Masih proses maintenance sabar
                            </div>
                            <div>
                                Masih proses maintenance sabar
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/2">
                        <div className="flex flex-col">
                            <div>
                                <h1 className="font-poppins font-normal text-xl tracking-[8px]">LATIF.</h1>
                            </div>
                            <div className="mx-28 pt-4 text-sm ">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio eaque doloribus, vitae ipsa molestiae voluptatibus esse error expedita deleniti! Pariatur assumenda iure, voluptatum nobis excepturi sit doloribus! Ipsa, qui cupiditate!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Cright />
        </div>
    )
}

export default Footer