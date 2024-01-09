import { Link } from 'react-router-dom'
import { useState } from 'react'
import girl from "../assets/Images/girl.png"
import app from "../assets/Images/appstore.png"
import play from "../assets/Images/playstore.png"
import mockup from "../assets/Images/phonemock.png"
import arr_diag from "../assets/Images/diag-arr.svg"
import tick from "../assets/Images/tick-01.svg"
import ProductCard from '../Components/ProductCard.jsx'
import pic1 from "../assets/Images/ellipse1.png"
import pic2 from "../assets/Images/ellipse2.png"
import pic3 from "../assets/Images/ellipse3.png"
import search from "../assets/Images/search.png"
import gridfade from "../assets/Images/gridfade.png"
import map from "../assets/Images/mapdots.png"
import Footer from '../Components/Footer.jsx'


import shoe from "../assets/Images/shoe.png"
import tv from "../assets/Images/tv.png"
import power from "../assets/Images/power.png"
import vocal from "../assets/Images/vocal.png"
import watch from "../assets/Images/watch.png"
import iron from "../assets/Images/iron.png"
import laptop from "../assets/Images/laptop.png"
import phone from "../assets/Images/phone.png"
import MeritCard from '../Components/MeritCard.jsx'
import StatCard from '../Components/StatCard.jsx'
import real from "../assets/Images/real.svg"
import metric from "../assets/Images/metric.svg"
import efficiency from "../assets/Images/efficiency.svg"
import customize from "../assets/Images/customize.svg"
import sales from "../assets/Images/sales.svg"
import receipt from "../assets/Images/receipt.svg"

import like from "../assets/Images/like.svg"
import speaker from "../assets/Images/speaker.svg"
import star from "../assets/Images/star.svg"
import redtick from "../assets/Images/redtick.svg"

import img2 from "../assets/Images/img2.png"
import exp1 from "../assets/Images/exp1.png"
import exp2 from "../assets/Images/exp2.png"
import exp3 from "../assets/Images/exp3.png"



