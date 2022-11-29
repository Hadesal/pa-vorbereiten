const products = [
    {
        id: 1,
        name: "Milk",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg?quality=90&resize=960,872",
        price: "100"
    },
    {
        id: 2,
        name: "Bread",
        image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0375FC32-2896-40AF-9ACD-6E904EC7116E/Derivates/4EB8635B-A00A-4E88-9A28-E3C9BB6BEC90.jpg",
        price: "80"
    },
    {
        id: 3,
        name: "Cheese",
        image: "https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthiest-cheese-1296x728-swiss.jpg",
        price: "110"
    },
    {
        id: 4,
        name: "Tomatoes",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg",
        price: "71"
    },
    {
        id: 5,
        name: "Pizza",
        image: "https://images.trenta.ro/Products/Original/Quattro_Stagioni_Amestecata_-_Meniu-3691.jpg",
        price: "176"
    },
    {
        id: 6,
        name: "Flour",
        image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/FE86A953-CEB2-40D1-9A5B-5A05C41AA435/Derivates/FE1D950F-23FB-4503-9371-79CAC8BEFA57.jpg",
        price: "96"
    }
]



function addItemToCart(clickEvent) {
    clickEvent.target.disabled = true;
    // let array = clickEvent.target.innerText.split(" ");
    // let totalCost = parseInt(total.innerText);
    // let productValue = parseInt(array.pop());
    
    // total.innerText = totalCost + productValue;
    // checkOverBudget()
}

// function checkOverBudget() {
//     if(parseInt(total.innerText) > parseInt(maxSum.value)){
//         total.classList.add('over-budget');
//         total.style.color = 'red';
//     } else {
//         total.classList.remove('over-budget');
//         total.style.color = 'black';
//     }
// }

// maxSum.addEventListener('input', checkOverBudget);



const container = document.getElementsByClassName("products")[0];
for (let i=0; i<products.length; i++) {
    const image = document.createElement('img');
    image.src = products[i].image;

    const button = document.createElement('button');
    button.id = `buy${products[i].id}`
    button.classList.add('buy');
    button.innerText = `Add to Cart: ${products[i].price}`;
    button.addEventListener('click', addItemToCart)

    const price = document.createElement('p');
    price.classList.add('name');
    price.innerText = products[i].name;

    const item = document.createElement('div');
    item.classList.add('item');
    item.appendChild(image);
    item.appendChild(price);
    item.appendChild(button);

    container.append(item);
}

