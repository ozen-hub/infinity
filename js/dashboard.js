initializeItems = () => {
    let alacarta = [];
    alacarta.push({
        id:'1001',
        name: 'Mc Chicken',
        image: 'https://w7.pngwing.com/pngs/201/77/png-transparent-hamburger-veggie-burger-take-out-fast-food-kebab-delicious-beef-burger-burger-with-lettuce-tomato-and-cheese-food-beef-recipe.png',
        price: 500
    });
    alacarta.push({
        id:'1002',
        name: 'Big Mac (Chicken)',
        image: 'https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4135.png',
        price: 450
    });
    alacarta.push({
        id:'1003',
        name: 'Cheese Burger',
        image: 'https://www.pngall.com/wp-content/uploads/2016/05/Burger-Free-Download-PNG.png',
        price: 700
    });
    alacarta.push({
        id:'1004',
        name: '4ps Nuggets',
        image: 'https://www.mcdelivery.lk/lk/static/1665910229621/assets/94/products/2004.png?',
        price: 280
    });
    alacarta.push({
        id:'1005',
        name: '9ps Nuggets',
        image: 'https://www.godairyfree.org/wp-content/uploads/2020/01/mcdonalds4.jpg',
        price: 900
    });
    alacarta.push({
        id:'1006',
        name: '2 ps Wings',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/iconic/desktop/t-mcdonalds-Big-Mac.jpg',
        price: 420
    });
    alacarta.push({
        id:'1007',
        name: 'Chicken Wrap',
        image: 'https://i.insider.com/5fda25da6524f1001979254c?width=700',
        price: 820
    });
    alacarta.push({
        id:'1008',
        name: 'Beef Burger',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mcdonalds-big-mac-is-seen-in-hong-kong-hong-kong-on-august-news-photo-1573842906.jpg?crop=0.862xw:0.575xh;0,0.425xh&resize=640:*',
        price: 900
    });
    alacarta.push({
        id:'1009',
        name: 'Big Mac (Beef)',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mcspicy-mcdonalds-menu-new-1650538584.jpg',
        price: 450
    });
    alacarta.push({
        id:'1010',
        name: 'Spicy Bun',
        image: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/71c5d7d9-1b0f-4a15-b5cd-e037262a7b6e-mcdonalds-hash-brown-mcmuffin.jpg',
        price: 250
    });
    localStorage.setItem('alacarta', JSON.stringify(alacarta));

    //================
    let item ='';
    alacarta.forEach(resp=>{
        item += `
    <div onclick="placeOrder(${resp.id})" class="item">
                        <div class="item-inner" style="background-color: rgb(${getColor()})">
                            <div class="name-price">
                                <p class="item-name">${resp.name}</p>
                                <p class="item-price">${resp.price}</p>
                            </div>
                            <img src="${resp.image}"
                                 alt="${resp.name}">
                        </div>
                    </div>
    `;
    });
    $('.area').html(item);
};

const getColor=()=>{
    return getRand()+','+getRand()+','+getRand();
}
getRand=()=>{
    return Math.floor(Math.random() * (255 - 0)) + 0;
}

//=================
let itemsForOrder = [];
//=================

let temp = JSON.parse(localStorage.getItem('users'));
console.log(temp)
if (temp === null) {
    window.location.replace('index.html');
}


const placeOrder = (item) => {
    itemsForOrder.push(item);
    let row = '';
    itemsForOrder.forEach(data => {
        row += `<li>${data}</li>`
        $('#items-list').html(row);
    });
    console.log(itemsForOrder)
}