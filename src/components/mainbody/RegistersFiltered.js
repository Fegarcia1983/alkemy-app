import React from 'react'
import { RegisterAdmin } from './RegisterAdmin'

export const RegistersFiltered = ({registers, filterHandler}) => {

   return (
      <table>
         <thead>
            <tr>
               <th>Fecha</th>
               <th>Concepto</th>
               <th>Movimiento</th>
               <th>Importe</th>
               <th>Categoría</th>
               <th>Acciones</th>
            </tr>
         </thead>
         <tbody>
            {
            registers.data.map( reg => (
               < RegisterAdmin key={reg.id}
               in_out={reg.in_out}
               date={reg.date}
               category_id={reg.category_id}
               concept={reg.concept}
               mount={reg.mount}
               id={reg.id}
               handler={filterHandler}
               />
            ))
            }
         </tbody>
      </table>
   )
}
