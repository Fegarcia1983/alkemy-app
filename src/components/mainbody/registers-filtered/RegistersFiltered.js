import React  from 'react'
import './registersFiltered.css'
import { RegisterAdmin } from '../registers-admin/RegisterAdmin'

export const RegistersFiltered = ({registers, filterHandler, totalHandler}) => {

   return (
      <div className="fg-filteredRegistersContainer">
         <h2>Registers filtered:</h2>
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
                  amount={reg.amount}
                  id={reg.id}
                  handler={filterHandler}
                  totalHandler={totalHandler}
                  />
               ))
               }
            </tbody>
         </table>
      </div>
   )
}
