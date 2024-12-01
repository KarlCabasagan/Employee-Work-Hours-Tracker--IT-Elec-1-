import { createContext, useEffect, useState } from "react"
import EmployeeList from "./EmployeeList"
import Header from "./Header"
import LogList from "./LogList"

export const TrackerContext = createContext(true)
export const LogsContext = createContext([])
// export const current

function Body() {
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: "John Karl Harley Cabasagan",
        },
        {
            id: 2,
            name: "John Wick",
        },
        {
            id: 3,
            name: "Mr. Bean",
        },
        {
            id: 4,
            name: "Mark Jannlenn Bongcababies",
        },
        {
            id: 5,
            name: "Elleiell Balisi",
        },
        {
            id: 6,
            name: "Ryan Balisi",
        },
    ])

    const [logs, setLogs] = useState([])
    const [currentLog, setCurrentLog] = useState(logs.length + 1)

    const [tracker, setTracker] = useState(true)

    useEffect(() => {
        setCurrentLog(l => logs.length + 1)
        console.log(logs)
    }, [logs])

    return (
        <TrackerContext.Provider value={[tracker, setTracker]}>
            <LogsContext.Provider value={[logs, setLogs]}>
                <div className="w-full md:w-1/2 h-full lg:h-3/4 sm:transition-all md:transition-all lg:transition-all bg-[#FFFFFF] rounded-lg shadow relative overflow-hidden flex justify-center">
                    <Header />
                    <EmployeeList employees={employees} currentLog={currentLog} tracker={tracker} />
                    <LogList logs={logs} tracker={tracker} />   
                </div>
            </LogsContext.Provider>
        </TrackerContext.Provider>
    )
}

export default Body