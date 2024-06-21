import React, { useState } from 'react';
import './App.css';
import ShoppingForm from './ShoppingForm';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div className="App">
      <h1>Lista de Compras</h1>
      
      <ShoppingForm addItem={addItem} />

      <ul>
        {items.map((item,index)=>(<li>
         {item.product} - {item.category} 
        </li>
      ))}
      </ul>
    </div>
  );
}

export default App;
