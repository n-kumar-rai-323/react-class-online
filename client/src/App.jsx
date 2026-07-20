import Department from './components/Department';
import { departmentsData } from './data/officeData'
import './App.css'
function App() {
    return (
        <div className="hq-container">
            <h1 className="hq-title">Headquarters</h1>
            <p className="hq-subtitle">Data Separation</p>
            <hr className="hq-divider" />
            {departmentsData.map((dept) => (
                <Department
                    key={dept.id}
                    deptName={dept.deptName}
                    empName={dept.empName}
                    empRole={dept.empRole}
                    empCity={dept.empCity} />
            ))}
        </div>
    )
}

export default App;