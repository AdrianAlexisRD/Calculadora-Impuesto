

const RetencionesImpuestosRD = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 py-8 text-gray-400 leading-relaxed font-sans">
      <h1 className="2xl:text-3xl text-2xl font-bold pb-2 border-b border-gray-300 text-teal-600">
        Sistema de Retenciones de Impuestos para Asalariados en República Dominicana
      </h1>

      <section className="mt-8">
        <h2 className="text-2xl text-blue-500 font-semibold mb-2"> 
          ¿Qué son las retenciones de impuestos?
        </h2>
        <p>
          En República Dominicana, las retenciones de impuestos son cantidades que los empleadores
          deducen del salario de sus empleados para pagar al fisco en concepto del Impuesto sobre
          la Renta (ISR). Este sistema de retención en la fuente simplifica el pago de impuestos
          para los trabajadores.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl text-blue-500 font-semibold mb-2">
          ¿Cómo funciona el sistema de retenciones?
        </h2>
        <p>
          La Dirección General de Impuestos Internos (DGII) establece tablas de retención mensual
          que determinan cuánto debe retenerse según el salario bruto del empleado:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Base imponible:</strong> Se calcula sobre el salario mensual bruto</li>
          <li><strong>Escalas progresivas:</strong> A mayor salario, mayor porcentaje de retención</li>
          <li><strong>Retención mensual:</strong> El empleador calcula y retiene el impuesto cada mes</li>
          <li><strong>Pago a DGII:</strong> El empleador debe declarar y pagar estas retenciones</li>
        </ul>
      </section>

      <section className="">
        <h2 className="text-2xl text-blue-500 font-semibold mb-2">
          Tabla de Retenciones 2025 (Ejemplo)
        </h2>
        <div className="overflow-x-auto my-4">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Salario Mensual (RD$)</th>
                <th className="border px-4 py-2">Retención Mensual (RD$)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-gray-50">
                <td className="border px-4 py-2">34,700.00</td>
                <td className="border px-4 py-2">2.25</td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="border px-4 py-2">37,300.00</td>
                <td className="border px-4 py-2">392.25</td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="border px-4 py-2">50,000.00</td>
                <td className="border px-4 py-2">2,297.25</td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="border px-4 py-2">100,000.00</td>
                <td className="border px-4 py-2">13,582.94</td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="border px-4 py-2">200,000.00</td>
                <td className="border px-4 py-2">38,582.94</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">
          * Esta es una muestra reducida. La tabla completa contiene rangos más detallados.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl text-blue-500 font-semibold mb-2">Consideraciones importantes</h2>

        <h3 className="text-lg text-teal-600 font-semibold mt-4">Exenciones y deducciones</h3>
        <p>Los contribuyentes pueden beneficiarse de:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Exención del 50% del salario mínimo (no sujeto a retención)</li>
          <li>Deducción por seguridad social (AFP, SFS, etc.)</li>
          <li>Deducción por gastos médicos y educativos (con límites)</li>
        </ul>

        <h3 className="text-lg text-teal-600 font-semibold mt-4">Declaración anual</h3>
        <p>Aunque las retenciones se hacen mensualmente, los contribuyentes deben:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Presentar declaración anual si superan ciertos ingresos</li>
          <li>Conciliar lo retenido con lo realmente adeudado</li>
          <li>Solicitar devoluciones si hubo exceso de retención</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl text-blue-500 font-semibold mb-2">Actualizaciones y cambios</h2>
        <p>La DGII actualiza periódicamente las tablas de retención. Es importante:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Verificar cada año las nuevas tablas publicadas</li>
          <li>Consultar con un contador para casos especiales</li>
          <li>Revisar los comunicados oficiales de la DGII</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl text-blue-500 font-semibold mb-2">Recursos adicionales</h2>
        <ul className="list-disc list-inside text-blue-400 underline">
          <li>
            <a href="https://www.dgii.gov.do" target="_blank" rel="noopener noreferrer">
              Sitio oficial de la DGII
            </a>
          </li>
          <li>
            <a href="https://www.dgii.gov.do/legislacion/normas/Documents/Norma-06-2023.pdf" target="_blank" rel="noopener noreferrer">
              Norma 06-2023 sobre retenciones
            </a>
          </li>
          <li>
            <a href="https://www.dgii.gov.do/herramientas/calculadoras/Paginas/Calculadora-ISR-Salarios.aspx" target="_blank" rel="noopener noreferrer">
              Calculadora oficial de retenciones
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default RetencionesImpuestosRD;
