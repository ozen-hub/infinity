
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
    let row='';
    itemsForOrder.forEach(data=>{
        row+=`<li>${data}</li>`
       $('#items-list').html(row);
    });
    console.log(itemsForOrder)
}