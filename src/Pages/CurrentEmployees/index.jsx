import '../../Utils/Styles/App.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectEmployees } from '../../Utils/selectors'

import { NewTable } from '../../Components/NewTable'

function CurrentEmployees() {
  // Link to the store
  const employees = useSelector(selectEmployees)
  const employeesList = employees.data

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>

      <NewTable dataSource={employeesList ?? {}} />
      
      <Link to="/">Home</Link>
    </div>
  )
}

export default CurrentEmployees
