import React, {useState, useEffect} from 'react'
import { fetchcategories } from '../../../helpers/fetchCategories'

export const Filters = ({handler, total}) => {

   const [categories, setCategories] = useState([])

   useEffect(() => {
      fetchcategories()
         .then(categories => {
            setCategories(categories)
         })
   }, [])

   return (
      <div>
         <h3>Filters</h3>
         <div>
            <form>
            <h5>Type</h5>
            <input type="radio" id="engreso" name="movment" onClick={()=>{handler('NO',0, '*', '*', '*', '*')}}/>
            <label htmlFor="engreso">Out</label>
            <input type="radio" id="ingreso" name="movment" onClick={()=>{handler('NO',1, '*','*', '*', '*')}}/>
            <label htmlFor="ingreso">In</label>
            <input type="radio" id="todos" name="movment" onClick={()=>{handler('NO','NO', '*', '*', '*', '*')}}/>
            <label htmlFor="todos">All</label>
            <h5>Date</h5>
            <label htmlFor="fromdate">From:</label>
            <input type="date" id="fromdate" name="date" onChange={(e)=>{handler('NO', '*', e.target.value, '*', '*', '*')}}/>
            <label htmlFor="todate">To:</label>
            <input type="date" id="todate" name="date" onChange={(e)=>{handler('NO', '*', '*', e.target.value, '*', '*')}}/>
            <h5>More</h5>
            <label htmlFor="concept">Concept:</label>
            <input type="text" id="concept" name="concept" onChange={(e)=>{handler('NO', '*', '*', '*', e.target.value, '*')}}/>
            <br/>
            <label htmlFor="category">Category:</label>
            <select name="category" id="category" value="NO" onChange={(e)=>{handler('NO', '*', '*', '*', '*', e.target.value)}}>
               <option value='NO'>All</option>
               {
                  categories.map(cat => (
                     <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))
               }
            </select>
            </form>
            <button onClick={()=>{handler('NO','NO', 'NO', 'NO', 'NO', 'NO')}}>Claer Filters</button>
            <div className="fg-total">
               <h4>Total:</h4>
               <h3>{total}</h3>
            </div>
         </div>
      </div>
   )
}
