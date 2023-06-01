const form = document.querySelector('form')
const Name = document.querySelector('#name')
const Email = document.querySelector('#email')
const error = document.querySelector('.error-prompt')

form.addEventListener('submit', function(e){
    e.preventDefault()

    if(Name.value === '' ||  Email.value === ''){
        error.style.display = 'block'

        setTimeout(() => {
            bug.style.display = 'none'
        }, 5000)

        return
    }
    alert(`Hello {Name.value}🎊, your form has been submitted successfully.\nYour email is {Email.value}`)
    console.log(Name.value)
    console.log(Email.value)
    

    Name.value = ''
    Email.value = ''