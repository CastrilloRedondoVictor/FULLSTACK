function Metodos(){

    const saludar = (nom) => {
        console.log('Hola ' + nom)
    }

    return (<div>
        <h1>Métodos Lambda</h1>
        {/* { saludar() } */}
        <button onClick = {() => { saludar('Victor') }}>SALUDAR</button>
    </div>)

}
export default Metodos;