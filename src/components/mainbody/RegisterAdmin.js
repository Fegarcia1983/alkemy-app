import React from 'react'
import './register.css'
import { deleteRegister } from '../../helpers/deleteRegister'

export const RegisterAdmin = ({in_out, date, category_id, concept, mount, id, handler}) => {
   return (
      <tr>
         <td>{date}</td>
         <td>{concept}</td>
         <td className={`fg-${in_out}`}>{in_out}</td>
         <td>{mount}</td>
         <td>{category_id}</td>
         <td><button onClick={() => {deleteRegister(id); handler('NO', 'NO', 'NO', 'NO', 'NO', 'NO')}} >Borrar</button></td>
      </tr>
   )
}