
import { Link } from "react-router-dom"
import verify from "../assets/Images/verify.svg"
import star from "../assets/Images/star.svg"
import sgray from "../assets/Images/gstar.svg"

const ProductCard = (props) => {
    return (
        <>

            <div className="card shrink-0 rounded-2xl overflow-hidden bg-white w-[200px] md:w-full border font-medium">
                <div style={{backgroundImage: `url(${props.img})`}} className="img relative bg-[#f1f1f1] w-full aspect-[1/.7] flex bg-no-repeat bg-cover min-h-[150px] bg-center  justify-end items-start p-2">

                   <p className="gold flex gap-1 items-center text-[.6rem] text-white backdrop-blur-md bg-[#64646490] border border-[#cccccc30] rounded-full whitespace-nowrap w-max p-1.5 pr-3">
                        <img src={verify} alt="" className="w-6 h-6 object-contain  " />
                    Hucksters Gold Vendor</p>    
                </div>
             
                
                <div className="details p-3">
                  
                        <p className="name w-full whitespace-nowrap text-ellipsis overflow-clip mb-1 font-bold">{props.name}</p>
                        
                    <div className="stars mb-2 gap-1  flex">
                        
                        <img src={props.stars >= 1 ? star : sgray} alt="" className="w-3 " />
                      <img src={props.stars >= 2 ? star : sgray} alt="" className="w-3 " />
                      <img src={props.stars >= 3 ? star : sgray} alt="" className="w-3 " />
                      <img src={props.stars >= 4 ? star : sgray} alt="" className="w-3 " />
                      <img src={props.stars >= 5 ? star : sgray} alt="" className="w-3 " />
                    </div>

                    <p className="newPrice text-sm">N{props.prices[0]}</p>
                    <p className="oldPrice text-sm relative flex items-center justify-center w-max text-[#ccc] before:w-full before:h-[1px] before:bg-[#ccc] before:absolute">N{props.prices[1]}</p>
                   
                    {/* <p className="gold flex gap-2 items-center text-xs mt-2 text-orange-400">
                        <img src={tick} alt="" className="w-5 bg-orange-400 rounded-full h-5 p-1" />
                        Hucksters Gold Vendor</p> */}

                <Link to="path" >
                <button className="w-full lg:w-max bg-lred duration-200 hover:bg-redd hover:text-white text-redd font-medium mt-3 p-3 px-5 text-sm rounded-lg">View Product</button>
                </Link>
                </div>
            </div>
        </>
    )
}

export default ProductCard;