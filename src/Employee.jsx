import { useContext, useEffect, useState, useRef } from "react"
import { LogsContext } from "./Body"

function Employee(props) {

    const [logs, setLogs] = useContext(LogsContext)
    // const [currentLog, setCurrentLog] = useState(logs.length + 1)
    const [clockIn, setClockIn] = useState(false)
    const buttonRef = useRef()
    const clockInTime = useRef()
    const [currentId, setCurrentId] = useState(1)

    function getCurrentDateInMDYFormat() {
        const today = new Date()
        const month = String(today.getMonth() + 1).padStart(2, '0')
        const day = String(today.getDate()).padStart(2, '0')
        const year = today.getFullYear().toString().slice(-2)
      
        return `${month}/${day}/${year}`
      }

    function getCurrentTimeInAMFormat() {
        const now = new Date()
        const hours = now.getHours()
        const minutes = now.getMinutes()
      
        const isAM = hours < 12
        const formattedHours = hours % 12 || 12
      
        const formattedMinutes = minutes.toString().padStart(2, '0')
      
        const formattedTime = `${formattedHours}:${formattedMinutes}${isAM ? 'AM' : 'PM'}`
      
        return formattedTime
      }
    
    const handleClockIn = () => {
        const currentDate = getCurrentDateInMDYFormat()
        const currentTime = getCurrentTimeInAMFormat()

        setLogs(l => [{id: props.currentLog, name: props.name, clockInDate: currentDate, clockIn: currentTime, clockOutDate: null, clockOut: null },...l])
    }

    const handleClockOut = () => {
        const currentDate = getCurrentDateInMDYFormat()
        const currentTime = getCurrentTimeInAMFormat()

        const updatedLogs = logs.map(log => {
            if(log.id == currentId) {
                return {...log, clockOutDate: currentDate, clockOut: currentTime}
            }
            return log
        })

        setLogs(updatedLogs)
    }

    const changeButton = () => {
        const button = buttonRef.current

        if(clockIn) {
            button.classList.remove('bg-[#08BBB7]')
            button.classList.add('bg-[#BB0808]')
            button.firstChild.textContent = 'Clock out'
        } else {
            button.classList.remove('bg-[#BB0808]')
            button.classList.add('bg-[#08BBB7]')
            button.firstChild.textContent = 'Clock in'
        }
    }

    useEffect(() => {
        changeButton()

        if(clockIn) {
            setCurrentId(c => props.currentLog)
            handleClockIn()
        } else {
            setCurrentId(null)
            handleClockOut()
        }

        clockIn ? clockInTime.current.textContent = getCurrentTimeInAMFormat() : clockInTime.current.textContent = ''
    }, [clockIn])

    return (
        <div className="w-full h-24 flex items-center border-b-2 border-gray-100">
            <div className="w-1/3 h-full flex items-center lg:justify-center">
                <h2 className="line-clamp-3 font-medium">{props.name}</h2>
            </div>
            <div className="w-1/3 h-full flex items-center justify-center">
                <span ref={clockInTime} className="font-thin text-green-600"></span>
            </div>
            <div className="w-1/3 h-full flex items-center justify-end">
                <button ref={buttonRef} onClick={() => setClockIn(c => !c)} className="w-[90%] bg-[#08BBB7] p-5 rounded shadow transition ease-in-out duration-100">
                    <span className="text-white font-medium">Clock in</span>
                </button>
            </div>
        </div>
    )
}

export default Employee