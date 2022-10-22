let users=[];
let temp=JSON.parse(localStorage.getItem('users'));
if (temp!=null){
    users=temp;
}
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
    let encryptedPwd = CryptoJS.AES.encrypt('infinity',tempPassword);
    let user = new User(
        $('#username').val().toString().trim(),
        $('#email').val().toString().trim(),
        $('#type').val(),
        "",
        encryptedPwd.toString()
    );
    users.push(user);
    localStorage.setItem('users',JSON.stringify(users));
}