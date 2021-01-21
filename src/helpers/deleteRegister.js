export const deleteRegister = async(id, handler, totalHandler ) => {

   const url = `http://localhost:3000/api/registers/${id}`;
   const method = `DELETE`;

   const fetchResponse  = await fetch( url, { method: method } );

   handler('NO', 'NO', 'NO', 'NO', 'NO', 'NO');

   totalHandler();

   const  response  = await fetchResponse.json();

   return response;

}