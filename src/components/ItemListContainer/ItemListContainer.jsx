/* eslint-disable react/prop-types */

import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import { getProductos } from "../../asyncmock"
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () =>{

    //creo un estado que me va almacenar el array de mis productos

    const [productos, setProductos] = useState ([]);

    
    useEffect ( () => {
        getProductos()
            .then(respuesta => setProductos(respuesta))
            .catch(error => console.log(error))
    }, [])

    return (
        
        <div className="catalogoContenedor">
            <h2>Lista de productos</h2>
            <hr />            
            <div className="itemList">
            <ItemList productos={productos}/>            
            </div>
        </div>
    )
}
