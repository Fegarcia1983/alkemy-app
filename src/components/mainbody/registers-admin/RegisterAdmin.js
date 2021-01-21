import React from 'react'
import { Link } from 'react-router-dom'
import './registerAdmin.css'
import { deleteRegister } from '../../../helpers/deleteRegister'


export const RegisterAdmin = ({in_out, date, category_id, concept, amount, id, handler, totalHandler}) => {
   return (
      <tr>
         <td>{date}</td>
         <td>{concept}</td>
         <td className={`fg-${in_out}`}>{in_out}</td>
         <td>{amount}</td>
         <td>{category_id}</td>
         <td><button onClick={() => {deleteRegister(id, handler, totalHandler)}} >Borrar</button></td>
         <td>{
            <Link to={`/updateregister/${id}`}>
               <button>Modificar</button>
            </Link>
            }
         </td>
      </tr>
   )
}