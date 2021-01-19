export const fetchcategories = async() => {

   const url = `http://localhost:3000/api/categories`;

   const fetchResponse  = await fetch( url );

   const  { data }  = await fetchResponse.json();

   return data;

}