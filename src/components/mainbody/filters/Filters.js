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
            <h5>Movimiento</h5>
            <input type="radio" id="engreso" name="movment" onClick={()=>{handler('NO',0, '*', '*', '*', '*')}}/>
            <label htmlFor="engreso">Egreso</label>
            <input type="radio" id="ingreso" name="movment" onClick={()=>{handler('NO',1, '*','*', '*', '*')}}/>
            <label htmlFor="ingreso">Ingreso</label>
            <input type="radio" id="todos" name="movment" onClick={()=>{handler('NO','NO', '*', '*', '*', '*')}}/>
            <label htmlFor="todos">Todos</label>
            <h5>Fecha</h5>
            <label htmlFor="fromdate">Desde</label>
            <input type="date" id="fromdate" name="date" onChange={(e)=>{handler('NO', '*', e.target.value, '*', '*', '*')}}/>
            <label htmlFor="todate">Hasta</label>
            <input type="date" id="todate" name="date" onChange={(e)=>{handler('NO', '*', '*', e.target.value, '*', '*')}}/>
            <h5>Concepto</h5>
            <label htmlFor="concept">Concepto:</label>
            <input type="text" id="concept" name="concept" onChange={(e)=>{handler('NO', '*', '*', '*', e.target.value, '*')}}/>
            <h5>Categoría</h5>
            <label htmlFor="category">Categoría:</label>
            <select name="category" id="category" value="NO" onChange={(e)=>{handler('NO', '*', '*', '*', '*', e.target.value)}}>
               <option value='NO'>Todas</option>
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
