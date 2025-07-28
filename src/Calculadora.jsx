import { useState, useEffect } from "react";


export function Calculadora() {
    const [Entrada , setEntrada] = useState(null)
    const [Result , setResult]= useState('')
    
    const numeroMinimo = 34700
    const excedenteMensual = 416220.01/12
    useEffect(()=>{
        const calcularImpuesto = (Entrada)=>{
               
            if(Entrada > numeroMinimo){
                 const Impuesto = Entrada-excedenteMensual
                return setResult(`RD$ ${(Impuesto*0.15).toFixed(2)}`)
            }
             
            }
            calcularImpuesto(Entrada)

    },[Entrada])



    return(
        <section className="rounded text-white bg-[#1f1f1f] max-w-120 w-[70%] z-20 p-5 flex flex-col gap-2 font-extrabold transition-all duration-3000 ease-in-out">
            <h1 className="text-2xl text-center">Calculadora Impuesto</h1>
            <h3 className="font-bold opacity-50 text-2xl text-[12px]">Nota: El monto debe ser mayor a {numeroMinimo} sino su sueldo esta excento de impuestos sobre la renta</h3>
            <input className="border-2 rounded p-2 text-[15px]" type="number" onChange={e=> setEntrada(e.target.value)}  value={Entrada} placeholder="Coloque su sueldo bruto"/>
            <h2> <span className="text-white"> Resultados :</span> {Result}</h2>
        </section>
    )
}