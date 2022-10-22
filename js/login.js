const login=()=>{
    let users=JSON.parse(localStorage.getItem('users'));
    const uname = $('#username').val().toString().trim();
    const pwd = $('#password').val().toString().trim();
    for (const temp of users){
        if (temp.username===uname){
            console.log(temp.password);
            let decryptedPwd = CryptoJS.AES.decrypt(temp.password,'infinity')
                .toString(CryptoJS.enc.Utf8);
            if (pwd===decryptedPwd){
                alert('welcome');
                return;
            }else{
                alert('password is incorrect')
                return;
            }

        }
    }
    alert('user name incorrect!');
}