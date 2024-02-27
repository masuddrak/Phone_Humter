
const allPhone = async () => {
   const res= await fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
   const data=await res.json()
   displayPhones(data)
}
const displayPhones=(data)=>{
    const phones=data.data
    phones.forEach(phone => {
        console.log(phone.phone_name)
    });
  
}
allPhone()