import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListForm from './components/ListForm'
import ListStructure from './components/ListStructure'

function App() {
  const [items, setItems] = useState([]);

  useEffect( () => {
    if(localStorage.getItem('items') !== null){
      setItems(JSON.parse(localStorage.getItem('items')));
    }
    console.table(JSON.parse(localStorage.getItem('items')));
  }, []);

  const addTodo = (newItem) => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
    console.log("This information while I add item:");
    console.table(JSON.parse(localStorage.getItem('items')));
  }

  const toggleItem = id => {
    const updatedItems = items.map( (item) => {
      if(item.id === id){
        return {...item, isChecked: !item.isChecked};
      }
      return item;
    });
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
    console.log("This information while I toggled item:");
    console.table(JSON.parse(localStorage.getItem('items')));
  }

  const deleteItem = id => {
    const updatedItems = items.filter( item => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
    console.log("This information while I deleted item:");
    console.table(JSON.parse(localStorage.getItem('items')));
  }

  return (
    <div>
      <ListForm addTodo={addTodo}/>
      <ListStructure items={items} toggleItem={toggleItem} deleteItem={deleteItem} />
    </div>
  )
}

export default App
