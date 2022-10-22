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
    console.log(tempPassword)
    let encryptedPwd = CryptoJS.AES.encrypt(tempPassword,'infinity');
    let user = new User(
        $('#username').val().toString().trim(),
        $('#email').val().toString().trim(),
        $('#type').val(),
        "",
        encryptedPwd.toString()
    );
    if (!isAlreadyExists(user.username)){
        users.push(user);
        localStorage.setItem('users',JSON.stringify(users));
    }else{
        alert('user name is already exists!')
    }

}

const isAlreadyExists=(name)=>{
    for(const temp of users){
        if (temp.username===name){
            return true;
        }
    }
    return false;
}