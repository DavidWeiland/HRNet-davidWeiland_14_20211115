import styled from "styled-components"
import colors from "../../Utils/Styles/colors"

export default function SearchComponent({ type, id, label, value, onChange }) {

  return (
    <Container>
      <Label htmlFor={id}>
        {label}
      </Label>
      <Input type={type} id={id} value={value} onChange={onChange} />
    </Container>
  )
}

const Container = styled.div`
  width:30%;
  display:flex;
  flex-flow:row nowrap;
  justify-content:flex-end;
  align-items:center;
`
const Label = styled.label`
  font-size: 15px;
  font-weight: 400;
`
const Input = styled.input`
  margin:5px;
  padding: 1%;
  border-radius: 5px;
  border: 1px;
  box-shadow: ${colors.boxShadow};
  font-size: 12px;
  font-weight: 400;
  width: 70%;
`