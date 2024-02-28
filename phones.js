
const allPhone = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    const data = await res.json()
    displayPhones(data.data)
}
const displayPhones = (phones) => {
    const allphones = phones
    console.log(allphones)
    const card_container = document.getElementById("card_container")
    console.log(card_container)
    phones.forEach(phone => {
        console.log(phone)
        let createPhone = document.createElement("div")
        // div.classList(`card w-96 bg-base-100 shadow-xl`)
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
allPhone()