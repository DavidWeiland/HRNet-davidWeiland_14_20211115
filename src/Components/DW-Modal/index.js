import './css/DW-Modal.css'


export default function Modal({ state, config, close, children}) {

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
    fontSize: fontSize,
  }

  return (
    <div className='DW-Modale-Wrapper' style={{display: state ? "flex" : "none"}}>
      <div className='DW-Modale-Wrapper--Text' style={DWMWTstyle}>
        {children}
        <div className='DW-Modale-Wrapper--Close' onClick={close}>
        </div>
      </div>
    </div>
  )
}
