const misProductos = [
  {
    id: 1,
    nombre: "Vulk BC Ombuxe",
    precio: 48900,
    img: "./img/lentes-de-sol-vulk-bc-ombuxe-c2.png",
  },
  {
    id: 2,
    nombre: "Vulk Villyts Negro",
    precio: 36900,
    img: "./img/lentes-de-sol-vulk-villyts-negro-polarizado.png",
  },
  {
    id: 3,
    nombre: "Vulk Bi Mars Negro",
    precio: 48500,
    img: "./img/lentes-de-sol-vulk-bi-mars-negro-brillo-1-polarizado.png",
  },
  {
    id: 4,
    nombre: "Vulk Braga Gordon",
    precio: 59000,
    img: "./img/lentes-de-sol-vulk-braga-gordon-littell-5-naranja.png",
  },
  {
    id: 5,
    nombre: "Armani Exchange 4119",
    precio: 43680,
    img: "./img/lentes-de-sol-armani-exchange-4119-espejado.png",
  },
  {
    id: 6,
    nombre: "Ramone 53&3",
    precio: 62000,
    img: "./img/lentes-de-sol-vulk-ramone-533.png",
  },
];


// función que retorna todos los ítems del array de productos

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 2000);
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
