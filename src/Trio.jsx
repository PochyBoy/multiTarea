import {useState} from 'react'

function Trio(){

    const[bola1,setBola1]=useState(0)
    const[bola2,setBola2]=useState(0)
    const[bola3,setBola3]=useState(0)

    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      }

    function alAzar(){
        setBola1(getRandomArbitrary(1,50))
        setBola2(getRandomArbitrary(1,50))
        setBola3(getRandomArbitrary(1,50))
    }
    
    return(
        <>
            <div style={{lineHeight: "50px",background:'red',borderRadius:'50%', textAlign:'center',width:'100px', height:'100px',display:'inline-block'}}><p style={ {}}>{bola1}</p></div>
            <div style={{lineHeight: "50px",background:'red',borderRadius:'50%', textAlign:'center',width:'100px', height:'100px',display:'inline-block'}}><p>{bola2}</p></div>
            <div style={{lineHeight: "50px",background:'red',borderRadius:'50%', textAlign:'center',width:'100px', height:'100px',display:'inline-block'}}><p>{bola3}</p></div>
            <button onClick={alAzar}>Cambia Valores</button>
        </>
    )
}
export default Trio