import './Employee.css'

// (Grandchild)
function Employee({ name = "Guest", role = "Intern", city = "Kathmandu" }) {
    return (
        <div className="employee-box">
            <h4>Employee Details:</h4>
            <p><strong>Name : </strong>{name}</p>
            <p><strong>Role : </strong>{role}</p>
            <p><strong>City : </strong>{city}</p>
        </div>
    )
}



export default Employee;