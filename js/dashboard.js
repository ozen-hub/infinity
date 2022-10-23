
//=================
let itemsForOrder=[];
//=================

let temp = JSON.parse(localStorage.getItem('users'));
console.log(temp)
if (temp === null) {
    window.location.replace('index.html');
}



const placeOrder=(item)=>{
    itemsForOrder.push(item);

    itemsForOrder.forEach(data=>{
       let row=`<li>${data}</li>`;
       $('items-list').innerHTML=row;
    });
    console.log(itemsForOrder)
}