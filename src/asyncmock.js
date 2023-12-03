const productos = [
    {id:1,nombre: 'Yerba', precio:50},
    {id:2,nombre: 'Fideos', precio:150},
    {id:3,nombre: 'Coquita', precio:250},
    {id:4,nombre: 'Arroz', precio:350},

]

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout (()=>{
            resolve(productos)
        },2000)
    })
}

