export const fetchRegistersFiltered = async(sort, inout, fromdate, todate, concept, category) => {

   const url = `http://localhost:3000/api/registers/registers?${(sort === undefined)?`sort=NO`:`sort=${sort}`}&${(inout === undefined)?`inout=NO`:`inout=${inout}`}&${(fromdate === undefined)?`fromdate=NO`:`fromdate=${fromdate}`}&${(todate === undefined)?`todate=NO`:`todate=${todate}`}&${(concept === undefined)?`concept=NO`:`concept=${concept}`}&${(category === undefined)?`category=NO`:`category=${category}`}`;

   const fetchResponse  = await fetch( url );

   const  { meta, data: {rows:data}, total }  = await fetchResponse.json();

   const response = [meta, total, ...data.map( reg => {
      return {
         id: reg.id,
         in_out: (reg.in_out)?'ingreso':'egreso',
         date: reg.date.substring(0, reg.date.indexOf("T")),
         category_id: reg.categories.name,
         concept: reg.concept,
         mount: Number(reg.mount).toFixed(2)
      }
   })]

   return response;

}