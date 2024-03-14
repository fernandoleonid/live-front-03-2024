// 3º Mutável e escopo global
// var nota = 10

// 2º Mutável e escopo local
// let nota = 9
// const nota = 8

const botaoMensagem = document.querySelector('button')

function trocarCor () {
    const pagina = document.querySelector('body')
    if (pagina.className == 'amarelo') {
        pagina.className = 'azul'
    }else if (pagina.className == 'azul' ){
        pagina.className = 'vermelho'
    }else {
        pagina.className = 'amarelo'
    }
    
}

botaoMensagem.addEventListener('click', trocarCor)