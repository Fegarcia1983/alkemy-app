import React from 'react'
import './cardRegister.css'

export const CardRegister = ({register}) => {

   return (
      <div className="fg-updated">
         <h3>REGISTER TO<br/>UPDATE</h3>
         <h5>Concept:</h5>
         <p>{ register.concept }</p>
         <h5>Date:</h5>
         <p>{ register.date }</p>
         <h5>Type:</h5>
         <p>{ register.in_out }</p>
         <h5>Amount $:</h5>
         <p>{ register.amount }</p>
         <h5>Category:</h5>
         <p>{ register.category }</p>
      </div>
   )
}
