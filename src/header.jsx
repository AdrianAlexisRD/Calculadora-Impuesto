import imgBg from './assets/imgFondo.jpg'


export function Header() {
    return(
        <div className='relative w-[100vw] h-200 flex items-center justify-center pt-5 md:pt-10' >
            <h1 className='2xl:text-4xl text-2xl z-100 font-bold text-white text-center p-2'>Calculadora de retencion de impuesto</h1>
            <img src={imgBg} alt="" className='opacity-25 w-[100vw] max-w-300 2xl:right-[20%]  absolute top-0'/>
        </div>
    )
}