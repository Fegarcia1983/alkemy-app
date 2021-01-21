import React, {useState, useEffect} from 'react'
import { fetchcategories } from '../../../helpers/fetchCategories'
import { createRegister } from '../../../helpers/createRegister'

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
         <h4>NEW REGISTER</h4>
         <label htmlFor="concept">Concept:</label>
         <input type="text" id="concept" name="concept" required/>
         <h5>Type</h5>
         <input type="radio" id="egreso" name="movment"/>
         <label htmlFor="egreso">OUT</label>
         <input type="radio" id="ingreso" name="movment"/>
         <label htmlFor="ingreso">IN</label>
         <br/>
         <label htmlFor="date">Date:</label>
         <input type="date" id="date" name="date" required/>
         <br/>
         <label htmlFor="amount">$:</label>
         <input type="number" id="amount" name="amount" required/>
         <h5>Category</h5>
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
