import React, { useState } from 'react';

function ProductRadioList() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Sản phẩm A' },
        { id: 2, name: 'Sản phẩm B' },
        { id: 3, name: 'Sản phẩm C' },
        { id: 4, name: 'Sản phẩm D' },
    ]);

    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleRadioChange = (event) => {
        const productId = parseInt(event.target.value, 10);
        setSelectedProduct(productId);
    };

    return (
        <div>
            <h3>Chọn sản phẩm:</h3>
            {products.map(product => (
                <div key={product.id}>
                    <input
                        type="radio"
                        id={product.id}
                        name="product"
                        value={product.id}
                        checked={selectedProduct === product.id}
                        onChange={handleRadioChange}
                    />
                    <label htmlFor={product.id}>{product.name}</label>
                </div>
            ))}

            {selectedProduct && (
                <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
                    <p>
                        <strong>Bạn đã chọn sản phẩm:</strong> {' '}
                        {products.find(p => p.id === selectedProduct)?.name}
                    </p>
                </div>
            )}
        </div>
    );
}

export default ProductRadioList;
