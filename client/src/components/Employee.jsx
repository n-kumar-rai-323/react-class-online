import './Employee.css'

// (Grandchild)
function Employee({ name, role, city }) {
    return (
        <div className="employee-box">
            <h4>Employee Details:</h4>
            <p><strong>Name:</strong>{name}</p>
            <p><strong>Role:</strong>{role}</p>
            <p><strong>City:</strong>{city}</p>
        </div>
    )
}


Employee.defaultProps = {
    name: "Guest",
    role: "Intern",
    city: "Kathmandu"
}

export default Employee;