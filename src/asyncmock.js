const productos = [
  { id: 1, nombre: "Yerba", precio: 50, category: "desktop" },
  { id: 2, nombre: "Fideos", precio: 150, category: "laptop" },
  { id: 3, nombre: "Coquita", precio: 250, category: "mobilePhone" },
  { id: 4, nombre: "Arroz", precio: 350, category: "laptop" },
  { id: 4, nombre: "Arroz", precio: 350, category: "laptop" },
  { id: 4, nombre: "Arroz", precio: 350, category: "desktop" },
  { id: 4, nombre: "Arroz", precio: 350, category: "mobilePhone" },
  { id: 4, nombre: "Arroz", precio: 350, category: "desktop" },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    resolve(productos);
  });
};
