

export const Promises = () => {
  //Promesas

  const tuPromesa = (estado) => {
    return new Promise((resolve, rejected) => {
      estado ? resolve("Promesa Cumplida") : rejected("Promesa rechazada");
    });
  };

  console.log(tuPromesa(true));

  //THEN Y CATCH: son dos métodos que me permiten ejecutar una función cuando la promesa se cumple o se rechaza. Ambos métodos se concatenan.

  //THEN: se ejecuta cuando la promesa se cumple.
  //CATCH: se ejecuta cuando la promesa se rechaza.
  //FANALLY: se ejecuta siempre.

  tuPromesa(true)
      .then(respuesta => console.log("siii se cumple", respuesta))
      .catch(error => console.log("nooo se cumple", error))  


  //Practica con un array de datos

  const array = ["Marce", "Rodri", "Emi", "Miguel", "Adriana"];

  const solicitarNombre = (nombre) => {
    return new Promise ((resuelto, rechazado) =>{
        nombre ? resuelto (array) : rechazado ("No hay nombres para mostrar");
    })
  }

  solicitarNombre(true)
    .then(respuesta => {
        console.table(respuesta);
    })
    .catch (error => console.log(error))
  
  return <div>

        </div>;
};
