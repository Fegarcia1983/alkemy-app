export const fetchRegisters = async(lim, start, sort) => {

   const url = `http://localhost:3000/api/registers?${(lim === undefined)?`limit=NO`:`limit=${lim}`}&${(start === undefined)?`start=NO`:`start=${start}`}&${(sort === undefined)?`sort=NO`:`sort=${sort}`}`;

   const fetchResponse  = await fetch( url );

   const  { meta, data: {rows:data}, total }  = await fetchResponse.json();

   const response = [meta, total, ...data.map( reg => {
      return {
         id: reg.id,
         in_out: (reg.in_out)?'ingreso':'egreso',
         date: reg.date.substring(0, reg.date.indexOf("T")),
         category_id: reg.categories.name,
         concept: reg.concept,
         amount: Number(reg.amount).toFixed(2)
      }
   })]

   return response;

}