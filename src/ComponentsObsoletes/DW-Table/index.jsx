import { useState } from 'react'
import SearchComponent from '../SearchComponent'
import { Tableau } from './Tableau'
import styled from 'styled-components'
import colors from '../../Utils/Styles/colors'

export const Table = ({ dataSource }) => {
  
  const sourceData = Array.from(dataSource)

  const [entriesPerPage, setEntriesPerPage] = useState(10)
  const [searchText, setSearchText] = useState('')


  return (
    <MainContainer>
      <TableOptionsContainer>
        <Container>
          <SpanSelect>Show </SpanSelect>
          <Select
            value={entriesPerPage}
            onChange={(e) => setEntriesPerPage(Number(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </Select>
          <SpanSelect> entries</SpanSelect>
        </Container>

        <SearchComponent
          type="text"
          id="search"
          label="Search : "
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </TableOptionsContainer>

      <Tableau
        sourceData={sourceData}
        searchText={searchText}
        entriesPerPage={entriesPerPage}
      />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  width:100%
`
const TableOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin:20px;
`
const Container = styled.div`
  width: 30%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`
const SpanSelect = styled.span`
  font-size: 15px;
  font-weight: 400;
`
const Select = styled.select`
  margin: 5px;
  padding: 1%;
  border-radius: 5px;
  border: 1px;
  box-shadow: ${colors.boxShadow};
  font-size: 12px;
  font-weight: 400;
`