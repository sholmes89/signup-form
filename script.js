const root = document.querySelector(':root')
const toggleBtn = document.querySelector('#ToggleDisplay')
const passwordEle = document.querySelector('#Password')
const confirmPasswordEle = document.querySelector('#ConfirmPassword')
const form = document.querySelector('#Form')
const PassHolder = document.querySelector('#PassInputSet')
const ConfirmHolder = document.querySelector('#ConfirmInputSet')
const Content = document.querySelector('#Content')
toggleBtn.addEventListener('click', () => {
    if (root.classList.contains('light')) {
        root.classList.remove('light')
    } else {    
        root.classList.add('light')
    }
})

passwordEle.addEventListener('blur', () => {
    if (passwordEle.value.length > 0 && passwordEle.value.length < 8) {
        PassHolder.classList.add('error')
    } else {
        if (confirmPasswordEle.value.length > 0 && passwordEle.value !== confirmPasswordEle.value) {
            ConfirmHolder.classList.add('error')
        } else {
            ConfirmHolder.classList.remove('error')
        }
        PassHolder.classList.remove('error')
    }
})

passwordEle.addEventListener('keyup', () => {
    if (passwordEle.value.length === 0 || passwordEle.value.length >= 8) {
        PassHolder.classList.remove('error')
    }
})

confirmPasswordEle.addEventListener('blur', () => {
    if (passwordEle.value.length > 0 && confirmPasswordEle.value.length > 0 && passwordEle.value !== confirmPasswordEle.value) {
        ConfirmHolder.classList.add('error')
    } else {
        ConfirmHolder.classList.remove('error')
    }
})

confirmPasswordEle.addEventListener('keyup', () => {
    if (confirmPasswordEle.value.length === 0 || passwordEle.value === confirmPasswordEle.value) {
        ConfirmHolder.classList.remove('error')
    }
})


form.addEventListener('submit', e => {
    e.preventDefault();
    if (passwordEle.value !== confirmPasswordEle.value) {
        return
    } else {
        Content.innerHTML = '';
        let thanksContent = document.createElement('h3')
        thanksContent.innerHTML = `Thank you for signing up ${e.target[0].value}, you legend!`
        thanksContent.classList.add('sub-heading')
        Content.append(thanksContent)
    }
})