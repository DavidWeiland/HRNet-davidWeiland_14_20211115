import styled from 'styled-components'
import colors from '../../../../Utils/Styles/colors'

export const Header = ({ firstName, lastName, startDate, department, dateOfBirth, street, city, state, zipCode, data, onClick }) => {
  
  const EmployeesList = Array.from(data)

  const tri = (string, sens) => {
    switch (string) {
      case 'firstName':
        switch (sens) {
          case 'AZ':
            return onClick(
              EmployeesList.sort((a, b) => a.firstName > b.firstName ? 1 : -1)
            )
          case 'ZA':
            return onClick(
              EmployeesList.sort((a, b) => a.firstName < b.firstName ? 1 : -1)
            )
          default:
        }
        break
      case 'lastName':
        switch (sens) {
          case 'AZ':
            return onClick(
              EmployeesList.sort((a, b) => a.lastName > b.lastName ? 1 : -1)
            )
          case 'ZA':
            return onClick(
              EmployeesList.sort((a, b) => a.lastName < b.lastName ? 1 : -1)
            )
          default:
        }
        break
      case 'startDate':
        switch (sens) {
          case 'AZ':
            return onClick(
              EmployeesList.sort((a, b) => (a.startDate > b.startDate ? 1 : -1))
            )
          case 'ZA':
            return onClick(
              EmployeesList.sort((a, b) => (a.startDate < b.startDate ? 1 : -1))
            )
          default:
        }
        break
      case 'department':
        switch (sens) {
          case 'AZ':
            return onClick(
              EmployeesList.sort((a, b) => (a.department > b.department ? 1 : -1))
            )
          case 'ZA':
            return onClick(
              EmployeesList.sort((a, b) => (a.department < b.department ? 1 : -1))
            )
          default:
        }
        break
      case 'dateOfBirth':
        switch (sens) {
          case 'AZ':
            return onClick(
              EmployeesList.sort((a, b) => (a.dateOfBirth > b.dateOfBirth ? 1 : -1))
            )
          case 'ZA':
            return onClick(
              EmployeesList.sort((a, b) => a.dateOfBirth < b.dateOfBirth ? 1 : -1)
            )
          default:
        }
        break
      case 'street':
        switch (sens) {
          case 'AZ':
            return onClick(
              EmployeesList.sort((a, b) => (a.street > b.street ? 1 : -1))
            )
          case 'ZA':
            return onClick(
              EmployeesList.sort((a, b) => (a.street < b.street ? 1 : -1))
            )
          default:
        }
        break
      case 'city':
        switch (sens) {
          case 'AZ':
            return onClick(
              EmployeesList.sort((a, b) => (a.city > b.city ? 1 : -1))
        )
          case 'ZA':
            return onClick(
                  EmployeesList.sort((a, b) => (a.city < b.city ? 1 : -1))
                )
          default:
        }
        break
      case 'state':
        switch (sens) {
          case 'AZ':
            return onClick(
              EmployeesList.sort((a, b) => (a.state > b.state ? 1 : -1))
            )
          case 'ZA':
            return onClick(
                EmployeesList.sort((a, b) => (a.state < b.state ? 1 : -1))
              )
          default:
        }
        break
      case 'zipCode':
        switch (sens) {
          case 'AZ':
            return onClick(
              EmployeesList.sort((a, b) => (a.zipCode > b.zipCode ? 1 : -1))
            )
          case 'ZA':
            return onClick(
                EmployeesList.sort((a, b) => (a.zipCode < b.zipCode ? 1 : -1))
              )
          default:
        }
        break
      default:
    }
  }


  return (
    <StyledContainer>
      
      <StyledCell style={{ flex: 2 }}>
        {firstName}
        <StyledIconWrapper>
          <StyledIconTriAZ onClick={() => tri('firstName', 'AZ')}></StyledIconTriAZ>
          <StyledIconTriZA onClick={() => tri('firstName', 'ZA')}></StyledIconTriZA>
        </StyledIconWrapper>
      </StyledCell>

      <StyledCell style={{ flex: 3 }}>
        {lastName}
        <StyledIconWrapper>
          <StyledIconTriAZ onClick={() => tri('lastName', 'AZ')}></StyledIconTriAZ>
          <StyledIconTriZA onClick={() => tri('lastName', 'ZA')}></StyledIconTriZA>
        </StyledIconWrapper>
      </StyledCell>

      <StyledCell style={{ flex: 2 }}>
        {startDate}
        <StyledIconWrapper>
          <StyledIconTriAZ onClick={() => tri('startDate', 'AZ')}></StyledIconTriAZ>
          <StyledIconTriZA onClick={() => tri('startDate', 'ZA')}></StyledIconTriZA>
        </StyledIconWrapper>
      </StyledCell>

      <StyledCell style={{ flex: 3 }}>
        {department}
        <StyledIconWrapper>
          <StyledIconTriAZ onClick={() => tri('department', 'AZ')}></StyledIconTriAZ>
          <StyledIconTriZA onClick={() => tri('department', 'ZA')}></StyledIconTriZA>
        </StyledIconWrapper>
      </StyledCell>

      <StyledCell style={{ flex: 2 }}>
        {dateOfBirth}
        <StyledIconWrapper>
          <StyledIconTriAZ onClick={() => tri('dateOfBirth', 'AZ')}></StyledIconTriAZ>
          <StyledIconTriZA onClick={() => tri('dateOfBirth', 'ZA')}></StyledIconTriZA>
        </StyledIconWrapper>
      </StyledCell>

      <StyledCell style={{ flex: 3 }}>
        {street}
        <StyledIconWrapper>
          <StyledIconTriAZ onClick={() => tri('street', 'AZ')}></StyledIconTriAZ>
          <StyledIconTriZA onClick={() => tri('street', 'ZA')}></StyledIconTriZA>
        </StyledIconWrapper>
      </StyledCell>

      <StyledCell style={{ flex: 3 }}>
        {city}
        <StyledIconWrapper>
          <StyledIconTriAZ onClick={() => tri('city', 'AZ')}></StyledIconTriAZ>
          <StyledIconTriZA onClick={() => tri('city', 'ZA')}></StyledIconTriZA>
        </StyledIconWrapper>
      </StyledCell>

      <StyledCell style={{ flex: 1 }}>
        {state}
        <StyledIconWrapper>
          <StyledIconTriAZ onClick={() => tri('state', 'AZ')}></StyledIconTriAZ>
          <StyledIconTriZA onClick={() => tri('state', 'ZA')}></StyledIconTriZA>
        </StyledIconWrapper>
      </StyledCell>

      <StyledCell style={{ flex: 2 }}>
        {zipCode}
        <StyledIconWrapper>
          <StyledIconTriAZ onClick={() => tri('zipCode', 'AZ')}></StyledIconTriAZ>
          <StyledIconTriZA onClick={() => tri('zipCode', 'ZA')}></StyledIconTriZA>
        </StyledIconWrapper>
      </StyledCell>

    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  border-bottom: 1px ${colors.fontDark} solid;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  height: 35px;
  background-color: ${colors.defaultBg};
  font-size:15px
`
const StyledCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledIconWrapper = styled.div`
  display:flex;
  margin-left:10px;
`

const StyledIconTriZA = styled.div`
  width: 8px;
  height: 8px;
  border: 4px solid ${colors.defaultBg};
  border-top: 0px solid ${colors.defaultBg};
  border-bottom: 8px solid ${colors.greyMedium};
  box-sizing: border-box;
  margin-left: -8px;
`

const StyledIconTriAZ = styled.div`
  width: 8px;
  height: 8px;
  border: 4px solid ${colors.defaultBg};
  border-bottom: 0px solid ${colors.defaultBg};
  border-top: 8px solid ${colors.greyMedium};
  box-sizing: border-box;
  margin-top: 10px;
`