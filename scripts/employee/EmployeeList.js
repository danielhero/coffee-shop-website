import { useEmployee } from "./employeeDataProvider.js"
import { Employee } from "./Employee.js"




const contentTarget = document.querySelector(".employees")

export const EmployeeList = () => {
    const EmployeeArray = useEmployee()

    for (const employeeObject of EmployeeArray) {
        const EmployeeString = Employee(employeeObject)

        contentTarget.innerHTML += EmployeeString
    }
}