// Проверка полей
function valid(form){
    // Cоздание ошибки
function createError(input,text){
    const parent = input.parentNode
    const errorLabel = document.createElement('label')
    errorLabel.classList.add('error-label')
    errorLabel.textContent = text
    parent.classList.add('error')
    parent.append(errorLabel)

}
function removeError(input){
    const parent = input.parentNode
    if(parent.classList.contains('error')){
        parent.querySelector('.error-label').remove()
        parent.classList.remove('error')
    }
}
    let result = true
    const allInputs = form.querySelectorAll('input')
    const regular_phone = (/(\+7)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g)
    const regular_email= (/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu)
    for(const input of allInputs){
        removeError(input)
        if(input.value == ''){
            console.log('Ошибка поля')
            createError(input,'Поле не заполнено')
            result = false
        }

    }
    if(!regular_phone.test(document.getElementById('phone').value)){
        let text_error = document.getElementById('error-text')
        text_error.innerHTML = 'Телефон должен быть в формате +7996***9017!'
        text_error.style.display = 'block'
        result = false
    }
    else if(!regular_email.test(document.getElementById('email').value)){
        let text_error = document.getElementById('email-error')
        text_error.innerHTML = 'Проверьте правильность email!'
        text_error.style.display = 'block'
        result = false
    }

    return result
}
// Обработка формы
document.getElementById('reg_form').addEventListener('submit',function(event){
    event.preventDefault()
    if(valid(this) == true){
        let modal = document.getElementById('modal')
        modal.style.display = 'block'
        let close = document.getElementsByClassName('close')[0]
        close.onclick = function(){
            modal.style.display = "none";
          }
          window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          }
          
    }
 
})
