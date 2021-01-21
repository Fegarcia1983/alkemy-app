export const updateFormRegister = async(id) => {

   const url = `http://localhost:3000/api/registers/${id}`;

   const fetchResponse  = await fetch( url );

   const  response  = await fetchResponse.json();

   return response;

}