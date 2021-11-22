import { useHistory } from 'react-router-dom'
import './css/DW-Modal.css'


export default function Modal({ children, config}) {

  const { backgroundColor, borderRadius, width, height, justifyContent, alignItems, fontWeight, color, fontSize } = config
  const DWMWTstyle = {
    backgroundColor: backgroundColor,
    borderRadius:borderRadius,
    width : width,
    height : height,
    justifyContent: justifyContent,
    alignItems: alignItems,
    fontWeight: fontWeight,
    color: color,
    fontSize: fontSize
  }
  
  const history=useHistory()
  const handleClick = (e) => {
    history.push('/currentEmployees')
    /* prévoir : store.dispach(modale:false) à la place de useHistory */
  }

  return (
    <div className='DW-Modale-Wrapper'>
      <div className='DW-Modale-Wrapper--Text' style={DWMWTstyle}>
        {children}
        <div className='DW-Modale-Wrapper--Close' onClick={handleClick}>
        </div>
      </div>
    </div>
  )
}
