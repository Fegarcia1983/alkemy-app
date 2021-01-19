export const fetchOnlyTotal = async() => {

   const url = `http://localhost:3000/api/registers?limit=9999999&start=0&sort=DESC`;

   const fetchResponse  = await fetch( url );

   const  { total }  = await fetchResponse.json();

   return total;

}