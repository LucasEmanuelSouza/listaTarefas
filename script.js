setInterval(function () {
    const data = document.querySelector('.data')
    let date = new Date()
    data.innerHTML = date.toLocaleString('pt-BR', { dateStyle: 'full' })
})

const inputTarefa = document.querySelector('.input-nova-tarefa')
const addTarefa = document.querySelector('.add-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi(){
    const li = document.createElement('li')
    li.classList.add('lista')
    return li 
}

inputTarefa.addEventListener('keypress',function(event){
    if(event.keyCode === 13){
        if (!inputTarefa.value) return        
        criaTarefa(inputTarefa.value)
    }
})

function limpaInput(){
    inputTarefa.value = ''
    inputTarefa.focus()
}

function criarBotaoApagar(li){
    li.innerHTML += '   '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerHTML = 'X'
    botaoApagar.setAttribute('class','apagar')
    li.appendChild(botaoApagar)
}

function criaTarefa(textoInput){
    const li = criaLi()
    li.innerHTML = textoInput
    tarefas.appendChild(li)
    limpaInput()
    criarBotaoApagar(li)
    salvarTarefas()
}

addTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return        
    criaTarefa(inputTarefa.value)
})

document.addEventListener('click', function(e){
    const el = e.target

    if(el.classList.contains('apagar')){
        el.parentElement.remove()
    }
})

 function salvarTarefas(){
     //
 }