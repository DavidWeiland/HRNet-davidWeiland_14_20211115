import React, { useRef, useEffect } from 'react'
import $ from 'jquery'
import 'jquery-ui/ui/widgets/selectmenu'
import 'jquery-ui/themes/base/all.css'


export default function SelectMenu({children, onChange}) {
  const selectRef = useRef()
  const selectedRef = useRef()

  useEffect(() => {
    if (selectRef.current) {
      const selection = $(selectRef.current).selectmenu({
        change: (event, ui) => {
          onChange(ui.item.value)
        }
      })
      selectedRef.current = selection
      
      return () => selection.selectmenu('destroy')
    }
  },[selectRef, onChange])

  return (
      <div>
      <select ref={selectRef}>
        {children}
      </select>
      </div>
    )
}