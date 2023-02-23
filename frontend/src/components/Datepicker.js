import React, { useState } from 'react'
import './datepicker.css'

function Datepicker() {
  const [date,setDate] = useState();

  return (
    <div className='datepicker'>
      <input type="date" onChange={e=>setDate(e.target.value)} />
    </div>
  )
}

export default Datepicker