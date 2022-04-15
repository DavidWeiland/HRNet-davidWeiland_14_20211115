import '../../Utils/Styles/App.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectEmployees } from '../../Utils/selectors'
//import personal component 
import { Table } from '@david_weiland/dw-table'

function CurrentEmployees() {
  // Link to the store
  const employees = useSelector(selectEmployees)
  const employeesList = employees.data ?? []
  
  return (
    <div>
      <div className="title_container">
        <h1>Current Employees</h1>
      </div>

      <div id="employee-div" className="container">
        <Table
          data={employeesList}
          model={[
            { title: 'First Name', value: 'firstName', type: 'string', flex: 2 },
            { title: 'Last Name', value: 'lastName', type: 'string', flex: 3 },
            { title: 'Start Date', value: 'startDate', type: 'date', flex: 2 },
            { title: 'Department', value: 'department', type: 'string', flex: 3 },
            { title: 'Date of Birth', value: 'dateOfBirth', type: 'date', flex: 2},
            { title: 'Street', value: 'street', type: 'string', flex: 3 },
            { title: 'City', value: 'city', type: 'string', flex: 3 },
            { title: 'State', value: 'state', type: 'string', flex: 1 },
            { title: 'Zip Code', value: 'zipCode', type: 'number', flex: 2 },
          ]}
        />
      </div>

      <div className="subtitle_container">
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}

export default CurrentEmployees
