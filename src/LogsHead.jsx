
function LogsHead() {
    return (
        <div className="w-full h-auto flex items-center border-b-2 pt-3 pb-2 lg:pt-1">
            <div className="w-1/3 h-full flex items-center lg:justify-center">
                <h2 className="font-thin text-gray-600">Name</h2>
            </div>
            <div className="w-1/3 h-full flex items-center justify-end">
                <span className="font-thin text-gray-600">Clock in</span>
            </div>
            <div className="w-1/3 h-full flex items-center justify-end">
                <span className="font-thin text-gray-600">Clock out</span>
            </div>
        </div>
    )
}

export default LogsHead