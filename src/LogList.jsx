import Log from "./Log"
import LogsHead from "./LogsHead"

function LogList({ logs, tracker }) {
    return (
        <div className={(tracker ? "hidden" : "block") + " w-[95%] h-[86%] mt-[6rem] lg:mt-[5.5rem] lg:mb-[0.5rem] lg:pb-[2rem] overflow-auto scrollbar-none"}>
            <LogsHead />
            {logs.map(log => (
                <Log key={log.id} log={log} />
            ))}
        </div>
    )
}

export default LogList