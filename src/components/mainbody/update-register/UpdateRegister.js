import React from 'react'

export const UpdateRegister = ({categories}) => {

   return (
      <form>
         <h4>UPDATE PARAMETERS</h4>
         <label htmlFor="concept">Concept:</label>
         <input type="text" id="concept" name="concept" required/>
         <br/>
         <label htmlFor="date">Date:</label>
         <input type="date" id="date" name="date" required/>
         <br/>
         <label htmlFor="amount">$:</label>
         <input type="number" id="amount" name="amount" required/>
         <h5>Categoría</h5>
         <select name="category" id="category">
            {
               categories.map(cat => (
                  <option key={ cat.id } value={ cat.id } id={ cat.name }>{ cat.name }</option>
               ))
            }
         </select>
         <br/>
         <button type="submit">Update !</button>
      </form>
   )
}