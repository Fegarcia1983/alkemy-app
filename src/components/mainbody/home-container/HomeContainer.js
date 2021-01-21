import React, { useState, useEffect } from 'react'
import { fetchRegisters } from '../../../helpers/fetchRegisters'
import { Register } from '../register/Register'

export const HomeContainer = () => {

   const [registers, setRegisters] = useState({
      status: {},
      total: 0,
      data: []
   })

   useEffect(() => {
      fetchRegisters(10)
         .then( reg => {
            setRegisters({
               status: reg[0],
               total: reg[1],
               data: reg.slice(2)
            });
         })
   },[])

   return (
      <table>
         <thead>
            <tr>
               <th>Fecha</th>
               <th>Concepto</th>
               <th>Movimiento</th>
               <th>Importe</th>
               <th>Categoría</th>
            </tr>
         </thead>
         <tbody>
            {
            registers.data.map( reg => (
               < Register key={reg.id}
               in_out={reg.in_out}
               date={reg.date}
               category_id={reg.category_id}
               concept={reg.concept}
               amount={reg.amount}
               />
            ))
            }
         </tbody>
      </table>
   )
}
