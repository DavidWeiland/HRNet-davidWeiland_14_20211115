import '../../Utils/Styles/App.css';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from 'react-redux'
import { addEmployee } from '../../Features/employees';
import { states } from '../../Data/States'
import Datetimepicker from '../../Components/DateTimePicker';
import SelectMenu from '../../Components/SelectMenu';
import SelectOptions from '../../Components/SelectOptions';

// personal npm module:
import Modal from 'dw-react-modal/dist/dw-react-modal';


export default function Home() {
  const store = useStore()

  // Only to reset the application :
  //localStorage.removeItem('employees')

  // Controls states of inputs
  const [firstName, setFirstname]= useState('')
  const [lastName, setLastname]= useState('')
  const [dateOfBirth, setBirthdate]= useState('')
  const [startDate, setStartdate]= useState('')
  const [street, setStreet]= useState('')
  const [city, setCity]= useState('')
  const [state, setState]= useState('AL')
  const [zipCode, setZipcode ]= useState('')
  const [department, setDepartment] = useState('Sales')
  
  // Controls the display of the modal
  const [modal, setModal] = useState(false)

  // Function to save a new employee
  const saveEmployee = () => {

    // Prepares data to be added to the store
    const employee = { firstName, lastName, dateOfBirth, startDate, street, city, state, zipCode, department }
    
    addEmployee(store, employee)

    // This following part is only necessary in the case of a localStorage
    const employees = JSON.parse(localStorage.getItem('employees')) || []
    employees.push(employee)
    localStorage.setItem('employees', JSON.stringify(employees))

    // Opens the modal
    setModal(!modal)

    // Empties inputs
    setFirstname('')
    setLastname('')
    setBirthdate('')
    setStartdate('')
    setStreet('')
    setCity('')
    setState('AL')
    setZipcode('')
    setDepartment('Sales')
  }

  // Imposed by dw-react-modal to close modal
  const closeModal = () => {
    setModal(!modal)
  }

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>

      <div className="container">
        <Link to="/currentEmployees">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}
          />
          <label htmlFor="date-of-birth">Date of Birth</label>
          <Datetimepicker
            id="date-of-birth"
            value={dateOfBirth}
            onChange={setBirthdate}
          />
          <label htmlFor="start-date">Start Date</label>
          <Datetimepicker
            id="start-date"
            value={startDate}
            onChange={setStartdate}
          />
          <fieldset className="address">
            <legend>Address</legend>
            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <label htmlFor="state">State</label>

            <SelectMenu name="state" id="state" onChange={setState}>
              {states.map(({ index, name, abbreviation }) => (
                <SelectOptions
                  key={`${abbreviation}-${index}`}
                  value={abbreviation}
                  text={name}
                />
              ))}
            </SelectMenu>

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              value={zipCode}
              onChange={(e) => setZipcode(e.target.value)}
            />
          </fieldset>
          <label htmlFor="department">Department</label>

          <SelectMenu
            name="department"
            id="department"
            onChange={setDepartment}
          >
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </SelectMenu>

        </form>

        <button onClick={saveEmployee}>Save</button>
      </div>

      <Modal state={modal} config={{}} close={closeModal}>
        <p>Employee Created!</p>
      </Modal>
    </div>
  )
}