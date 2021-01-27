import React from 'react'

export const CardRegister = ({register}) => {

   return (
      <div>
         <h4>REGISTER TO UPDATE</h4>
         <p><strong>Concept:</strong>{ register.concept }</p>
         <p><strong>Date:</strong>{ register.date }</p>
         <p><strong>Type:</strong>{ register.in_out }</p>
         <p><strong>Amount $:</strong>{ register.amount }</p>
         <p><strong>Category:</strong>{ register.category }</p>
      </div>
   )
}
