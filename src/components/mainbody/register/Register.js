import React from 'react'
import './register.css'

export const Register = ({in_out, date, category_id, concept, amount}) => {
   return (
      <tr>
         <td>{date}</td>
         <td>{concept}</td>
         <td className={`fg-${in_out}`}>{in_out}</td>
         <td>{amount}</td>
         <td>{category_id}</td>
      </tr>
   )
}
