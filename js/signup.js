function User(username,email,type,avatar,password){
    this.username=username;
    this.email=email;
    this.type=type;
    this.avatar=avatar;
    this.password=password;
}
const registerUser=()=>{
    // trim => "__Nimal_" ==> after trim  ==> "Nimal" (spaces rid)
    let tempPassword = $('#password').val().toString().trim();
    console.log(CryptoJS.AES.encrypt('infinity','jkh'));
    let user = new User(
        $('#username').val().toString().trim(),
        $('#email').val().toString().trim(),
        $('#type').val(),
        "",
        encryptedPwd
    );
    localStorage.setItem('users',JSON.stringify(user));
}