export const deleteRegister = async(id) => {

   const url = `http://localhost:3000/api/registers/${id}`;
   const method = `DELETE`;

   const fetchResponse  = await fetch( url, { method: method } );

   const  response  = await fetchResponse.json();

   return response;

}