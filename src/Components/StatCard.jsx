const StatCard = (props) => {
    return (
        <>
            <div className="statCard p-5  rounded-xl bg-white border">
                <img src={props.img} alt="" className="w-6" />
                <p className="text-redd text-lg font-black mb-1.5 mt-3">{props.rate}</p>

                
                <p className=" font-medium text-xs my-2">{props.info}</p>


            </div>
        </>
    )
}

export default StatCard;