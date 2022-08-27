let LData = JSON.parse(localStorage.getItem('Users')) || [];
document.querySelector('form').addEventListener('submit',Userlogin)

function Userlogin(event){
    event.preventDefault();
    let usermail = document.getElementById('mail-id').value
    let userpass = document.getElementById('pswd').value 
    for(i=0;i<LData.length;i++){
        let a = LData[i]
        console.log(a['Email'])
        if(a['Email']===usermail && a['Password']===userpass){
            alert('Login Successful!!');
            window.location.href='home.html'
        }else{
            alert('Wrong Credentials !!')
        }
    }
}
