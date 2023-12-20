import React from "react";

const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <div>
      <h2>Nombre:{nombre}</h2>
      <p>Precio:{precio}</p>
      <p>id: {id}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        laborum dolore quae nihil molestiae nulla iusto nesciunt minus fuga
        ratione quisquam et, cupiditate iure.
      </p>
      <img src={img} alt={nombre}></img>
    </div>
  );
};

export default ItemDetail;
