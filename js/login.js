const login=()=>{

    let users=[];
    let temp=JSON.parse(localStorage.getItem('users'));
    if (temp!=null){
        users=temp;
    }
    const uname = $('#username').val().toString().trim();
    const pwd = $('#password').val().toString().trim();
    for (const temp of users){
        if (temp.username===uname){
            console.log(temp.password);
            let decryptedPwd = CryptoJS.AES.decrypt(temp.password,'infinity')
                .toString(CryptoJS.enc.Utf8);
            if (pwd===decryptedPwd){
                window.location.href="../pages/dashboard.html";
                return;
            }else{
                alert('password is incorrect')
                return;
            }

        }
    }
    alert('user name incorrect!');
}