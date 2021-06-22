/*
Scripts da pagina siteCompleto.html
*/

//Teremos os métodos para validar o nome, email e mensagem de contato.

let nome = document.querySelector('#exampleFormControlInput2')
// variavel recebe o input inserido no campo Nome da pagina

let email = document.querySelector('#exampleFormControlInput1')
// variavel recebe o input do campo email

let assunto = document.querySelector('#exampleFormControlTextarea1')
// variavel recebe input do campo de assunto

let nomeOk = false
let emailOk = false
let assuntoOk = false

//Metodo para validar o nome(pelo menos 3 letras, nao aceitar vazio etc)

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

//Metodo para validar email
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'

    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

//Metodo para validar o corpo da mensagem

function validaAssunto() {

    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length < 3) {
        txtAssunto.innerHTML = 'Insira alguma coisa!'
        txtAssunto.style.color = 'red'


    } else {
        txtAssunto.innerHTML = 'Mensagem válida!'
        txtAssunto.style.color = 'green'
        assuntoOk = true
    }
}
//metodo com alerta para informar que o formulario foi enviado c sucesso
function enviarForm() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulário enviado com sucesso')
    } else {
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}

