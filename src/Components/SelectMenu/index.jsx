import { states, department } from '../../Data'
import SelectOptions from '../SelectOptions'
import styled from 'styled-components'
import colors from '../../Utils/Styles/colors'

export default function SelectMenu ({id, label, onChange}) {

  const options = id === 'state' ? states : department
  
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <Select name={id} id={id} onChange={onChange}>
        {options.map(({ index, name, abbreviation }) => (
          <SelectOptions
            key={`${name}-${index}`}
            value={abbreviation ?? name}
            text={name}
          />
        ))}
      </Select>
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
`
const Label = styled.label`
  font-size: 15px;
  font-weight: 400;
  display: block;
  margin-top: 15px;
  margin-bottom: 0;
`
const Select = styled.select`
  padding: 1%;
  border-radius: 5px;
  border: 1px;
  box-shadow: ${colors.boxShadow};
  font-size: 12px;
  font-weight: 400;
  width: 100%;
`