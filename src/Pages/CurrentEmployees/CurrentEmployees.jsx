import '../../Styles/App.css';
import { Link } from 'react-router-dom'
import Table from '../../Components/Table';

function CurrentEmployees() {
  const employees = JSON.parse(localStorage.getItem('employees'));
  
  return (
    <div id="employee-div" class="container">
      <h1>Current Employees</h1>

      <Table dataSource={employees} />

      <Link to="/">Home</Link>
    </div>
  );
}

export default CurrentEmployees;
