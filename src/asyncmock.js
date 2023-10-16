const misProductos = [
  {
    id: 1,
    nombre: "Foco bajo consumo",
    precio: 99999,
    img:"./img/foco.webp"
  },
  {
    id: 2,
    nombre: "cable vulcanizado 2.5",
    precio: 99999,
    img: "./img/Cable-Vulcanizado.png",
  },
  {
    id: 3,
    nombre: "lampara vintage",
    precio: 99999,
    img: "./img/lampara.jpg",
  },
  
];


// función que retorna todos los ítems del array de productos

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 1500);
  });
};

// función que retorna un solo ítem

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.find(prod => prod.id === id);
      resolve(producto);
    }, 2000);
  })
}
