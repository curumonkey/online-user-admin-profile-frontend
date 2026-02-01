"use client";
import { useState, useEffect } from "react";
import { getItems, addItem } from "../../lib/api";

export default function AdminPage() {
  const [items, setItems] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getItems(token).then(setItems);
    }
  }, []);

  async function handleAdd() {
    const token = localStorage.getItem("token");
    if (!token) return;
    const newItem = await addItem(token, { name, price });
    setItems([...items, newItem]);
  }

  return (
    <div className="p-6">
      <h1>Admin Dashboard</h1>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Item name" />
      <input type="number" value={price} onChange={e => setPrice(Number(e.target.value))} placeholder="Price" />
      <button onClick={handleAdd}>Add Item</button>
      <ul>
        {items.map(item => (
          <li key={item._id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
}
