import '../../Styles/App.css';
import {Link} from 'react-router-dom'

function Home() {
  const saveEmployee = () => {
    
  }

  return (
    <div>
      <div class="title">
          <h1>HRnet</h1>
      </div>
      <div class="container">
        <Link to="/currentEmployees">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />

          <label htmlFor="date-of-birth">Date of Birth</label>
          ici travailler DateTimePicker : plugin jQuery
          <input id="date-of-birth" type="text" />

          <label htmlFor="start-date">Start Date</label>
          ici travailler DateTimePicker : plugin jQuery
          <input id="start-date" type="text" />

          <fieldset class="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>
            ici travailler menu déroulant : plugin jQuery
            <select name="state" id="state"></select>

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <label htmlFor="department">Department</label>
          ici travailler menu déroulant : plugin jQuery
          <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </form>

        <button onclick={saveEmployee()}>Save</button>
      </div>
      ici travailler modal : plugin jQuery
      <div id="confirmation" class="modal">Employee Created!</div>
    </div>
  );
}

export default Home;
