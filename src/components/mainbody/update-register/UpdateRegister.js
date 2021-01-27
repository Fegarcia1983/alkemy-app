import React from 'react'
import { useParams } from 'react-router-dom'
import { fetchUpdateRegister } from '../../../helpers/fetchUpdateRegister'
import './updateRegister.css'

export const UpdateRegister = ({categories}) => {

   const id = useParams()

   return (
      <form className="form-group fg-updater">
         <h3>UPDATE PARAMETERS</h3>
         <label className="form-label" htmlFor="concept">Concept:</label>
         <input className="form-control" type="text" id="concept" name="concept" required/>
         <br/>
         <label className="form-label" htmlFor="date">Date:</label>
         <input className="form-control" type="date" id="date" name="date" required/>
         <br/>
         <label className="form-label" htmlFor="amount">Amount $:</label>
         <input className="form-control" type="number" id="amount" name="amount" required/>
         <h5>Categoría</h5>
         <select className="form-select" name="category" id="category">
            {
               categories.map(cat => (
                  <option key={ cat.id } value={ cat.id } id={ cat.name }>{ cat.name }</option>
               ))
            }
         </select>
         <br/>
         <button className="btn btn-success fg-updateButton" type="submit" onClick={(e) => {fetchUpdateRegister(e, id)}}>Update !</button>
      </form>
   )
}