import styled from 'styled-components'
import colors from '../../../../Utils/Styles/colors'

export const Footer = ({
  indexMin,
  currentLength,
  currentPage,
  entriesPerPage,
  setIndexMin,
  setCurrentPage,
}) => {

  const indexMax =
    indexMin + entriesPerPage - 1 < currentLength
      ? indexMin + entriesPerPage - 1
      : currentLength

  const previousFunction = () => {
    if (currentPage > 1) {
      setCurrentPage(c => c - 1)
      setIndexMin(indexMin - entriesPerPage)
    }
    return
  }

  const nextFunction = () => {
    const nbPagesMax = Math.ceil(currentLength / entriesPerPage)
    if (currentPage < nbPagesMax) {
      return (
        setCurrentPage(c => c + 1),
        setIndexMin(indexMin + entriesPerPage)
      )
    }
    return
  }

  return (
    <MainContainer>
      <TableInfoContainer>
        <span>
          Showing {indexMin} to{' '}
          {currentLength < entriesPerPage ? currentLength : indexMax} of{' '}
          {currentLength} entries
        </span>
      </TableInfoContainer>
      <TableInfoContainer>
        <div onClick={() => previousFunction()}>Previous</div>
        <NumberPage>
          {currentPage}
        </NumberPage>
        <div onClick={() => nextFunction()}>Next</div>
      </TableInfoContainer>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-top: -1px;
  border-top: 1px ${colors.fontDark} solid
`
const TableInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const NumberPage = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  border: 1px solid ${colors.grey};
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  background: linear-gradient(${colors.greyLight}, ${colors.greyMedium});
`