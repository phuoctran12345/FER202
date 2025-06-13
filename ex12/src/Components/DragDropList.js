import React, { useState } from 'react';

function DragDropList() {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
    const [draggingItem, setDraggingItem] = useState(null);

    const handleDragStart = (e, index) => {
        setDraggingItem(index);
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDragOver = (e, index) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handleDrop = (e, index) => {
        e.preventDefault();
        if (draggingItem === null) return;
        const copyListItems = [...items];
        const dragItemContent = copyListItems[draggingItem];
        copyListItems.splice(draggingItem, 1);
        copyListItems.splice(index, 0, dragItemContent);
        setDraggingItem(null);
        setItems(copyListItems);
    };

    return (

        <ul>
            <h1>Exercise 7</h1>
            {items.map((item, index) => (
                <li
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDrop={(e) => handleDrop(e, index)}
                    style={{padding: '10px', border: '1px solid #ccc', margin: '5px'}}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}

export default DragDropList;
