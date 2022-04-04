import { useState, Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from 'react-redux'
import { addEmployee } from '../../Features/employees'
import SelectMenu from '../../Components/SelectMenu'
import InputComponent from '../../Components/InputComponent'

import { formatDate } from '../../Utils/FormatDateFunction'

import '../../Utils/Styles/App.css'
import styled from 'styled-components'
import colors from '../../Utils/Styles/colors'


// personal npm module:
const Modal = lazy(() => import('dw-modal'))

export default function Home() {
  const store = useStore()

  // Only to reset the application :
  //localStorage.removeItem('employees')

  // Controls states of inputs
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  const [dateOfBirth, setBirthdate] = useState('')
  const [startDate, setStartdate] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('AL')
  const [zipCode, setZipcode] = useState('')
  const [department, setDepartment] = useState('Sales')

  // Controls the display of the modal
  const [modal, setModal] = useState(false)

  // Function to save a new employee
  const saveEmployee = () => {
    // Prepares data to be added to the store
    const employee = {
      firstName,
      lastName,
      dateOfBirth: formatDate(dateOfBirth),
      startDate: formatDate(startDate),
      street,
      city,
      state,
      zipCode,
      department,
    }

    console.log(employee.dateOfBirth)
    addEmployee(store, employee)

    // This following part is only necessary in the case of a localStorage
    /* const employees = JSON.parse(localStorage.getItem('employees')) || []
    employees.push(employee)
    localStorage.setItem('employees', JSON.stringify(employees)) */

    // Open the modal
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

  // Imposed by dw-modal to close modal
  const closeModal = () => {
    setModal(!modal)
  }

  return (
    <div>
      <div className="title_container">
        <h1>HRnet</h1>
      </div>

      <div className="subtitle_container">
        <Link to="/currentEmployees">View Current Employees</Link>
        <h2>Create Employee</h2>
      </div>

      <div className="container">
        <form action="#" id="create-employee">
          <InputComponent
            type="text"
            id="first-name"
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <InputComponent
            type="text"
            id="last-name"
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}
          />

          <InputComponent
            type="date"
            id="date-of-birth"
            label="Date of Birth"
            value={dateOfBirth}
            onChange={(e) => setBirthdate(e.target.value)}
          />
          <InputComponent
            type="date"
            id="start-date"
            label="Start Date"
            value={startDate}
            onChange={(e) => setStartdate(e.target.value)}
          />

          <fieldset>
            <legend>Address</legend>
            <InputComponent
              type="text"
              id="street"
              label="Street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <InputComponent
              type="text"
              id="city"
              label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <SelectMenu
              name="state"
              id="state"
              label="State"
              onChange={(e) => setState(e.target.value)}
            />

            <InputComponent
              type="number"
              id="zip-code"
              label="Zip Code"
              value={zipCode}
              onChange={(e) => setZipcode(e.target.value)}
            />
          </fieldset>
          <SelectMenu
            name="department"
            id="department"
            label="Department"
            onChange={(e) => setDepartment(e.target.value)}
          />
        </form>

        <StyledButton onClick={saveEmployee}>Create</StyledButton>
      </div>

      <Suspense fallback={<div></div>}>
        <Modal state={modal} config={{}} close={closeModal}>
          <p>Employee Created!</p>
        </Modal>
      </Suspense>
    </div>
  )
}

const StyledButton = styled.button`
  margin: 15px;
  padding: 5px;
  width: 25%;
  background-color: ${colors.BgButton};
  color: ${colors.fontLigth};
  border-radius: 5px;
  border: 0;
  box-shadow: 5px 5px 15px grey, inset -3px -3px 15px ${colors.ShadowDark},
    inset 3px 3px 15px ${colors.ShadowLight};
  &:active {
    box-shadow: 2px 2px 15px grey, inset -3px -3px 15px ${colors.ShadowDark},
      inset 3px 3px 15px ${colors.ShadowLight};
  }
`
