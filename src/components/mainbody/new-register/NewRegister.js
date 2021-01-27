import React from 'react'
import { createRegister } from '../../../helpers/createRegister'
import './newRegister.css'

export const NewRegister = ( { categories }) => {

   return (
      <form className="form-group fg-newRegister">
         <h3>NEW REGISTER</h3>
         <label className="form-label" htmlFor="concept">Concept:</label>
         <input className="form-control" type="text" id="concept" name="concept" required/>
         <h5>Type</h5>
         <div className="fg-checkNew">
            <div class="form-check">
            <input className="form-check-input" type="radio" id="egreso" name="movment"/>
            <label className="form-check-label" htmlFor="egreso">OUT</label>
            </div>
            <div class="form-check">
            <input className="form-check-input" type="radio" id="ingreso" name="movment"/>
            <label className="form-check-label" htmlFor="ingreso">IN</label>
            </div>
         </div>
         <label className="form-label" htmlFor="date">Date:</label>
         <input className="form-control" type="date" id="date" name="date" required/>
         <label className="form-label" htmlFor="amount">Amount$:</label>
         <input className="form-control" type="number" id="amount" name="amount" required/>
         <h5>Category</h5>
         <select className="form-select" name="category" id="category">
            {
               categories.map(cat => (
                  <option key={cat.id} value={cat.id} id={cat.name}>{cat.name}</option>
               ))
            }
         </select>
         <br/>
         <button className="btn btn-success fg-createButton"type="submit" onClick={(e) => createRegister(e)}>Create !</button>
      </form>
   )
}
