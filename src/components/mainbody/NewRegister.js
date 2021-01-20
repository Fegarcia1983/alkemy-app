import React, {useState, useEffect} from 'react'
import { fetchcategories } from '../../helpers/fetchCategories'
import { createRegister } from '../../helpers/createRegister'

export const NewRegister = () => {

   const [categories, setCategories] = useState([])

   useEffect(() => {
      fetchcategories()
         .then(categories => {
            setCategories(categories)
         })
   }, [])

   return (
      <form>
         <h5>Concepto</h5>
         <label htmlFor="concept">Concepto:</label>
         <input type="text" id="concept" name="concept" required/>
         <h5>Movimiento</h5>
         <input type="radio" id="egreso" name="movment"/>
         <label htmlFor="egreso">Egreso</label>
         <input type="radio" id="ingreso" name="movment"/>
         <label htmlFor="ingreso">Ingreso</label>
         <h5>Fecha</h5>
         <label htmlFor="date">Fecha</label>
         <input type="date" id="date" name="date" required/>
         <h5>Importe</h5>
         <label htmlFor="amount">Monto</label>
         <input type="number" id="amount" name="amount" required/>
         <h5>Categoría</h5>
         <select name="category" id="category">
            {
               categories.map(cat => (
                  <option key={cat.id} value={cat.id} id={cat.name}>{cat.name}</option>
               ))
            }
         </select>
         <br/>
         <button type="submit" onClick={(e) => createRegister(e)}>Create !</button>
      </form>
   )
}
