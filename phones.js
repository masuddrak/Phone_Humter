
const allPhone = async (phones="13",isAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phones}`)
    const data = await res.json()
    displayPhones(data.data,isAll)
}
const displayPhones = (phones,isAll) => {
    console.log("hello",isAll)
   
    // show all phone btn
    const showAllPhoneContainer = document.getElementById("show_all_phone_container")
    if(phones.length>12 && !isAll){
        showAllPhoneContainer.classList.remove("hidden")
    }
    else{
        showAllPhoneContainer.classList.add("hidden")
    }
    // some phones show
    
    if(!isAll){
        phones = phones.slice(0, 12)
    }
    const card_container = document.getElementById("card_container")
    card_container.innerText = ""
    
    phones.forEach(phone => {
        let createPhone = document.createElement("div")
        createPhone.classList = `card  bg-base-100 shadow-xl`
        createPhone.innerHTML = `
        <figure><img src="${phone.image}" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Phone Name: ${phone.phone_name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions ">
                        <button onclick="detailsHandlar('${phone.slug}')" class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
        `
        card_container.appendChild(createPhone)
    });
    spinerDisplay(false)

}

// sarch function
function searchPhones(isAll) {
    spinerDisplay(true)
    const searchText = document.getElementById("search_text")
    const searchValu = searchText.value
    allPhone(searchValu,isAll)
}
// spiner handelar
const spinerDisplay=(isLoading)=>{
    const spiner=document.getElementById("spiner")
    if(isLoading){
        spiner.classList.remove("hidden")
    }
    else{
        spiner.classList.add("hidden")
    }
}

// hadel show all
const handelShowAll=()=>{
    searchPhones(true)
}
// show details
const detailsHandlar=async(id)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json()
    showModal(data.data)
}
const showModal=(phone)=>{
    console.log(phone)
    document.getElementById("phone_image").src=phone.image
    const phoneName=document.getElementById("phone_name")
    phoneName.innerText=`Name: ${phone.name}`
    document.getElementById("phon_brand").innerText=`Brand: ${phone.brand}`
    my_modal_5.showModal()
}
allPhone()