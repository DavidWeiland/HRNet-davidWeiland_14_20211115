
// Generic 404 page

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../../Utils/Styles/App.css';


const Wrapper = styled.div`
margin-top:100px;
text-align:center;
font-size : 20px;
fontWeight : bold;
color : #333333;
`

const Title = styled.h1`
margin-top:200px;
margin-bottom:0;
font-size : 200px;
`

const Subtitle = styled.h2`
margin-top:0;
font-size : 30px;
`
export default function Error() {
  return (
    <div>
      <Wrapper>
        <Link to="/">Returns to Home Page</Link>
      </Wrapper>
      <Wrapper>
        <Title>404</Title>
        <Subtitle>Oups, la page que vous avez demandé n'existe pas !</Subtitle>
      </Wrapper>
    </div>
  )
}