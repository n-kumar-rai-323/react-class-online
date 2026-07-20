import './Department.css'
import Employee from './Employee'

// child 
function Department({ deptName, empName, empRole, empCity }) {
    return (
        <div className="department-box">
            <h3>{deptName}</h3>
            <Employee name={empName} role={empRole} city={empCity} />
        </div>
    )
}

Department.defaultProps = {
    deptName: "General Admin"
}

export default Department