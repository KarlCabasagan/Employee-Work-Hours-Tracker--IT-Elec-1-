import Employee from "./Employee"
import EmployeeHead from "./EmployeeHead"

function EmployeeList({ employees, currentLog, tracker }) {
    return (
        <div className={(tracker ? "block" : "hidden") + " w-[95%] h-[86%] mt-[6rem] overflow-auto lg:mt-[5.5rem] lg:pb-[2rem] scrollbar-none"}>
            <EmployeeHead />
            {employees.map(employee => (
                <Employee key={employee.id} name={employee.name} currentLog={currentLog} />
            ))}
        </div>
    )
}

export default EmployeeList