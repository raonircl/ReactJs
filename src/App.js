import { useState } from 'react'
import './App.css'

export default function App(){

  const[peso, setPeso] = useState('');
  const[altura, setAltura] = useState('');

  const[mensagem, setMensagem] = useState('');

  function calcularImc(){
    
    const alt = altura / 100;
    const Imc = peso / (alt * alt)

    if(Imc < 18.6){
      setMensagem("Você está abaixo do peso! Imc: " + Imc.toFixed(2))
    }
    else if(Imc >= 18.6 && Imc < 24.9){
      setMensagem("Você está no peso ideal! Imc: " + Imc.toFixed(2))
    }
    else if(Imc >= 24.9 && Imc < 34.9){
      setMensagem("Você está levemente acima do peso! Imc: " + Imc.toFixed(2))
    }
    else if(Imc > 34.9){
      setMensagem("Cuidado obesidade! Imc: " + Imc.toFixed(2))
    }
  }


  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>

      <div className="area-input">
        <input 
          type="text"
          placeholder="Peso em (Kg) Ex: 90"
          value={peso}
          onChange={ (e) => setPeso(e.target.value)}
        />
        <input 
          type="text"
          placeholder="Altura em (cm) Ex: 180"
          value={altura}
          onChange={ (e) => setAltura(e.target.value)}
        />

        <button onClick={calcularImc}>
          calcular
        </button>

      </div>
      <h2>{mensagem}</h2>
    </div>
  )
}