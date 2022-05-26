
/* FUNCTION criaHora */
function criaHora(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: "GMT"
    })
}
/* Fim FUNCTION criaHora */

let segundos  = 0;
let timer;

function iniciaRelogio(){
  timer = setInterval(function(){
        segundos++
        relogio.innerHTML = criaHora(segundos)

    }, 1000)
}

console.log(criaHora(10));

const relogio  =  document.querySelector('.relogio')
const iniciar  =  document.querySelector('.iniciar')
const pausar  =  document.querySelector('.pausar')
const zerar  =  document.querySelector('.zerar')

document.addEventListener('click',(evento)=>{
    const el = evento.target
    if(el.classList.contains('iniciar')){
      acoes.iniciar()
    }else if(el.classList.contains('pausar')){
        acoes.pausar()

    }else if(el.classList.contains('zerar')){
        acoes.zerar()
       
    }
})




const acoes = {
    iniciar(){
        clearInterval(timer)
        relogio.classList.remove('pausado')
        iniciaRelogio()
    },

    pausar(){
        clearInterval(timer)
        relogio.classList.add('pausado')
    },
    zerar(){
        clearInterval(timer)
        segundos = 0
        relogio.classList.remove('pausado')
        relogio.innerHTML = `00:00:00`
 }
}