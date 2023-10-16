
import { useState, useEffect } from "react";
import { getUnProducto } from "../../asyncmock";
import { ItemDetail } from "../ItemDetail/ItemDetail";


export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)

    useEffect (() =>{
        getUnProducto(5)
            .then(res => setProducto(res))
    }, [])

    return (
        <div>
            <ItemDetail {...producto}/>
        </div>
    )
}
