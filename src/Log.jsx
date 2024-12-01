
function Log({ log }) {
    return (
        <div className="w-full h-24 flex items-center border-b-2 border-gray-100">
            <div className="w-1/3 h-full flex items-center lg:justify-center">
                <h2 className="line-clamp-3 font-medium">{log.name}</h2>
            </div>
            <div className="w-1/3 h-full flex items-end justify-center flex-col">
                <span className="font-thin text-gray-400">{log.clockInDate}</span>
                <span className="font-thin text-green-600">{log.clockIn}</span>
            </div>
            <div className="w-1/3 h-full flex items-end justify-center flex-col">
                <span className={(log.clockOutDate ? "block" : "hidden") + " font-thin text-gray-400"}>{log.clockOutDate}</span>
                <span className={(log.clockOut ? "font-medium" : "font-semibold") + " text-red-600"}>{log.clockOut ? log.clockOut : "On Duty"}</span>
            </div>
        </div>
    ) 
}

export default Log