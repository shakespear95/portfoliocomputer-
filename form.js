const formEmail = document.getElementById('email-address');
const formButton = document.getElementById('form-button');
const formError = document.getElementById('form-error');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    let messages = [];
    const casechecker =formEmail.value.toLowerCase();
    if (casechecker !==formEmail.value){
        messages.push('please use lower case in your email');
        e.preventDefault();
        formError.innerText = messages.join(',');
    }
    // alert('messages');
})

