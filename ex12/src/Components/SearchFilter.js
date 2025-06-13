import React, { useState } from 'react';

function SearchFilter() {
    const [searchQuery, setSearchQuery] = useState('');
    const items = ['Apple', 'Banana', 'Orange', 'Grape', 'Mango'];

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <h1>Exercise 7</h1>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search items..."
            />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchFilter;
