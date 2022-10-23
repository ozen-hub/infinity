let temp=JSON.parse(localStorage.getItem('users'));
console.log(temp)
if (temp===null){
    window.location.replace('index.html');
}

$(document).ready(function(){
    $('.middle').load('../alacarte.html');
});
