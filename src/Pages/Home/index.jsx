import '../../Styles/App.css';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Datetimepicker from '../../Components/DateTimePicker';
import { states } from '../../Data/States'
import SelectMenu from '../../Components/SelectMenu';
import SelectOptions from '../../Components/SelectOptions';
import Modal from '../../Components/DW-Modal';

export default function Home() {
  const employees = JSON.parse(localStorage.getItem('employees')) || []

  const [firstName, setFirstname]= useState('')
  const [lastName, setLastname]= useState('')
  const [dateOfBirth, setBirthdate]= useState('')
  const [startDate, setStartdate]= useState('')
  const [street, setStreet]= useState('')
  const [city, setCity]= useState('')
  const [state, setState]= useState('AL')
  const [zipCode, setZipcode ]= useState('')
  const [department, setDepartment] = useState('Sales')
  const [modal, setModal] = useState(false)

  const handleChange = (e) => {
    const value = e.target.value
    switch (e.target.id) {
      case "first-name":
        setFirstname(value)
        break
      case "last-name":
        setLastname(value)
        break
      case "street":
        setStreet(value)
        break
      case "city":
        setCity(value)
        break
      case "zip-code":
        setZipcode(value)
        break
      default:
    }
  }

  const saveEmployee = () => {
    setModal(!modal)
    
    const employee = {
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth,
        startDate: startDate,
        street: street,
        city: city,
        state: state,
        zipCode: zipCode,
        department: department
    }

    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees))

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
          <input type="text" id="first-name" value={firstName} onChange={handleChange} />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" value={lastName} onChange={handleChange}/>

          <label htmlFor="date-of-birth">Date of Birth</label>
          <Datetimepicker id="date-of-birth" value={dateOfBirth} onChange={setBirthdate}/>

          <label htmlFor="start-date">Start Date</label>
          <Datetimepicker id="start-date" value={startDate} onChange={setStartdate}/>

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" value={street} onChange={handleChange}/>

            <label htmlFor="city">City</label>
            <input id="city" type="text" value={city} onChange={handleChange}/>

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
            <input id="zip-code" type="number" value={zipCode} onChange={handleChange}/>
          </fieldset>

          <label htmlFor="department">Department</label>
          <SelectMenu name="department" id="department" onChange={setDepartment}>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </SelectMenu>
        </form>

        <button onClick={saveEmployee}>
          Save
        </button>
      </div>
      
      {/* configure modal : Modal accepts config={object} to change style (ex : {backgroundColor : "#FFF", color:"#333333"}). It's possible to change : backgroundColor, borderRadius, width, height, justifyContent, alignItems, color, fontWeight, fontSize. */}
        <Modal state={modal} config={{}} close={closeModal}>
          <p>Employee Created!</p>
        </Modal>
      
    </div>
  );
}