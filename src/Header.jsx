import { useContext } from "react"
import { TrackerContext } from "./Body"

function Header() {

    const [tracker, setTracker] = useContext(TrackerContext)

    return (
        <div className="w-full h-24 lg:h-20 flex rounded bg-[#08BBB7] shadow absolute">
            <div onClick={() => setTracker(t => true)} className={(tracker ? " shadow-lg" : "") + " w-1/2 h-full rounded-lg rounded-r-none rounded-b-none flex justify-center items-center transition-all cursor-pointer"}>
                <span className="text-xl text-white font-medium">
                    Tracker
                </span>
            </div>
            <div onClick={() => setTracker(t => false)} className={(tracker ? "" : "shadow-lg") + " w-1/2 h-full rounded-lg rounded-l-none rounded-b-none flex justify-center items-center transition-all cursor-pointer"}>
                <span className="text-xl text-white font-medium">
                    Logs
                </span>
            </div>
        </div>
    )
}

export default Header