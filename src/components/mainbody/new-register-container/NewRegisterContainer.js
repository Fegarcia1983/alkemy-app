import React, {useState, useEffect} from 'react'
import { NewRegister } from '../new-register/NewRegister'
import { fetchcategories } from '../../../helpers/fetchCategories'
import './newRegisterContainer.css'

export const NewRegisterContainer = () => {

   const [categories, setCategories] = useState([])

   useEffect(() => {
      fetchcategories()
         .then(categories => {
            setCategories(categories)
         })
   }, [])


   return (
      <div className="fg-newRegisterContainer">
         < NewRegister categories={categories} />
      </div>
   )
}
