const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
const audio = document.querySelector('.audio')
let timer;
let segundos = 0;
document.addEventListener('click',(evento)=>{
    const elementoClicado  = evento.target
    if(elementoClicado.classList.contains('iniciar')){
        acoes.iniciar()
        acoes.audio()
    }else if(elementoClicado.classList.contains('pausar')){
        acoes.pausar()
    }else if(elementoClicado.classList.contains('zerar')){
        acoes.zerar()
    }
})

let criaHora = (segundos) => {
    const date = new Date(segundos * 1000)

    return date.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: "GMT"
    })

}
const acoes={
    iniciaRelogio(){
     timer = setInterval(() => {
         segundos++
         relogio.innerHTML = criaHora(segundos)
         
     }, 1000);  
    },
    iniciar(){
        this.audio()
        audio.play()
        clearInterval(timer)
        audio.setAttribute('loop', '')
        relogio.classList.remove('pausado')
        
        this.iniciaRelogio()
    },
    pausar(){
        clearInterval(timer)
        audio.pause()
        audio.currentTime = 0
        relogio.classList.add('pausado')
    },
    zerar(){
        clearInterval(timer)
        audio.pause()
        segundos = 0
        relogio.innerHTML = "00:00:00"
    },
    audio(){

        audio.currentTime = 0
        
    }
}