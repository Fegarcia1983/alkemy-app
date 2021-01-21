import React from 'react'
import './total.css'



export const Total = ({total}) => {

   return (
      <div className="fg-totalNavBar">
      <h3>Balance:</h3>
      <h4>{total}</h4>
      </div>
   )
}
