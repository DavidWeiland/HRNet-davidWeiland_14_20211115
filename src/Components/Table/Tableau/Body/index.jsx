import styled from 'styled-components'
import colors  from '../../../../Utils/Styles/colors'

export const Row = ({ employee, firstName, lastName, startDate, department, dateOfBirth, street, city, state, zipCode }) => {
  
  const bgColor = employee % 2 === 1 ? `${colors.defaultBg}` : `${colors.BgRow}`
  
  return (
    <StyledContainer style={{backgroundColor: `${bgColor}`}}>
      <StyledCell style={{ flex: 2 }}>{firstName}</StyledCell>
      <StyledCell style={{ flex: 3 }}>{lastName}</StyledCell>
      <StyledCell style={{ flex: 2 }}>{startDate}</StyledCell>
      <StyledCell style={{ flex: 3 }}>{department}</StyledCell>
      <StyledCell style={{ flex: 2 }}>{dateOfBirth}</StyledCell>
      <StyledCell style={{ flex: 3 }}>{street}</StyledCell>
      <StyledCell style={{ flex: 3 }}>{city}</StyledCell>
      <StyledCell style={{ flex: 1 }}>{state}</StyledCell>
      <StyledCell style={{ flex: 2 }}>{zipCode}</StyledCell>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  border-bottom: 1px ${colors.greyMedium} solid;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  height: 35px;
`
const StyledCell = styled.div`
  display: flex;
  justify-content : flex-start;
  align-items: center;
  margin-left: 10px;
  font-size:14px
`

