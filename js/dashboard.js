qty = '';
//=================
let itemsForOrder = [];
let alacarta = [];
let isInAnOrder = false;
let orderId = 'D-001';
let orders = [];
//=================
initializeItems = () => {

    alacarta.push({
        id: '1001',
        name: 'Mc Chicken',
        image: 'https://w7.pngwing.com/pngs/201/77/png-transparent-hamburger-veggie-burger-take-out-fast-food-kebab-delicious-beef-burger-burger-with-lettuce-tomato-and-cheese-food-beef-recipe.png',
        price: 500
    });
    alacarta.push({
        id: '1002',
        name: 'Big Mac (Chicken)',
        image: 'https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4135.png',
        price: 450
    });
    alacarta.push({
        id: '1003',
        name: 'Cheese Burger',
        image: 'https://www.pngall.com/wp-content/uploads/2016/05/Burger-Free-Download-PNG.png',
        price: 700
    });
    alacarta.push({
        id: '1004',
        name: '4ps Nuggets',
        image: 'https://www.mcdelivery.lk/lk/static/1665910229621/assets/94/products/2004.png?',
        price: 280
    });
    alacarta.push({
        id: '1005',
        name: '9ps Nuggets',
        image: 'https://www.godairyfree.org/wp-content/uploads/2020/01/mcdonalds4.jpg',
        price: 900
    });
    alacarta.push({
        id: '1006',
        name: '2 ps Wings',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/iconic/desktop/t-mcdonalds-Big-Mac.jpg',
        price: 420
    });
    alacarta.push({
        id: '1007',
        name: 'Chicken Wrap',
        image: 'https://i.insider.com/5fda25da6524f1001979254c?width=700',
        price: 820
    });
    alacarta.push({
        id: '1008',
        name: 'Beef Burger',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mcdonalds-big-mac-is-seen-in-hong-kong-hong-kong-on-august-news-photo-1573842906.jpg?crop=0.862xw:0.575xh;0,0.425xh&resize=640:*',
        price: 900
    });
    alacarta.push({
        id: '1009',
        name: 'Big Mac (Beef)',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mcspicy-mcdonalds-menu-new-1650538584.jpg',
        price: 450
    });
    alacarta.push({
        id: '1010',
        name: 'Spicy Bun',
        image: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/71c5d7d9-1b0f-4a15-b5cd-e037262a7b6e-mcdonalds-hash-brown-mcmuffin.jpg',
        price: 250
    });
    localStorage.setItem('alacarta', JSON.stringify(alacarta));
    generateOrderId();
    initializeOrders();

    //================
    let item = '';
    alacarta.forEach(resp => {
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

let initializeOrders=()=>{
    let ordersSet=JSON.parse(localStorage.getItem('orders'));
    if (ordersSet!=null){
        orders=ordersSet;
    }
}

const getColor = () => {
    return getRand() + ',' + getRand() + ',' + getRand();
}
getRand = () => {
    return Math.floor(Math.random() * (255 - 0)) + 0;
}


let temp = JSON.parse(localStorage.getItem('users'));
console.log(temp)
if (temp === null) {
    window.location.replace('index.html');
}

let timeOut = null;
//=================calculateTime
const calculateTime = () => {
    let min = 0;
    let sec = 0;
    timeOut = setInterval(() => {
        sec += 1;
        if (sec < 10) {
            $('.sec').html('0' + sec);
        } else {
            $('.sec').html(sec);
        }
        if (sec == 60) {
            sec = 0;
            min += 1;
            if (min < 10) {
                $('.min').html('0' + min);
            } else {
                $('.min').html(min);
            }
        }

    }, 1000);

}
//=================calculateTime

const placeOrder = (item) => {
    //===================Time generate=================
    if (!isInAnOrder) {
        isInAnOrder = true;
        calculateTime();
    }


    //===================Time generate=================
    // itemsForOrder.push(item);
    //let temp = alacarta.filter(e=> e.id==item);
    let temp = alacarta.find(e => e.id == item);

    item = {
        id: temp.id,
        name: temp.name,
        requestedQty: 1,
        total: temp.price
    }

    const exists = isAlreadyExists(temp.id);

    if (qty != 0) {
        tempQty = Number(qty);
        total = temp.price * tempQty;
        item['requestedQty'] = tempQty;
        item['total'] = total;
    }

    if (exists != -1) {
        isExistsQty = item.requestedQty + itemsForOrder[exists].requestedQty;
        isExistsTotal = item['total'] + itemsForOrder[exists].total;
        itemsForOrder[exists] = {
            id: itemsForOrder[exists].id,
            name: itemsForOrder[exists].name,
            requestedQty: isExistsQty,
            total: isExistsTotal
        }
    } else {
        itemsForOrder.push(item);
    }

    loadOrderTableData();
};
const loadOrderTableData = () => {
    let html = '';
    itemsForOrder.forEach(resp => {
        html += `<tr onclick="removeItem('${resp.id}')">
<td>${resp.name}</td>
<td>${resp.requestedQty}</td>
<td>${resp.total}</td>
</tr>`;

    });
    $('#order-items').html(html);
    calculateTotal();
}

const isAlreadyExists = (id) => {
    for (let x = 0; x < itemsForOrder.length; x++) {
        if (itemsForOrder[x].id == id) {
            return x;
        }
    }
    return -1;
}

const manageCount = (number) => {
    if (number == 0) {
        if (qty == 0) {
            return;
        } else {
            qty += number;
        }
    } else {
        qty += number;
    }
    $('.count-text').html(qty);
}
const resetQty = () => {
    qty = '';
    $('.count-text').html(qty);
}
const calculateTotal = () => {
    let total = 0;
    for (let temp of itemsForOrder) {
        total += temp.total;
    }
    $('#total').html(total);
}
const removeItem = (id) => {
    if (confirm('are you sure?')) {
        for (let temp = 0; temp < itemsForOrder.length; temp++) {
            if (id == itemsForOrder[temp].id) {
                itemsForOrder.splice(temp, 1);
                loadOrderTableData();
                return;
            }
        }
    }
}

function Order(
    id, date, takingTime, placedTime, total, presentedTime, items
) {
    this.id = id;
    this.date = date;
    this.takingTime = takingTime;
    this.placedTime = placedTime;
    this.total = total;
    this.presentedTime = presentedTime;
    this.items = items;
}

const makeOrder = () => {
    let todayDate = new Date().toISOString().split('T')[0];
    let placedTime = new Date().toLocaleTimeString();
    let takingTime = $('.min').html() + ' : ' + $('.sec').html();
    let total = $('#total').html();
    let order = new Order(orderId, todayDate, takingTime, placedTime, total, '0', itemsForOrder);
    itemsForOrder = [];
    clearInterval(timeOut);

    //==============
    setClear();
    //==============
    loadOrderTableData();
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    console.log(orders);
    generateOrderId();
    setPlacedOrdersToTable();
}
const setClear = () => {
    $('#total').html('0');
    $('.min').html('00');
    $('.sec').html('00');
    isInAnOrder=false;
}
setPlacedOrdersToTable = () => {
    let ordersHtml = '';
    orders.forEach(response => {
        ordersHtml += `
        <tr>
          <td>
             <p style="font-size: 12px; margin: 0; font-weight: bold">
               <span>${response.id}</span>&nbsp;=>&nbsp;<span>${response.total} USD</span>&nbsp;=>&nbsp;<span>10 : 12</span>
             </p>
          </td>
        </tr>
        `;
    });
    $('#placed_orders').html(ordersHtml);
};

const generateOrderId=()=>{
    let ordersSet=JSON.parse(localStorage.getItem('orders'));
    if (ordersSet!=null){
        // generate order id
        // last element of the array
        // grab the order id
        // order is ==> D-001==> so we will have to split them
        // and get the integer number=> because we need to increment that number
        let tempId = Number(ordersSet[ordersSet.length-1].id.toString().split('-')[1]); // [10,20,30]=> if you want to access 30 then we must use 2 as our index ==> after split process => ['D','010]
        let number = tempId+1;
        if (number<9){
            orderId='D-00'+number;
        }else if(number<99){
            orderId='D-0'+number;
        }else{
            orderId='D-'+number;
        }
    }else{
        orderId='D-001';
    }
};
const viewOrdersModal=()=>{

    let ordersHtml = '';
    orders.forEach(response => {
        ordersHtml += `
        <tr onclick="loadOrderDetailsTable('${response.id}')">
           <td>${response.id}</td>
           <td>${response.date}</td>
           <td>${response.total}</td>
        </tr>
        `;
    });
    $('#order-t-body').html(ordersHtml);

    $('#orders-modal-button').click();
}
let setPrintData=()=>{
    //$('.main-outer').css('display','none');
    print();
}
const loadOrderDetailsTable=(id)=>{
    let tempOrder = orders.find((e)=>e.id==id);
    $('#id').html(tempOrder.id);
    $('#orderDate').html(tempOrder.date);
    $('#takingTime').html(tempOrder.takingTime);
    $('#placedTime').html(tempOrder.placedTime);
    $('#totalCost').html(tempOrder.total);
    $('#presentedTime').html(tempOrder.presentedTime);
    $('#order-details-modal-button').click();
}