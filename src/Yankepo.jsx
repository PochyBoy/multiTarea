import {useState, useEffect} from 'react'

function Yankepo(){

const[juego, setJuego]=useState('')
const[mensaje, setMensaje]=useState('')
//siempre valores que se vayan a cambiar de valor se usa el useState
//como este caso yo cometí el error de poner let mensaje, forzando el pintado
//cuando no se podía, pero lo bueno es que ya fue solucionado
//Agradecido con el de arriba y el profe uwu
let computadora = ['Papel','Piedra','Tijera']

let manoPc = computadora[Math.floor(Math.random() * computadora.length)]


function Comienza (){
    if(juego== 'Papel' && manoPc == 'Piedra' ||
    juego== 'Piedra' && manoPc == 'Tijera' ||
    juego== 'Tijera' && manoPc == 'Papel'){
         setMensaje('HAZ GANADO!!!');
    }else if(juego == manoPc){
        setMensaje('HAZ EMPATADO');
    }else if(juego==''){
        setMensaje('ESCOJE, QUE EL TIEMPO SE AGOTAs');
    }
    else{
        setMensaje('UNA LASTIMA, PARA LA PRÓXIMA SERÁ UWU');
    }
}
    console.log(juego)
    console.log(manoPc)


    return(

        <>
            <div>
                <dir>
                    <button onClick={()=>setJuego('Papel')} >Papel</button>
                    <button onClick={()=>setJuego('Piedra')}>Piedra</button>
                    <button onClick={()=>setJuego('Tijera')} >Tijera</button>
                    <h1>{juego}</h1>

                </dir>
                <div></div>
                <div>
                    <button>Player Computadora</button>
                </div>
            </div>
            <div><button onClick={Comienza} >Comienza</button></div>
            <h1>{mensaje}</h1>

        </>

    )
}

export default Yankepo