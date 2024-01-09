import logo from "../assets/Images/logo.png"
import hamb from "../assets/Images/hamb.svg"
import arrow_down from "../assets/Images/arrow-down.svg"

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className="navBar bg-[#AE303410] flex w-full justify-between items-center py-3 shadow-lg shadow-[#99999910] p-5 md:px-10 lg:px-20">
                <img src={logo} alt="" className="logo w-[135px]" />
                <img src={hamb} alt="" className="hamb md:hidden w-10 p-1 rounded-full duration-200 hover:bg-[#AE303410] cursor-pointer" />

                <div className="end items-center md:flex hidden text-xs whitespace-nowrap gap-8">
                    <div className="links items-end h-5 flex gap-8 font-black">
                        
                        <Link className="link" to="/">Home</Link>
                        
                        <div className="link relative cursor-pointer  flex items-center gap-3" to="/products">Products & pricing
                            <img src={arrow_down} alt="" className="w-3" />


                            <div className="dropdown max-h-0 opacity-0 duration-300 ease-out absolute bg-[#cccccc25] border border-[#99999930] shadow-xl shadow-[#99999920] flex flex-col overflow-hidden z-[24] top-8 rounded-lg backdrop-blur-md left-0">
                                <Link className=" w-full " to="/contact">
                                    <p className="w-full p-5 hover:bg-[#f3f3f358] pr-20">Products</p>
                                </Link>
                                <Link className=" w-full " to="/blog">
                                    <p className="w-full p-5 hover:bg-[#f3f3f358] pr-20">Services</p>
                                </Link>
                                <Link className=" w-full " to="/contact">
                                    <p className="w-full p-5 hover:bg-[#f3f3f358] pr-20">Hucksters vendors</p>
                                </Link>
                            </div>
                        </div>

                        <div className="relative cursor-pointer link flex items-center gap-3" to="/about">
                            <span className=" ">Company</span>

                            <img src={arrow_down} alt="" className="w-3" />
                            

                            <div className="dropdown max-h-0 opacity-0 duration-300 ease-out absolute bg-[#cccccc25] border border-[#99999930] shadow-xl shadow-[#99999920] flex flex-col overflow-hidden z-[24] top-8 rounded-lg backdrop-blur-md left-0">
                                <Link className=" w-full " to="/contact">
                                    <p className="w-full p-5 hover:bg-[#f3f3f358] pr-20">About us</p>
                                </Link>
                                <Link className=" w-full " to="/blog">
                                    <p className="w-full p-5 hover:bg-[#f3f3f358] pr-20">Blog</p>
                                </Link>
                                <Link className=" w-full " to="/contact">
                                    <p className="w-full p-5 hover:bg-[#f3f3f358] pr-20">Contact us</p>
                                </Link>
                                <Link className=" w-full " to="/contact">
                                    <p className="w-full p-5 hover:bg-[#f3f3f358] pr-20">Careers</p>
                                </Link>
                            </div>
                        </div>

                    </div>

                    <div className="btns flex font-bold items-center gap-3">
                        {/* <button className="p-3 px-6  bg-[#99999915] hover:bg-[#99999930] duration-200 rounded-lg">Log in</button> */}
                        <button className="p-3 px-6  border border-redd text-redd hover:bg-[#cc3f4310] duration-200 rounded-lg">Log in</button>
                        <button className="p-3 duration-200 px-6 hover:bg-[#cc3f43] bg-redd text-white rounded-lg">Sign up</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header;