import React, {useState, useEffect} from 'react'
import { fetchcategories } from '../../../helpers/fetchCategories'
import './filters.css'

export const Filters = ({handler, total}) => {

   const [categories, setCategories] = useState([])

   useEffect(() => {
      fetchcategories()
         .then(categories => {
            setCategories(categories)
         })
   }, [])

   return (
      <div className="fg-filters">
         <h3>Filters</h3>
         <div>
            <form className="form-group">
            <h5>Type</h5>
            <div className="fg-checkFilter">
               <div class="form-check">
                  <input className="form-check-input" type="radio" id="engreso" name="movment" onClick={()=>{handler('NO',0, '*', '*', '*', '*')}}/>
                  <label className="form-check-label" htmlFor="engreso">Out</label>
               </div>
               <div class="form-check">
                  <input className="form-check-input" type="radio" id="ingreso" name="movment" onClick={()=>{handler('NO',1, '*','*', '*', '*')}}/>
                  <label className="form-check-label" htmlFor="ingreso">In</label>
               </div>
               <div class="form-check">
                  <input className="form-check-input" type="radio" id="todos" name="movment" onClick={()=>{handler('NO','NO', '*', '*', '*', '*')}}/>
                  <label className="form-check-label" htmlFor="todos">All</label>
               </div>
            </div>
            <h5>Date</h5>
            <label className="form-label" htmlFor="fromdate">From:</label>
            <input className="form-control" type="date" id="fromdate" name="date" onChange={(e)=>{handler('NO', '*', e.target.value, '*', '*', '*')}}/>
            <label className="form-label" htmlFor="todate">To:</label>
            <input className="form-control" type="date" id="todate" name="date" onChange={(e)=>{handler('NO', '*', '*', e.target.value, '*', '*')}}/>
            <h5>More</h5>
            <label className="form-label" htmlFor="concept">Concept:</label>
            <input className="form-control" type="text" id="concept" name="concept" onChange={(e)=>{handler('NO', '*', '*', '*', e.target.value, '*')}}/>
            <br/>
            <label className="form-label" htmlFor="category">Category:</label>
            <select className="form-select" name="category" id="category" value="NO" onChange={(e)=>{handler('NO', '*', '*', '*', '*', e.target.value)}}>
               <option value='NO'>All</option>
               {
                  categories.map(cat => (
                     <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))
               }
            </select>
            </form>
            <button className="btn btn-success"onClick={()=>{handler('NO','NO', 'NO', 'NO', 'NO', 'NO')}}>Claer Filters</button>
            <div className="fg-total">
               <h3>Total filtered:</h3>
               <h3>{total}</h3>
            </div>
         </div>
      </div>
   )
}
