const user = document.getElementById("user");
const pass = document.getElementById("pass");

const form = document.getElementById("form");
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = [];
    let regExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let mailValid = regExp.test(user.value);
    if(user.value === '' || user.value == null) {
        messages.push('Se requiere usuario');
    }

    if(mailValid == false) {
        messages.push('Debe ingresar un correo valido');
    }

    if(pass.value.length <= 6) {
        messages.push('La contraseña debe tener más de 6 caracteres');
    }

    if(pass.value.length >= 20) {
        messages.push('La contraseña debe tener menos de 20 caracteres');
    }

    if(messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }

})