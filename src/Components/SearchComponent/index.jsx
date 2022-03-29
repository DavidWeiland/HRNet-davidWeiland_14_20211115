import { useState } from "react"
import { useSelector } from 'react-redux'
import { selectEmployees } from '../../Utils/selectors'

export default function SearchComponent({ type, id, label, onChange }) {

  const EmployeesList = useSelector(selectEmployees).data
  
  const [ searchText, setSearchText ] = useState("")

  const SearchFunction = (e) => {
    console.log(searchText.length)
    //setSearchText(e.target.value)
    console.log(searchText)
    if (searchText.length >= 2) {
      const NewData = EmployeesList.filter(
        (employee) =>
          employee.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
          employee.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
          employee.startDate.toLowerCase().includes(searchText.toLowerCase()) ||
          employee.department
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          employee.dateOfBirth
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          employee.street.toLowerCase().includes(searchText.toLowerCase()) ||
          employee.city.toLowerCase().includes(searchText.toLowerCase()) ||
          employee.state.toLowerCase().includes(searchText.toLowerCase()) ||
          employee.zipCode.toLowerCase().includes(searchText.toLowerCase())
      )
      return onChange(NewData)
    }
    return onChange(EmployeesList)
  }

  const Focus = () => {
    setSearchText('')
    return onChange(EmployeesList)
  }

  return (
    <div>
      <label htmlFor={id}>
        {label}
        <input
          type={type}
          id={id}
          value={searchText}
          onFocus={() => Focus()}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={()=>SearchFunction()}>Launch !</button>
      </label>
    </div>
  )
}
