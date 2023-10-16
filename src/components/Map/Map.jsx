
//Método MAP

//Lo utilizamos en React generalmente para crear una lista de componentes a partir de un array de datos

export const Map = () => {

    const productos = [
        {id: 1, nombre: "Notebook", precio: 1000},
        {id: 2, nombre: "Teclado", precio: 1200},
        {id: 3, nombre: "Mouse", precio: 300},
        {id: 4, nombre: "Monitor", precio: 5000},
    ]

    return (

        <div>
            <h2>Productos de Computación:</h2>
            <ul>
                {/* por cada item del array, se renderiza un li con los datos nombre y precio */}
                {productos.map(producto => (
                    <li key={producto.id}>
                        <span>{producto.nombre}</span>
                        <span> $ {producto.precio}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
