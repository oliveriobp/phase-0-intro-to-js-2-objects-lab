const employee = {
    name: "Oli",
    streetAddress: "8 Woodlands Way"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value}
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]= value
    return employee
}

function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee = {...employee, [key]: value}
    delete newEmployee.key
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee[key]
    return employee
}