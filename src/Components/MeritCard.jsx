const MeritCard = (props) => {
    return (
        <>
            <div className="p-6 rounded-lg bg-[#fffdfd]">
                <img src={props.img} className="w-10 rounded-full h-10 shrink-0 p-2 overflow-visible bg-lred" />
                
                <p className="font-bold text-sm my-2 w-[55%]">{props.title}</p>
                <p className="text-xs text-[#999]">{props.info}</p>
        </div>
        </>
    )
}

export default MeritCard;