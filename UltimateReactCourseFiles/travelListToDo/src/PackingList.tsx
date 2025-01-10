import { useState } from "react";
import Item from "./Item";
import * as React from 'react';

export default function PackingList({
    items,
    onDeleteItem,
    onToggleItem,
    onClearList,
}: {
    items: {id: number, description: string, quantity: number, packed: boolean}[], 
    onDeleteItem: (id: number) => void,
    onToggleItem: (id: number) => void,
    onClearList: () => void
}
) {
    const [sortBy, setSortBy] = useState('description');

    let sortedItems;

    if (sortBy === 'input') {
        useState("input");
}

    if (sortBy === 'description') {
        sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    }

    if (sortBy === 'packed') {
        sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
    }
    return (
        <div className="list">
            <ul>
                {sortedItems?.map(item => (
                    <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
                ))}
            </ul>
            <div className="actions">
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={onClearList}>Clear List</button>
            </div>
        </div>
    );
}