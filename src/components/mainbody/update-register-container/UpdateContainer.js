import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchcategories } from '../../../helpers/fetchCategories'
import { updateFormRegister } from '../../../helpers/updateFormRegister'
import { CardRegister } from '../card-register/CardRegister'
import { UpdateRegister } from '../update-register/UpdateRegister'
import UpdateIco from '../../../assets/images/update.png'
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
         .then( reg => {
            setUpdateRegister( {
               id: reg.data.id,
               in_out: (reg.data.in_out)?'ingreso':'egreso',
               date: reg.data.date.substring(0, reg.data.date.indexOf("T")),
               category: reg.data.categories.name,
               concept: reg.data.concept,
               amount: Number(reg.data.amount).toFixed(2)
             } )
         })
   }, [ id ])

   return (
      <div className="fg-updateContainer">
         <img className="fg-updateIco" src={UpdateIco} alt='update_image'/>
         < UpdateRegister categories={ categories } register={ updateRegister } />
         < CardRegister register={ updateRegister } />
      </div>
   )
}
