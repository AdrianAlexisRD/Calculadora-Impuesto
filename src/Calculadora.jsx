import { useState, useEffect } from "react";
import { IconCalculator } from '@tabler/icons-react';

export function Calculadora() {
    const [Entrada , setEntrada] = useState(null)
    const [Result , setResult]= useState('')
    const [valorSelect , setValorSelect]= useState('Mensual')
    const [valores , setValores]= useState({
        numeroMinimo: 34700, 
        excedente: 416220.01/12 
    })
    
    
  useEffect(() => {
    switch (valorSelect) {
      case "Anual":
        setValores({
          numeroMinimo: 34700 * 12,
          excedente: 416220.01,
        });
        break;

      case "Mensual":
      default:
        setValores({
          numeroMinimo: 34700,
          excedente: 416220.01 / 12,
        });
        break;
    }
  }, [valorSelect]);


    useEffect(()=>{
        console.log(valorSelect)
        const calcularImpuesto = (Entrada)=>{

               
            if(Entrada > valores.numeroMinimo){
                 const Impuesto = Entrada-valores.excedente
                return setResult(`RD$ ${(Impuesto*0.15).toFixed(2)}`)
            }
             
            }
            calcularImpuesto(Entrada)

    },[Entrada , valorSelect])



    return(
        <section className="rounded text-white bg-[#1f1f1f] max-w-120 w-[80%] z-20 p-5 pb-10 flex flex-col gap-10  font-bold transition-all duration-3000 ease-in-out">
            <div className="flex justify-center items-center gap-2">
                <IconCalculator stroke={2} size={40} className=" animate-[calculadora_3s_ease-in-out_forwards]" />
                <h2 className="text-2xl text-center font-mono"> Calculadora</h2>
            </div>
            
            <h3 className="font-bold opacity-50 text-2xl text-[15px]">Nota: El monto debe ser mayor a {valores.numeroMinimo} sino su sueldo esta excento de impuestos sobre la renta</h3>
            <select className="text-gray-400 border-2 border-white rounded p-2 focus:outline-none focus:border-blue-400" name="tipo" value={valorSelect} onChange={e=> setValorSelect(e.target.value)}>
                <option value="Mensual">Mensual</option>
                <option value="Anual">Anual</option>
            </select>
            <input className="border-2 rounded p-2 text-[15px] focus:outline-none focus:border-blue-400 " type="number" onChange={e=> setEntrada(e.target.value)}  value={Entrada} placeholder={`Coloque su sueldo bruto ${valorSelect}`}/>
            <h2> <span className="text-white"> Resultados :</span> {Result}</h2>
        </section>
    )
}