const divCards = document.getElementsByClassName('cards')[0]
const showMore = document.getElementById('show')


let countPage = 2

ajaxRequest('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1')
showMore.addEventListener('click', nextPageProducts)


function ajaxRequest(url) {

    fetch(url)
    .then(function(res) {
        return res.json()
    })
    .then(function(res) {
        createCard(res.products)
    })
}


function createCard(products){
    products.forEach(product => {
        let card = document.createElement('div')
        card.classList.add('card')

        const img = document.createElement('img')
        img.src = product.image
        card.appendChild(img)

        const name = document.createElement('h4')
        name.innerText = product.name
        card.appendChild(name)

        const desc = document.createElement('p')
        desc.innerText = product.description
        card.appendChild(desc)

        const oldPrice = document.createElement('p')
        oldPrice.innerText = `De: R$${product.oldPrice},00`
        card.appendChild(oldPrice)

        const newPrice = document.createElement('h4')
        newPrice.innerText = `Por: R$${product.price},00`
        card.appendChild(newPrice)

        const parcel = document.createElement('p')
        parcel.innerText = `ou ${product.installments.count}x de R$${product.installments.value}`
        card.appendChild(parcel)

        const button = document.createElement('button')
        button.innerText = 'Comprar'
        card.appendChild(button)

        divCards.appendChild(card)
        

    })
}

function nextPageProducts(e) {
    e.preventDefault()

    ajaxRequest(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${countPage}`)

    countPage++
}



