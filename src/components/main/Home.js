import { useState } from "react"

const Home = ()=> {

    const [valor, setValor]= useState("")
    const [usuarios, setUsuarios] = useState ([])

       const hecerClick = () => {
           console.log("Hola")
           const target = e.target
           console.log(target)

           setTimeout(() => {
           console.log(target)
       }, 2000)

       const copia = usuarios.slice(0)
       copia.push(valor) 
       
       //opcion tmb el operador spred
       //const copia = [...usuarios,valor]
       //setUsuarios(copia)
       //console.log(valor)
       //}

       const hacerChange = (e) => {
           //console.dir(e.target) 
        const valor = e.target.value
        setValor(valor)
       }

       const hacerClickSinDefault = (e) => {
           e.preventDefault()
           console.log("Hago otra cosa q no sea redirigir")
       }

       const prevenirEscritura = (e) => {
        console.log(e.key)
        e.preventDefault()
       }
       return(
           <div>
               <a href="www.google.com">Ir a google</a>
               Soy Home
               <button id="boton" onClick={hacerClick}>Click</button>
            <form onSubmit={prevenirSubmit}>
                <imput type="text" onKeyDown={prevenirEscritura} onChange={hacerChange} />
                
               </form>
           </div>
       )
}

export defaul Home;