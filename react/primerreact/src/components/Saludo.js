

function Saludo(props) {

    var saludo = 'Hola'
    const {nombre, edad} = props

  return (
    <div>
        <h1>{saludo}, {props.nombre}</h1>
        <h2>Tienes {edad} años</h2>
    </div>
  );

}


export default Saludo;