document.querySelector('form').addEventListener('submit',Signup)
let LSData = JSON.parse(localStorage.getItem('Users')) || [];

function Signup(event){
    event.preventDefault();
    // console.log('billa')
    let firstname = document.getElementById('first-name').value
    let lastname = document.getElementById('last-name').value
    let emailid = document.getElementById('email-id').value
    let passwd = document.getElementById('passd').value
    let conpasswd = document.getElementById('confirmpassd').value
    let contact = document.getElementById('mobile').value
    console.log(firstname)

    let obj ={
        'First name':firstname,
        'Last name':lastname,
        'Email':emailid,
        'Password':passwd,
        'Verifypass':conpasswd,
        'MonileNo':contact
    }
    LSData.push(obj)
    localStorage.setItem('Users',JSON.stringify(LSData))

    window.location.href='login.html'
}