export const createRegister = async(id) => {

   id.preventDefault();

   let category;

   for (let i = 0; i < id.target.form.category.length; i++) {
      if (id.target.form.category[i].selected) {
         category = id.target.form.category[i].value
      }
   }

   const bodyJson = {
      in_out: (id.target.form.egreso.checked)?0:1,
      date: id.target.form.date.value,
      concept: id.target.form.concept.value,
      mount: parseFloat(id.target.form.amount.value).toFixed(2),
      category_id: Number(category)
   }

   console.log(bodyJson);

   const url = `http://localhost:3000/api/registers`;
   const method = `POST`;

   const fetchResponse  = await fetch( url, {
      method: method ,
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body:JSON.stringify(bodyJson)
   });

   const  response  = await fetchResponse.json();
   window.location.assign("http://localhost:3001")
   return response;

}