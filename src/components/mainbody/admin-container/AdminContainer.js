import React, {useState, useEffect} from 'react'
import { RegistersFiltered } from '../registers-filtered/RegistersFiltered'
import { fetchRegistersFiltered } from '../../../helpers/fetchRegistersFiltered'
import { Filters } from '../filters/Filters'

export const AdminContainer = ({totalHandler}) => {

   const [registers, setRegisters] = useState({
      status: {},
      total: 0,
      data: []
   })

   const [filters, setFilters] = useState({
      sort: undefined,
      inout: undefined,
      fromdate: undefined,
      todate: undefined,
      concept: undefined,
      category: undefined
   })

   useEffect(() => {
      fetchRegistersFiltered(filters.sort, filters.inout, filters.fromdate, filters.todate, filters.concept, filters.category)
         .then( reg => {
            setRegisters({
               status: reg[0],
               total: reg[1],
               data: reg.slice(2)
            });
         })
   },[filters])

   const filterHandler = (sort, inout, fromdate, todate, concept, category) => {

      setFilters({
         sort: sort,
         inout: (inout==='*')?filters.inout:inout,
         fromdate: (fromdate==='*')?filters.fromdate:fromdate,
         todate: (todate==='*')?filters.todate:todate,
         concept: (concept==='*')?filters.concept:concept,
         category: (category==='*')?filters.category:category
      })

   }

   return (
      <div>
         < Filters handler={filterHandler} total={registers.total} />
         < RegistersFiltered registers={registers} filterHandler={filterHandler} totalHandler={totalHandler}/>
      </div>
   )
}
