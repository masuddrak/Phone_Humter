
const allPhone = async (phones) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phones}`)
    const data = await res.json()
    console.log(data)
    displayPhones(data.data)
}
const displayPhones = (phones) => {
    const card_container = document.getElementById("card_container")
    card_container.innerText=""
    phones.forEach(phone => {
        let createPhone = document.createElement("div")
        createPhone.classList=`card  bg-base-100 shadow-xl`
        createPhone.innerHTML = `
        <figure><img src="${phone.image}" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Phone Name: ${phone.phone_name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions ">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
        `
        card_container.appendChild(createPhone)
    });

}

// sarch function

function searchPhones(){
    const searchText=document.getElementById("search_text")
    const searchValu=searchText.value
    allPhone(searchValu)
}

