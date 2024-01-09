import {Link} from "react-router-dom"

import logo from "../assets/Images/logo.png"

import fb from "../assets/Images/fb.png"
import tw from "../assets/Images/tw.png"
import ig from "../assets/Images/ig.png"
import li from "../assets/Images/li.png"
import em from "../assets/Images/em.png"



const Footer = () => {
    return (
        <>
            <footer className="w-full flex text-center md:text-left flex-col md:flex-row justify-between px-5 md:px-10 lg:px-20 py-20">

            <div className="row1 flex flex-col mb-10 md:mb-0 items-center md:items-start w-full md:w-[40%]">
            <img src={logo} alt="" className="w-[150px] shrink-0" />
                    <p className="text-[#999] my-5 text-xs font-medium">Where vendors achieve success, and shoppers uncover the extraordinary.</p>
                    
                    <div className="socials flex gap-4 items-center ">
                        <a href="">
                            <img src={fb} className="w-4 h-4 object-contain rounded-full overflow-visible " />
                        </a>
                        <a href="">
                            <img src={tw} className="w-4 h-4 object-contain rounded-full overflow-visible " />
                        </a>
                        <a href="">
                            <img src={ig} className="w-4 h-4 object-contain rounded-full overflow-visible " />
                        </a>
                        <a href="">
                            <img src={li} className="w-4 h-4 object-contain rounded-full overflow-visible " />
                        </a>
                        <a href="">
                            <img src={em} className="w-4 h-4 object-contain rounded-full overflow-visible " />
                        </a>
                    </div>
                </div>
                
                <div className="footerLinks w-full grid grid-cols-2 md:grid-cols-3 md:w-[60%] gap-4 gap-y-8 ">
                <div className="row2 text-sm md:items-end w-full px-5 flex flex-col gap-2">
                    <div className="flex flex-col gap-2">
                        
                    <p className="font-bold w-max">Product</p>
                    <div className="w-8 h-[3px] bg-redd"></div>
                    <Link to="path" className="text-[#999] text-xs font-medium hover:text-redd w-max">Huckster</Link>
                    <Link to="path" className="text-[#999] text-xs font-medium hover:text-redd w-max">Features</Link>
                    <Link to="path" className="text-[#999] text-xs font-medium hover:text-redd w-max">Pricing</Link>
                    </div>
                </div>
                
                <div className="row3 text-sm md:items-end w-full px-5 flex flex-col gap-2">
                    <div className="flex flex-col gap-2">
                        
                    <p className="font-bold w-max">Company</p>
                    <div className="w-8 h-[3px] bg-redd"></div>
                    <Link to="path" className="text-[#999] text-xs font-medium hover:text-redd w-max">About us</Link>
                    <Link to="path" className="text-[#999] text-xs font-medium hover:text-redd w-max">Team</Link>
                    <Link to="path" className="text-[#999] text-xs font-medium hover:text-redd w-max">News</Link>
                    <Link to="path" className="text-[#999] text-xs font-medium hover:text-redd w-max">Contact Us</Link>
                    </div>
                </div>
                
                <div className="row4 text-sm md:items-end w-full px-5 flex flex-col gap-2">
                    <div className="flex flex-col gap-2">
                        
                    <p className="font-bold w-max">Resources</p>
                    <div className="w-8 h-[3px] bg-redd"></div>
                    <Link to="path" className="text-[#999] text-xs font-medium hover:text-redd w-max">Blog</Link>
                    <Link to="path" className="text-[#999] text-xs font-medium hover:text-redd w-max">Events</Link>
                    <Link to="path" className="text-[#999] text-xs font-medium hover:text-redd w-max">Tutorials</Link>
                    <Link to="path" className="text-[#999] text-xs font-medium hover:text-redd w-max">FAQs</Link>
                    <Link to="path" className="text-[#999] text-xs font-medium hover:text-redd w-max">Support</Link>
                    </div>
                </div>
                </div>
                
        </footer>
            <div className="text-center w-full text-xs text-[#999] font-medium mb-2 border-t pt-3 -mt-10">
                &copy; 2023 Hucksters, All Right Reserved.
                Powered By <span onClick={()=> {window.open("https://codeville.onrender.com")}}  className="text-redd cursor-pointer underline underline-offset-4">Codeville</span> .
                </div>
        </>
    )
}

export default Footer;