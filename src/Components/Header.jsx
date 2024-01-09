import React from "react"
import logo from "../assets/Images/logo.png"
import hamb from "../assets/Images/hamb.svg"
import x from "../assets/Images/x.svg"
import arrow_down from "../assets/Images/arrow-down.svg"

import { Link } from 'react-router-dom'

const Header = () => {

    const [drop1, setD1] = React.useState(false)
    const [sideBar, setSideBar] = React.useState(0)
    const [drop2, setD2] = React.useState(false)
    return (
        <>
            <div className="navBar bg-[#AE303410] flex w-full justify-between items-center py-3 shadow-lg shadow-[#99999910] p-5 md:px-10 lg:px-20">
                <img src={logo} alt="" className="logo w-[135px]" />
                <img onClick={()=> {setSideBar(1)}}  src={hamb} alt="" className="hamb md:hidden w-10 p-1 rounded-full duration-200 hover:bg-[#AE303410] cursor-pointer" />

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

                    <div className="btns flex font-bold items-center gap-3 mt-5"> 
                        {/* <button className="p-3 px-6  bg-[#99999915] hover:bg-[#99999930] duration-200 rounded-lg">Log in</button> */}
                        <button className="py-4 px-6  border border-redd text-redd hover:bg-[#cc3f4310] duration-200 rounded-lg">Log in</button>
                        <button className="py-4 duration-200 px-6 hover:bg-[#cc3f43] bg-redd text-white rounded-lg">Sign up</button>
                    </div>
                </div>

            </div>

            <div style={sideBar ? {left: "0"}: {left: "-110vw"} } className="sideBar font-medium whitespace-nowrap ease-out duration-500 overflow-y-scroll p-5 py-8 w-[100vw] h-[100vh] bg-[#f5f5f5] md:hidden fixed top-0 left-0 z-[50] ">
                <div className="w-full items-center justify-between flex ">
                <img src={logo} alt="" className="h-16" />
                <img onClick={()=> {setSideBar(0)}} src={x} alt="" className="h-5" />
              </div>

                <div className="sideLinks font-medium">
                    <Link to="/">
                        <div className="text-[#0e0e0e] py-8 w-full font-bold">Home</div>
                    </Link>


                    <div onClick={() => {setD1(prev => !prev)}} className="linkPad cursor-pointer w-full flex flex-col text-[#0e0e0e] py-8 border-[#99999930] border-y">
                        <div className="flex font-bold w-full justify-between items-center">
                            <div className="flex">Product & Pricing</div>
                            <img src={arrow_down} alt="" className="w-3 mr-4" />
                        </div>

                        <div className={`
                        drop overflow-hidden  px-5 ${drop1 ? "pt-3 max-h-[300px] my-3" : "py-0 max-h-0 my-0 "} duration-300 ease-out border-l border-[#99999930]
                        `}>
                            <Link to="" className=""><div className="py-3">Products</div></Link>
                            <Link to="" className=""><div className="py-3">Pricing</div></Link>
                            <Link to="" className=""><div className="py-3">Hucksters vendors</div></Link>
                        </div>
                    </div>

                    <div onClick={() => {setD2(prev => !prev)}} className="linkPad cursor-pointer w-full flex-col flex text-[#0e0e0e] py-8">
                        <div className="flex font-bold w-full justify-between items-center">
                            <div className="flex">Company</div>
                            <img src={arrow_down} alt="" className="w-3 mr-4" />
                        </div>

                        <div className={`
                        drop overflow-hidden  px-5 ${drop2 ? "pt-3 max-h-[300px] my-3" : "py-0 max-h-0 my-0 "} duration-300 ease-out border-l border-[#99999930]
                        `}>
                            <Link to="/po" className=""><div className="py-3">About Us</div></Link>
                            <Link to="" className=""><div className="py-3">Blog</div></Link>
                            <Link to="" className=""><div className="py-3">Contact us</div></Link>
                            <Link to="" className=""><div className="py-3">Careers</div></Link>
                        </div>
                    </div>
                </div>

                
                <div className="btns flex font-bold items-center gap-3">
                        <button className="p-3 px-6  border border-redd text-redd hover:bg-[#cc3f4310] duration-200 w-full rounded-lg">Log in</button>
                        <button className="p-3 duration-200 w-full px-6 hover:bg-[#cc3f43] bg-redd text-white rounded-lg">Sign up</button>
                    </div>
            </div>
        </>
    )
}

export default Header;