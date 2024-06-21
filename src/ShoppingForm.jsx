import React, { useState } from 'react';

function ShoppingForm(props) {
  const [newElement, setNewElement] = useState({product:"", category:""});
  

  const handleCambio= (e) => {
    setNewElement(prevState =>({...prevState, product:e.target.value}));
  };

  const handleChange=(e)=>{
    setNewElement(prevState => ({
    ...prevState,
    category: e.target.value
  }));
};
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addItem(newElement);
    setNewElement({product:"", category:""});
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="product"
            type="text"
            value={newElement.product}
            onChange={handleCambio}/>
      <label>Categoria</label>
      <select
        name="category"
        value={newElement.category}
        onChange={handleChange}
        >
        <option value="">Selecciona una categoría</option>
        <option value="Lacteo">Lácteo</option>
        <option value="Despensa">Despensa</option>
        <option value="Higiene">Higiene</option>
        <option value="Bebida">Bebida</option>
        <option value="Limpieza">Limpieza</option>
        <option value="Otro">Otro</option>
        </select>
      <button onClick={handleSubmit} type="submit">Agregar</button>
    </form>
  );
}

export default ShoppingForm;
