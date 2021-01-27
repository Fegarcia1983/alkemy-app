export const fetchUpdateRegister = async(e, {id}) => {

   e.preventDefault();

   console.log(e.target.parentNode[3]);
   console.log(id);

   let bodyObject = {id}

   for (let i = 0; i < e.target.parentNode.length-2; i++) {
      if (e.target.parentNode[i].value) {
         //console.log(`Console.log de true ${e.target.parentNode[i].value}`);
         bodyObject = {
            ...bodyObject,
            [e.target.parentNode[i].name]: e.target.parentNode[i].value
         }
      }
   }
   for (let i = 0; i < e.target.parentNode[3].length; i++) {
      if (e.target.parentNode[3][i].selected) {
         bodyObject = {
            ...bodyObject,
            category_id: e.target.parentNode[3][i].value
         }
      }
   }

   const url = `http://localhost:3000/api/registers/${id}`;
   const method = `PUT`;

   const fetchResponse  = await fetch( url, {
      method: method ,
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body:JSON.stringify(bodyObject)
   });

   const  response  = await fetchResponse.json();
   window.location.assign("/")
   return response;

}