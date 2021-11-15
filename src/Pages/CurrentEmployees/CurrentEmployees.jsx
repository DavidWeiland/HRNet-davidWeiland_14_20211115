import '../../Styles/App.css';
import {Link} from 'react-router-dom'

function CurrentEmployees() {
  return (
    <div id="employee-div" class="container">
      <h1>Current Employees</h1>

      ici travailler table : plugin jQuery

      <table id="employee-table" class="display"></table>

      <Link to="/">Home</Link>
    </div>
  );
}

export default CurrentEmployees;
