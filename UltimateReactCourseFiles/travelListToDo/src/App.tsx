import { useState } from 'react'
import * as React from 'react';
import './App.css'
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

interface Item {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

function App() {
  const [items, setItems] = useState<Item[]>([]);

  function handleAddItems(item: Item): void {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id: number): void {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
}


  function handleToggleItem(id: any){
    setItems(prevItems => prevItems.map(item => item.id === id ? {...item, packed: !item.packed} : item));
  }

  function handleClearList(){
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClearList} />
      <Stats items={items} />
    </div>
  )

  
}

export default App