const Home = () => {

    // Dear sir or ma, the variable below helps the "How we operate" section slider

    // Basically means current section, set section
    //in this case, the 3 sections are:
    // 1 - vendors, 2-  customers, 3 -logistics

    const [curSec, setSec] = useState(1)


    function scrollSection(num) {
        setSec(num)
        // document.querySelector(".sc" + num).scrollIntoView({
        //     behavior: "smooth", block: "start"
        // })
    }


    let [allProducts, setProd] = useState(
        [
            {
                name: "Nike air kicks",
                prices: ["54,600", "91,550"],// new , old price
                stars: 4.5,
                img: shoe
            },
            {
                name: "LG thinQ smart TV",
                prices: ["778,450", "1,452,000"],// new , old price
                stars: 4.5,
                img: tv
            },
            {
                name: "Oraimo Power Bank",
                prices: ["45,000", "70,000"],// new , old price
                stars: 4.5,
                img: power
            },
            {
                name: "Presonus M7 Vocal Booth",
                prices: ["99,210", "185,350"],// new , old price
                stars: 4.5,
                img: vocal
            },
            {
                name: "Apple smart watch",
                prices: ["38,890", "64,700"],// new , old price
                stars: 4.5,
                img: watch
            },
            {
                name: "Elgento pressing iron",
                prices: ["62,000", "85,000"],// new , old price
                stars: 3,
                img: iron
            },
            {
                name: "HP EliteBook | 16GB RAM, 256GB Storage",
                prices: ["345,500", "514,600"],// new , old price
                stars: 4.5,
                img: laptop
            },
            {
                name: "Tecno Spark 7",
                prices: ["71,100", "92,310"],// new , old price
                stars: 4.5,
                img: phone
            },
        ]
    )

    let [allMerits, setMerits] = useState(
        [
            {
                img: real,
                title: "Real time Sales Tracking",
                info: "Monitor your sales in real-time with our intuitive dashboard. Gain instant visibility into your revenue, view sales trend as they happen"
            },
            {
                img: metric,
                title: "Metrics and Insights",
                info: "Monitor your sales in real-time with our intuitive dashboard. Gain instant visibility into your revenue, view sales trend as they happen"
            },
            {
                img: efficiency,
                title: "Efficiency and Ease of use",
                info: "Embark on a transformative journey as a vendor with Huckster and unlock unparalleled sales potential for your "
            },
            {
                img: customize,
                title: "Customizable Reporting",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dolorem incidunt explicabo eos aspernatur, praesentium accusantium eum ad officiis"
            },
            {
                img: sales,
                title: "Sales Analytics and Forecasting",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dolorem incidunt explicabo eos aspernatur, praesentium accusantium eum ad officiis"
            },
            {
                img: receipt,
                title: "Receipt Management",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dolorem incidunt explicabo eos aspernatur, praesentium accusantium eum ad officiis"
            },
        ]
    )


    const allStats = [
        {
            img: like,
            rate: "1,024",
            info: "Awesome reviews for our Company"
        },
        {
            img: speaker,
            rate: "94%",
            info: "Great Customers recommend us"
        },
        {
            img: star,
            rate: "4.5",
            info: "Rating from our esteemed customer"
        },
        {
            img: redtick,
            rate: "1,000",
            info: "Customers trust our services"
        },
    ]


    return (
        <>


            <div className="hero overflow-hidden flex-col md:flex-row pt-10 md:pt-20 z-0 flex bg-[#AE303410]">


                <div className="p-5 flex flex-col md:w-1/2 w-full items-center md:items-start md:pl-20">

                    <p className="text-center md:text-left text-3xl md:text-4xl md:min-w-[500px] lg:min-w-[600px] px-2 md:px-0 lg:text-[40px] md:leading-snug leading-snug lg:leading-snug font-black">The Ground Where <span className="relative keyword">Customers</span> and <span className="relative keyword">Vendors</span> Meet</p>

                    <p className="text-center md:text-left text-sm mt-3 leading-relaxed text-[#999] font-medium ">
                        Empower your selling journey at Huckster, where vendors achieve success, and shoppers uncover the extraordinary.
                    </p>

                    <div className="storebtns w-full mt-12 flex gap-3 md:w-max  md:justify-start justify-center">
                        <Link to="path">
                            <div className="btnPad h-12">
                                <img src={app} alt="" className="h-12 border-2 border-[#99999920] rounded-lg cursor-pointer  hover:shadow-lg duration-300 ease-out" />
                            </div>
                        </Link>

                        <Link to="path">
                            <div className="btnPad h-12">
                                <img src={play} alt="" className="h-12 border-2 border-[#99999920] rounded-lg cursor-pointer  hover:shadow-lg duration-300 ease-out" />
                            </div>
                        </Link>
                    </div>

                </div>

                <div className="md:w-1/2 w-full flex items-end justify-center relative">

                    <div className="comment duration-300 hover:scale-100 font-bold text-[#111] backdrop-blur-sm p-2  bg-[#cccccc79] rounded-lg border border-[#cccccc50] absolute grow-0 shrink-0 items-center top-5 scale-75 md:scale-90 md:top-20 left-10 md:left-20 flex gap-3">
                        <img src={pic1} alt="" className="w-7" />

                        <div className="text-[.6rem]">
                            <p className="">Customers </p>
                            <p className="">Success Stories</p>
                        </div>
                        <img src={search} alt="" className="w-7 bg-redd p-2 rounded-full" />
                    </div>

                    <div className="comment duration-300 hover:scale-100 font-bold text-[#111] backdrop-blur-sm p-2  bg-[#cccccc79] rounded-lg border border-[#cccccc50] absolute grow-0 shrink-0 items-center top-1/2 md:-mt-16 right-14 scale-75 md:scale-90 -translate-y-1/2 flex gap-3">
                        <img src={pic2} alt="" className="w-7" />

                        <div className="text-[.6rem]">
                            <p className="">Secured  </p>
                            <p className="">Transactions</p>
                        </div>
                        <img src={search} alt="" className="w-7 bg-redd p-2 rounded-full" />
                    </div>

                    <div className="comment duration-300 hover:scale-100 font-bold text-[#111] backdrop-blur-sm p-2  bg-[#cccccc79] rounded-lg border border-[#cccccc50] absolute grow-0 shrink-0 items-center md:bottom-[7rem] left-3 bottom-3 scale-75 md:scale-90 flex gap-3">
                        <img src={pic3} alt="" className="w-7" />

                        <div className="text-[.6rem]">
                            <p className="">Diverse </p>
                            <p className="">Market Place</p>
                        </div>
                        <img src={search} alt="" className="w-7 bg-redd p-2 rounded-full" />
                    </div>

                    <img src={girl} alt="" className="girl-mockup w-1/2 md:w-[400px]" />

                </div>

            </div >

            <div className="w-full grid grid-cols-2  md:grid-cols-4  border-b px-4 gap-1 md:p-8 py-5 lg:px-[7rem]">

                <div className="flex border border-[#00000030] rounded-full px-3 py-3 items-center gap-4">
                    <img src={tick} alt="" className="w-7 h-7 rounded-full shrink-0 bg-redd p-1.5" />
                    <div className="">
                        <p className="text-md md:txt-lg md:text-xl font-bold">5M+ </p>
                        <p className="text-sm font-medium ">Products</p>
                    </div>
                </div>

                <div className="flex border border-[#00000030] rounded-full px-3 py-3 items-center gap-4">
                    <img src={tick} alt="" className="w-7 h-7 rounded-full shrink-0 bg-redd p-1.5" />
                    <div className="">
                        <p className="text-md md:txt-lg md:text-xl font-bold">100K+ </p>
                        <p className="text-sm font-medium ">Vendors</p>
                    </div>
                </div>

                <div className="flex border border-[#00000030] rounded-full px-3 py-3 items-center gap-4">
                    <img src={tick} alt="" className="w-7 h-7 rounded-full shrink-0 bg-redd p-1.5" />
                    <div className="">
                        <p className="text-md md:txt-lg md:text-xl font-bold">1M+ </p>
                        <p className="text-sm font-medium ">Customers</p>
                    </div>
                </div>

                <div className="flex border border-[#00000030] rounded-full px-3 py-3 items-center gap-4">
                    <img src={tick} alt="" className="w-7 h-7 rounded-full shrink-0 bg-redd p-1.5" />
                    <div className="">
                        <p className="text-md md:txt-lg md:text-xl font-bold">10K+ </p>
                        <p className="text-sm font-medium ">Logistics</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center">
            <div className="new max-w-[80%] pr-4 mt-20 flex whitespace-nowrap items-center gap-3 border border-[#AE30344e] p-1.5 mb-4 rounded-xl text-[.65rem]">
                        <div className="bg-redd  text-white py-1 p-2 rounded-lg font-semibold">NEW</div>
                        <div className="font-medium w-full text-ellipsis overflow-clip">Become a gold vendor and get recommended to customers</div>

                        <Link to="path" className="font-bold ml-2 duration-200">Learn more</Link>
                    </div>
                <p className="text-2xl md:text-[2.4rem] max-w-[750px] px-5 relative text-center leading-snug font-bold">How We <span className="text-redd ">Operate</span></p>
            </div>
            <div className="how z-[10] text-center md:text-left mb-14 w-full items-center flex flex-col md:flex-row ">


                <div className="md:w-1/2 w-full flex justify-center ">
                    <img src={mockup} alt="" className="phone-mockup -mt-20 w-[80%] max-w-[500px]" />

                </div>
                <div className="md:w-1/2 flex flex-col items-center md:items-start w-full px-10 lg:pr-16">
                    {/* was here */}

                    <div className="w-[60px] h-[px] bg-redd my-3.5"></div>

                    <div className="allSections py-5 text-2xl w-[98vw] md:w-[44vw] overflow-x-hidden flex bg-red-0">
                        <div className={`section sc1 shrink-0 w-full py-5 flex flex-col items-center duration-500 ${curSec == 1 ? "opacity-100" : "opacity-0"}  ${curSec == 1 ? "ml-0" : curSec == 2 ? "-ml-[98vw] md:-ml-[44vw]" : "-ml-[196vw] md:-ml-[88vw]"}`}>
                            <p className="font-bold w-full flex items-center justify-center gap-5">
                                <div className=" md:hidden bg-redd w-[20%] h-[2px]"></div>
                                Vendors
                                <div className="w-[20%] md:w-full bg-redd h-[2px]"></div>
                            </p>
                            <p className="text-sm mt-3 leading-relaxed text-[#999] font-medium p-3 md:px-0">Hucksters specializes in providing vendors with cost-effective websites, aiming to empower businesses in showcasing their products and maintaining a strong connection with their target audience. Our focus on affordability sets us apart, recognizing the financial constraints businesses may face, particularly in their early stages. </p>
                        </div>
                        <div className={`section sc2 shrink-0  w-full py-5 flex flex-col items-center  duration-500  ${curSec == 2 ? "opacity-100" : "opacity-0"}`}>
                            <p className="font-bold w-full flex items-center justify-center gap-5">
                                <div className=" md:hidden bg-redd w-[20%] h-[2px]"></div>
                                Customers
                                <div className="w-[20%] md:w-full bg-redd h-[2px]"></div>
                            </p>
                            <p className="text-sm mt-3 leading-relaxed text-[#999] font-medium p-3 md:px-0">Hucksters specializes in providing vendors with cost-effective websites, aiming to empower businesses in showcasing their products and maintaining a strong connection with their target audience. Our focus on affordability sets us apart, recognizing the financial constraints businesses may face, particularly in their early stages. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, mollitia sapiente atque eligendi dicta ullam enim. </p>
                        </div>
                        <div className={`section sc3 shrink-0  w-full py-5 flex flex-col items-center  duration-500  ${curSec == 3 ? "opacity-100" : "opacity-0"}`}>
                            <p className="font-bold w-full flex items-center justify-center gap-5">
                                <div className=" md:hidden bg-redd w-[20%] h-[2px]"></div>
                                Logistics
                                <div className="w-[20%] md:w-full bg-redd h-[2px]"></div>
                            </p>
                            <p className="text-sm mt-3 leading-relaxed text-[#999] font-medium p-3 md:px-0">Hucksters specializes in providing vendors with cost-effective websites, aiming to empower businesses in showcasing their products and maintaining a strong connection with their target audience. Our focus on affordability sets us apart, recognizing the financial constraints businesses may face, particularly in their early stages. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, soluta! </p>
                        </div>
                    </div>

                    <div className="labels flex gap-2 w-full justify-center md:justify-start">
                        <div title="Vendors" onClick={() => { scrollSection(1) }} className={`w-2.5 duration-300 shrink-0 h-2.5 rounded-xl ${curSec == 1 ? "bg-redd cursor-default" : "bg-gray-300 hover:bg-gray-400 cursor-pointer"}`}></div>
                        <div title="Customers" onClick={() => { scrollSection(2) }} className={`w-2.5 duration-300 shrink-0 h-2.5 rounded-xl ${curSec == 2 ? "bg-redd cursor-default" : "bg-gray-300 hover:bg-gray-400 cursor-pointer"}`}></div>
                        <div title="Logistics" onClick={() => { scrollSection(3) }} className={`w-2.5 duration-300 shrink-0 h-2.5 rounded-xl ${curSec == 3 ? "bg-redd cursor-default" : "bg-gray-300 hover:bg-gray-400 cursor-pointer"}`}></div>
                    </div>

                    <Link to="path" className="mt-8">
                        <button className="p-3 flex items-center gap-2 px-5 text-redd border-2 border-redd md: font-bold duration-300 rounded-g">Learn more


                            <div className="arrsPad h-3.5 w-3.5 overflow-hidden">

                                <div className="arrs flex flex-col  duration-300 shrink-0">
                                    <img src={arr_diag} alt="" className="upper p-0.5 shrink-0 w-3.5 min-h-3.5 min-w-3.5 h-3.5" />
                                    <img src={arr_diag} alt="" className="lower shrink-0 w-3.5 min-h-3.5 min-w-3.5 h-3.5 -ml-3.5 " />
                                </div>
                            </div>
                        </button>
                    </Link>

                </div>


            </div>

            <div className="products flex flex-col items-center">

                <p className="text-2xl md:text-[2.4rem] max-w-[750px] px-5 relative text-center pt-20 font-bold leading-snug">Explore Our <span className="text-redd ">Products</span> Spotlight</p>
                <p className="text-center max-w-[750px] mt-3 leading-relaxed w-full text-sm px-5 text-[#999] font-medium">
                    Empower your selling journey at Huckster, where vendors achieve success, and shoppers uncover the extraordinary.
                </p>


                <div className="allProducts w-full overflow-x-scroll md:grid grid-cols-4 pt-10 px-8 lg:px-[6rem] md:pt-20 md:px-8 pb-5 flex gap-4 gap-y-8">
                    {allProducts.map(product => (
                        <ProductCard name={product.name} prices={product.prices} stars={product.stars} img={product.img} />
                    ))}
                </div>

                <Link to="path" className="mb-8 mt-5">
                    <button className="p-3 flex items-center gap-2 px-5 text-redd border-2 border-redd md: font-bold duration-300 rounded-g">See more products


                        <div className="arrsPad h-3.5 w-3.5 overflow-hidden">

                            <div className="arrs flex flex-col  duration-300 shrink-0">
                                <img src={arr_diag} alt="" className="upper p-0.5 shrink-0 w-3.5 min-h-3.5 min-w-3.5 h-3.5" />
                                <img src={arr_diag} alt="" className="lower shrink-0 w-3.5 min-h-3.5 min-w-3.5 h-3.5 -ml-3.5 " />
                            </div>
                        </div>
                    </button>
                </Link>
            </div>

            <div className="w-full -mt-10 h-max py-20 overflow-x-hidden">
                <div className="potential relative my-20 bg-[#AE303410] pb-20 w-full flex flex-col items-center">

                    <div className="Circle absolute -top-[100px] -left-[100px] border-dotted w-[200px] rounded-full border-2 border-redd h-[200px] flex p-12">
                        <div className="Circle w-full h-full rounded-full bg-redd "></div></div>

                    <div className="Circle absolute -bottom-[125px] -right-[125px] w-[250px] rounded-full bg-[#AE30344e] h-[250px]"></div>

           
                    <p className=" mt-20 text-2xl md:text-[2.4rem] max-w-[750px] px-5 relative text-center font-bold leading-snug">Unlock Your Sales Potential With Hucksters <span className="text-redd ">Vendors</span> </p>
                    <p className="text-center max-w-[750px] mt-3 leading-relaxed w-full px-5 text-sm text-[#999] font-medium">
                    Embark on a transformative journey as a vendor with Huckster and unlock unparalleled sales potential for your business. Our platform offers a seamless onboarding experience, guiding you effortle
                    </p>

                    <div className="allMerits w-full px-5 md:px-10 lg:px-20 grid lg:grid-cols-3 gap-3 md:grid-cols-2 py-16">
                        {
                            allMerits.map(merit => (
                                <MeritCard img={merit.img} title={merit.title} info={merit.info} />
                            ))
                        }
                    </div>
                </div>
            </div>



            <div className="how z-[10] text-center md:text-left mb-14 w-full items-start flex flex-col md:flex-row-reverse ">


                <div className="md:w-1/2 w-full flex justify-center items-center ">
                    <img src={img2} alt="" className="phone-mockup md:mt-12 w-[80%] max-w-[500px]" />

                </div>

                <div className="products flex flex-col items-center md:items-start md:pl-10 lg:pl-20 md:w-1/2 w-full px-5">

                    <p className="text-2xl md:text-[2.4rem] max-w-[750px] relative pt-20 font-bold leading-snug">Start Selling on Huckster
as a <span className="text-redd ">Vendor</span> </p>
                    <p className=" max-w-[750px] mt-3 leading-relaxed w-full text-sm text-[#999] font-medium">
                    Embark on a transformative journey as a vendor with Huckster and unlock unparalleled sales potential for your business. Our platform offers a seamless onboarding experience, guiding you effortlessly through the process of becoming a Huckster vendor. In just a few simple steps, you can start showcasing your products to a vast and diverse customer base.
                    </p>
                    
                    <Link to="path" className="mt-8">
                        <button className="p-3 flex items-center gap-2 text-redd border-2 border-redd md: font-bold duration-300 rounded-g">Set up your store


                            <div className="arrsPad h-3.5 w-3.5 overflow-hidden">

                                <div className="arrs flex flex-col  duration-300 shrink-0">
                                    <img src={arr_diag} alt="" className="upper p-0.5 shrink-0 w-3.5 min-h-3.5 min-w-3.5 h-3.5" />
                                    <img src={arr_diag} alt="" className="lower shrink-0 w-3.5 min-h-3.5 min-w-3.5 h-3.5 -ml-3.5 " />
                                </div>
                            </div>
                        </button>
                    </Link>

                </div>
            </div>



            <div style={{backgroundImage: `url(${map})`}}  className="flex bg-cover px-5 bg-top pb-20 bg-repeat-x mt-20 w-full items-center flex-col mb-10">
            <p className="text-2xl mb-10 md:text-[2.4rem] max-w-[750px] text-center relative pt-20 font-bold leading-snug">Quotes of Wisdom From Our Sales
                    <span className="text-redd "> Expert</span> </p>
                

                <div className="allQuotes my-5 w-full  grid md:grid-cols-3 gap-2 md:gap-0 justify-center lg:px-10 ">
                    <div className="quoteCard rounded-xl flex items-center flex-col p-12 md:px-5 lg:px-12 bg-white py-[3rem] text-center shadow">
                        <div style={{backgroundImage: `url(${exp1})`}} className="w-12 h-12 bg-gray-300 bg-cover bg-center rounded-full"></div>
                        <div className="my-8 text-sm"> “Choosing Fortified Security for our home was the best decision we made. The level of expertise and attention to details is remarkable. We feel safer than ever”</div>

                        <p className="mb-2 font-bold">Esther Joseph</p>
                        <p className="text-xs text-[#999]">Cooperative staff</p>
                    </div>
                    
                    <div className="quoteCard rounded-xl md:scale-110 flex items-center flex-col p-12 md:px-5 lg:px-12 bg-white py-[3rem] text-center shadow">
                        <div style={{backgroundImage: `url(${exp2})`}} className="w-12 h-12 bg-gray-300 bg-cover bg-center rounded-full"></div>
                        <div className="my-8 text-sm"> “Choosing Fortified Security for our home was the best decision we made. The level of expertise and attention to details is remarkable. We feel safer than ever”</div>

                        <p className="mb-2 font-bold">Emeka Nwakwo</p>
                        <p className="text-xs text-[#999]">Cofounder of REALT</p>
                    </div>
                    <div className="quoteCard rounded-xl flex items-center flex-col px-10 md:px-5 lg:px-12 bg-white py-[3rem] text-center shadow">
                        <div style={{backgroundImage: `url(${exp3})`}} className="w-12 h-12 bg-gray-300 bg-cover bg-center rounded-full"></div>
                        <div className="my-8 text-sm"> “Choosing Fortified Security for our home was the best decision we made. The level of expertise and attention to details is remarkable. We feel safer than ever”</div>

                        <p className="mb-2 font-bold">Lizzy Thompson</p>
                        <p className="text-xs text-[#999]">Cooperative staff</p>
                    </div>

                </div>
            </div>


            
            <div className="px-5 md:px-10 lgpx-20">
            <p className="text-2xl md:text-[2.4rem] max-w-[750px] relative pt-20 font-bold leading-snug">Customer <span className="text-redd ">Satisfaction</span> </p>
                    <p className=" max-w-[450px] mt-3 leading-relaxed w-full text-sm text-[#999] font-medium mb-10">
                    Embark on a transformative journey as a vendor with Huckster and unlock unparalleled sales potential for your business. Our platform offers a seamless onboarding experience, guiding you effortlessly 
                    </p>
                    
            <div className="allStats grid lg:grid-cols-4 w-full gap-2 md:grid-cols-2">
                {
                    allStats.map(stat => (
                        <StatCard img={stat.img} rate={stat.rate} info={stat.info}/>
                    ))}
            </div>
  </div>

            <div className="News mt-[7rem] w-full bg-redd p-20 px-5 md:px-10 lg:px-20 text-white flex flex-col items-center relative ">

                <img src={gridfade} alt="" className="w-1/3 absolute top-0 min-w-[200px]  left-0 z-[0]" />
                <img src={gridfade} alt="" className="w-1/3 absolute bottom-0  min-w-[200px] rotate-180 right-0 z-[0]" />


                <p className="text-3xl text-center font-bold relative z-[2]">Join Our News Letter</p>
                <p className="text-sm text-[#f18f8fbc] text-center font-medium max-w-[550px] mt-5">Be the first to get new updates from us. Join the wait list and step into a new 
era of financial empowerment.</p>

                <div className="w-full relative z-[2] items-center mt-10 flex p-[3px] bg-white text-sm rounded-lg max-w-[700px] ">
                    <input type="email" className="text w-full p-3.5 h-full text-black outline-none bg-transparent" placeholder='Your Email Address' />
                    <button className="bg-redd duration-200 
hover:bg-[#cc3f43] rounded whitespace-nowrap p-3.5 font-medium px-6">Join Waitlist</button>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default Home;