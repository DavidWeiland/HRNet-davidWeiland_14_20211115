import {useState, useEffect} from 'react'
import { Row } from './rowComponent'
import { RowFL } from './rowComponentFL'
import SearchComponent from '../../Components/SearchComponent'

export const NewTable = ({ dataSource }) => {

  const sourceData = Array.from(dataSource)
  const [ EmployeesList, setEmployeesList ] = useState(sourceData)
  const [ nbPage, setNbPage ] = useState(1)
  const [ indexMin, setIndexMin ] = useState(1)
  const [ nbEntries, setNbEntries ] = useState(10)
  const [indexMax, setIndexMax] = useState(EmployeesList.length < nbEntries ? EmployeesList.length : nbEntries)
  
  useEffect(() => {
    setIndexMax(EmployeesList.length < nbEntries
        ? EmployeesList.length
        : nbEntries)
  }, [EmployeesList.length, nbEntries])
  
    const previousFunction = () => {
    if (nbPage > 1) {
      setNbPage(nbPage - 1)
      setIndexMin(indexMin - nbEntries)
      setIndexMax(indexMax-nbEntries)
    }
    return
  }

  const nextFunction = () => {
    const nbPagesMax = Math.ceil(EmployeesList.length / nbEntries)
    if (nbPage < nbPagesMax) {
      setNbPage(nbPage + 1)
      setIndexMin(indexMin + nbEntries)
      setIndexMax(indexMax + nbEntries)
    }
    return
  }

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>Show </span>
          <select onChange={(e) => setNbEntries(e.target.value)}>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span> entries</span>
        </div>
        <SearchComponent
          type="text"
          id="search"
          label="Search : "
          data={EmployeesList}
          onChange={(e) => setEmployeesList(e)}
        />
      </div>
      <RowFL
        firstName="First Name"
        lastName="Last Name"
        startDate="Start Date"
        department="Department"
        dateOfBirth="Date Of Birth"
        street="Street"
        city="City"
        state="State"
        zipCode="Zip Code"
        data={EmployeesList}
        onClick={(e) => setEmployeesList(e)}
      />

      {EmployeesList?.map(
        (
          {
            index,
            firstName,
            lastName,
            startDate,
            department,
            dateOfBirth,
            street,
            city,
            state,
            zipCode,
          },
          employee
        ) =>
          employee >= indexMin - 1 && employee <= indexMax - 1 ? (
            <Row
              key={`${index}-${firstName}${lastName}`}
              employee={employee}
              firstName={firstName}
              lastName={lastName}
              startDate={startDate}
              department={department}
              dateOfBirth={dateOfBirth}
              street={street}
              city={city}
              state={state}
              zipCode={zipCode}
            />
          ) : null
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
          marginTop: '-1px',
          borderTop: '1px black solid',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>
            Showing {indexMin} to {indexMax} of {EmployeesList.length} entries
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div onClick={() => previousFunction()}>Previous</div>
          <div
            style={{
              display: 'flex',
              width: '30px',
              height: '30px',
              border: '1px solid grey',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'linear-gradient(#f6f6f6, #c6c6c6)',
              marginLeft: '10px',
              marginRight: '10px',
            }}
          >
            {nbPage}
          </div>
          <div onClick={() => nextFunction()}>Next</div>
        </div>
      </div>
    </div>
  )
}
