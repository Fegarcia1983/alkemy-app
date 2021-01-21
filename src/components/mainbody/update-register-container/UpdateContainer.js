import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchcategories } from '../../../helpers/fetchCategories'
import { updateFormRegister } from '../../../helpers/updateFormRegister'
import { CardRegister } from '../card-register/CardRegister'
import { UpdateRegister } from '../update-register/UpdateRegister'
import './updateContainer.css'

export const UpdateContainer = () => {

   const [updateRegister, setUpdateRegister] = useState( {} )

   const [categories, setCategories] = useState( [] )

   useEffect(() => {
      fetchcategories()
         .then( categories => {
            setCategories( categories )
         })
   }, [])

   const { id } = useParams();

   useEffect(() => {
      updateFormRegister( id )
         .then( register => {
            setUpdateRegister( register.data )
         })
   }, [ id ])

   return (
      <div className="fg-updateContainer">
         < UpdateRegister categories={ categories } />
         < CardRegister register={ updateRegister } />
      </div>
   )
}
