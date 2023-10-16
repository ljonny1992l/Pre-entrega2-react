import "./Item.css"


/* eslint-disable react/prop-types */

export const Item = ({id, nombre, precio, img}) => {

    return (
        <div className="card">
            <img className="cardImg" src={img} alt={nombre} />
            <h3 className="cardName">Nombre: {nombre}</h3>
            <p className="cardPrice">Precio: $ {precio}</p>
            <p>ID: {id}</p>
            <button className="cardButtom"> Ver Detalles </button>
        </div>
    )
}
