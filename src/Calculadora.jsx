import { useState, useEffect, useReducer } from "react";
import { IconCalculator } from '@tabler/icons-react';

const estadoInicial = 'El monto debe ser mayor a RD$ 34,700';



export function Calculadora() {
  const [Entrada , setEntrada] = useState(null)
  const [valorSelect , setValorSelect]= useState('Mensual')
  const [state, dispatch] = useReducer(reducer, estadoInicial);

  function reducer(state, action) {
      switch (action.type) {
        case 'option1':
          const Impuesto1 = Entrada-(416220.01/12)
          return `RD$ ${(Impuesto1*0.15).toFixed(2)}`;
        case "option2":
            const MontoAdicional = 31216.00/12
            const Impuesto2 = Entrada-(624329.01/12)
            return `RD$ ${(Impuesto2*0.20+(MontoAdicional)).toFixed(2)}`;
        case "option3":
            const MontoAdicional1 = 79776.00/12
            const Impuesto3 = Entrada-(867123.01/12)
            return `RD$ ${(Impuesto3*0.25+(MontoAdicional1)).toFixed(2)}`;
        default:
          return state;
      }
    }
    console.log(reducer)
    console.log(state)
  // useEffect(() => {
  //   switch (valorSelect) {
  //     case "Anual":
  //       setValores1({
  //         numeroMinimo: 34700 * 12,
  //         excedente: 416220.01,
  //       });
  //       break;

  //     case "Mensual":
  //     default:
  //       setValores1({
  //         numeroMinimo: 34700,
  //         excedente: 416220.01 / 12,
  //       });
  //       break;
  //   }
  // }, [valorSelect]);


    useEffect(()=>{
        
  const calcularImpuesto = (Entrada) => {
    const salario = parseFloat(Entrada);
    console.log(salario)
    if (salario >=  416220.01/12 && salario <= 624329.01/12) {
      dispatch({ type: 'option1', payload: salario });
    } else if (salario >= 624329.01/12 && salario <= 867123.01/12) {
      dispatch({ type: 'option2', payload: salario });
    } else if (salario >= 867123.01/12) {
      console.log(867123.01/12)
      dispatch({ type: 'option3', payload: salario });
    }
  };

  calcularImpuesto (Entrada)
    },[Entrada , valorSelect])



    return(
        <section className="rounded text-white bg-[#1f1f1f] max-w-120 w-[80%] z-20 p-5 pb-10 flex flex-col gap-10  font-bold transition-all duration-3000 ease-in-out">
            <div className="flex justify-center items-center gap-2">
                <IconCalculator stroke={2} size={40} className=" animate-[calculadora_3s_ease-in-out_forwards]" />
                <h2 className="text-2xl text-center font-mono"> Calculadora</h2>
            </div>
            
            <h3 className="font-bold opacity-50 text-2xl text-[15px]">Nota: El monto debe ser mayor a 34,700 sino su sueldo esta excento de impuestos sobre la renta</h3>
            <select className="text-gray-400 border-2 border-white rounded p-2 focus:outline-none focus:border-blue-400" name="tipo" value={valorSelect} onChange={e=> setValorSelect(e.target.value)}>
                <option value="Mensual">Mensual</option>
                <option value="Anual">Anual</option>
            </select>
            <input className="border-2 rounded p-2 text-[15px] focus:outline-none focus:border-blue-400 " type="number" onChange={e=> setEntrada(e.target.value)}  value={Entrada} placeholder={`Coloque su sueldo bruto ${valorSelect}`}/>
            <h2> <span className="text-white"> Resultados :</span> {state}</h2>
        </section>
    )
}