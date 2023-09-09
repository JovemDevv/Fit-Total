const menuButton = document.getElementsByClassName("menu")[0]
//console.log(menuButton)

const aside = document.getElementsByTagName("aside")[0]
//console.log(aside)

const background = document.getElementsByClassName("background")[0]
//console.log(background)


let showMenu = false

menuButton.addEventListener('click', () =>{
   handleChange()
})

background.addEventListener('click', () =>{
    handleChange()
 })

aside.addEventListener('click', () =>{
    handleChange()
 })

function handleChange() {
    if(showMenu){
        aside.style.translate ="-280px"
        aside.style.transition = "0.3s"
        background.style.display = "none"
        showMenu = false
        
    } else {
        aside.style.translate ="0px"
        aside.style.transition = "0.3s"
        background.style.display = "flex"
        showMenu = true
    }
    //console.log(showMenu)
}

const form = document.getElementsByTagName("form")[0]

let arrayValues =[]
let isValid = true

 function handleSubmit(event){
    event.preventDefault()
    const rep = 5

   

    for (var i = 0; i<rep; i++) {
        
        const errorField = document.getElementById(form[i].id + "-error")
        if (errorField)
        errorField.textContent = ""

        if(form[i].id === "name" && !form[i].value){
            errorField.textContent = "Nome é obrigatório";
            isValid = false
        }
        if(form[i].id === "lastName" && !form[i].value){
            errorField.textContent = "Sobrenome é obrigatório";
            isValid = false
        }
        if(form[i].id === "email" ){
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            if (!emailRegex.test(form[i].value)){
            errorField.textContent = "Email deve ser válido"
            isValid = false
        }
    }
        if(form[i].id === "phone" ){
           if(form[i].value.length !== 15){
            errorField.textContent = "Telefone deve ter pelo menos 11 caracteres"
            isValid = false
           }
           if(!form[i].value) {
            errorField.textContent = "Telefone é obrigatório"
            isValid = false
           }
        }
        
        arrayValues.push(form[i].value)
 }
 if(isValid){
     alert(arrayValues)
 }
}

function formatarTelefone(input) {
    // Remove todos os caracteres não numéricos do valor do campo
    let cleanedValue = input.value.replace(/\D/g, '')

    if (cleanedValue.length > 0) {
        cleanedValue = "(" + cleanedValue
    }
    if (cleanedValue.length > 3) {
        cleanedValue = [cleanedValue.slice(0, 3), ") ", cleanedValue.slice(3)].join(
            ""
        )
    }
    if (cleanedValue.length > 10) {
            cleanedValue = [cleanedValue.slice(0, 10), "-", cleanedValue.slice(10)].join(
                ""
            )
        }
    
    if (cleanedValue.length = 15) {
        cleanedValue = cleanedValue.slice(0, 15)
    }

    input.value = cleanedValue
}