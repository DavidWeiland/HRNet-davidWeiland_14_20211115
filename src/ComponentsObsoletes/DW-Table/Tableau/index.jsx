import { useState } from 'react'
import { Row } from './Body'
import { Header } from './Header'
import { Footer } from './Footer'

export const Tableau = ({ sourceData, entriesPerPage, searchText }) => {
  const [data, setData] = useState(sourceData)
  const [indexMin, setIndexMin] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const indexMax = indexMin + entriesPerPage - 1

  const rows = []
  data.forEach((item) => {
    const { firstName, lastName, startDate, department, dateOfBirth, street, city, state, zipCode } = item
    if (
      firstName.toLowerCase().includes(searchText.toLowerCase()) ||
      lastName.toLowerCase().includes(searchText.toLowerCase()) ||
      startDate.includes(searchText) ||
      department.toLowerCase().includes(searchText.toLowerCase()) ||
      dateOfBirth.includes(searchText) ||
      street.toLowerCase().includes(searchText.toLowerCase()) ||
      city.toLowerCase().includes(searchText.toLowerCase()) ||
      state.toLowerCase().includes(searchText.toLowerCase()) ||
      zipCode.includes(searchText)
    ) {
      rows.push(item)
    }
  })
  
  return (
    <div>
      <Header
        firstName="First Name"
        lastName="Last Name"
        startDate="Start Date"
        department="Department"
        dateOfBirth="Date Of Birth"
        street="Street"
        city="City"
        state="State"
        zipCode="Zip Code"
        data={data}
        onClick={(e) => setData(e)}
        i
      />

      {rows.map((row, index) =>
        index >= indexMin - 1 && index < indexMax ? (
          <Row
            key={`${index}-${row.firstName}${row.lastName}`}
            employee={index}
            firstName={row.firstName}
            lastName={row.lastName}
            startDate={row.startDate}
            department={row.department}
            dateOfBirth={row.dateOfBirth}
            street={row.street}
            city={row.city}
            state={row.state}
            zipCode={row.zipCode}
          />
        ) : null
      )}

      <Footer
        indexMin={indexMin}
        currentLength={rows.length}
        currentPage={currentPage}
        entriesPerPage={entriesPerPage}
        setIndexMin={setIndexMin}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}
