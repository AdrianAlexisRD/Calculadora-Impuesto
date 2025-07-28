import { Calculadora } from "./Calculadora"
import { Header } from "./header"
import RetencionesImpuestosRD from "./Documentacion"

function App() {
 

  return (
    <div className="h-dvh w-dvw flex flex-col items-center xl:gap-50 gap-10">
      <Header/>
      <Calculadora/>
      <RetencionesImpuestosRD/>
    </div>
  )
}

export default App
