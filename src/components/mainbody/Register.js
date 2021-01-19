import React from 'react'
import './register.css'

export const Register = ({in_out, date, category_id, concept, mount}) => {
   return (
      <tr>
         <td>{date}</td>
         <td>{concept}</td>
         <td className={`fg-${in_out}`}>{in_out}</td>
         <td>{mount}</td>
         <td>{category_id}</td>
      </tr>
   )
}
