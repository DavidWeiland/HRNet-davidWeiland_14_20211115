import React from 'react'
import './style.css'

const Modal=({ state, close, children})=> {
// Dialog box display props children, open and close with props
  return (
    <div className='DW-Modal-Wrapper' style={{display: state ? "flex" : "none"}}>
      <div className='DW-Modal-Wrapper--Text'>
        {children}
        <div className='DW-Modal-Wrapper--Close' onClick={close}>
        </div>
      </div>
    </div>
  )
}

export default Modal