import React, { useRef, useEffect } from 'react'

import $ from 'jquery'
import 'jquery-ui/ui/widgets/selectmenu'
import 'jquery-ui/themes/base/all.css'


export default function SelectMenu({ children, onChange }) {
  //refers to input (like id)
  const selectRef = useRef()
  //refers to selected element
  const selectedRef = useRef()

  //using a useEffect to generate render of component
  useEffect(() => {
    if (selectRef.current) {
      const selection = $(selectRef.current).selectmenu({
        change: (event, ui) => {
          onChange(ui.item.value)
        },
      })
      selectedRef.current = selection
      return () => selection.selectmenu('destroy')
    }
  }, [selectRef, onChange])

  return (
    <div>
      <select ref={selectRef}>{children}</select>
    </div>
  )
}