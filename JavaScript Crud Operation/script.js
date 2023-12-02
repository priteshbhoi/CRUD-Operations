// Array to store employee data (simulating a database)
let employees = [];

// Function to display employee data in the table
function displayEmployees() {
    const employeeTable = document.getElementById('employeeData');
    employeeTable.innerHTML = '';

    employees.forEach((employee, index) => {
        const row = employeeTable.insertRow();
        row.innerHTML = `
            <td>${employee.fullName}</td>
            <td>${employee.email}</td>
            <td>${employee.salary}</td>
            <td>${employee.city}</td>
            <td>
                <button class="btn btn-sm btn-info" onclick="editEmployee(${index})">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deleteEmployee(${index})">Delete</button>
            </td>
        `;
    });
}

// Function to add a new employee
document.getElementById('employeeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const salary = document.getElementById('salary').value;
    const city = document.getElementById('city').value;

    const employee = {
        fullName,
        email,
        salary,
        city
    };

    employees.push(employee);
    displayEmployees();
    document.getElementById('employeeForm').reset();
});

// Function to edit an existing employee
function editEmployee(index) {
    const employee = employees[index];
    document.getElementById('fullName').value = employee.fullName;
    document.getElementById('email').value = employee.email;
    document.getElementById('salary').value = employee.salary;
    document.getElementById('city').value = employee.city;

    employees.splice(index, 1);
    displayEmployees();
}

// Function to delete an employee
function deleteEmployee(index) {
    employees.splice(index, 1);
    displayEmployees();
}