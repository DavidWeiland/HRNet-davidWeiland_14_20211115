import '../../Utils/Styles/App.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectEmployees } from '../../Utils/selectors'

import { Table } from '../../Components/Table'

function CurrentEmployees() {
  // Link to the store
  const employees = useSelector(selectEmployees)
  const employeesList = employees.data

  return (
    <div>
      <div className="title_container">
        <h1>Current Employees</h1>
      </div>

      <div id="employee-div" className="container">
        <Table dataSource={employeesList ?? {}} />
      </div>

      <div className="subtitle_container">
        <Link to="/">Home</Link>
      </div>

    </div>
  )
}

export default CurrentEmployees
