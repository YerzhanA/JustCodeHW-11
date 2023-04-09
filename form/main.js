const form = {
    email: document.getElementById('email'),
    password: document.getElementById('password'),
    name: document.getElementById('name'),
    button: document.querySelector('.button'),
    inputs: document.querySelectorAll('input')
}



// событие для input
form.email.oninput = (e) => {
    const { value } = e.target;
    if (value) {
        form.email.classList.add('filed')
    } else {
        form.email.classList.remove('filed')
    }
    checkFormInput()
}
form.password.oninput = (e) => {
    const { value } = e.target;
    if (value) {
        form.password.classList.add('filed')
    } else {
        form.password.classList.remove('filed')
    }
    checkFormInput()
}
form.name.oninput = (e) => {
    const { value } = e.target;
    if (value) {
        form.name.classList.add('filed')
    } else {
        form.name.classList.remove('filed')
    }
    checkFormInput()
}
// событие для input


function checkFormInput() {
    const nameValue = form.name.getElementsByTagName('input')[0].value;
    const emailValue = form.email.getElementsByTagName('input')[0].value;
    const passwordValue = form.password.getElementsByTagName('input')[0].value;
    if (nameValue && emailValue && passwordValue) {
        form.button.classList.remove('disable')
    } else {
        form.button.classList.add('disable')
    }
}


form.button.onclick = (e) => {
    // получаем значения input
    const nameValue = form.name.getElementsByTagName('input')[0].value;
    const emailValue = form.email.getElementsByTagName('input')[0].value;
    const passwordValue = form.password.getElementsByTagName('input')[0].value;

    if (nameValue && emailValue && passwordValue) {
        if (isNaN(passwordValue)) {
            alert('Пароль должен состоять только из чисел!!')

        } else {
            alert("Вы успешно зарегистрировались!")
            form.name.getElementsByTagName('input')[0].value = "";
            form.email.getElementsByTagName('input')[0].value = "";
            form.password.getElementsByTagName('input')[0].value = "";
            form.name.classList.remove('filed')
            form.email.classList.remove('filed')
            form.password.classList.remove('filed')
            form.button.classList.add('disable')
            window.open('enterPage.html')

        }

    } else {

        alert('Пусто')
    }


}