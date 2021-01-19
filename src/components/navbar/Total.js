import React, { useEffect, useState } from 'react'
import './total.css'
import {fetchOnlyTotal} from '../../helpers/fetchOnlyTotal'


export const Total = () => {

   const [total, setTotal] = useState(0)

   useEffect(() => {
      fetchOnlyTotal()
         .then( mount => {
            setTotal(mount);
         })
   },[])

   return (
      <div className="fg-totalNavBar">
      <h3>Balance:</h3>
      <h4>{total}</h4>
      </div>
   )
}
