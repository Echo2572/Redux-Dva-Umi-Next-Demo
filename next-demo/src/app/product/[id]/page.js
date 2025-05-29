'use client';

import { useParams } from 'next/navigation';

const productDetails = {
    1: { id: 1, name: 'iPhone', price: 999, description: 'Latest iPhone model with advanced features.' },
    2: { id: 2, name: 'MacBook', price: 1999, description: 'Powerful laptop for professionals.' },
    3: { id: 3, name: 'iPad', price: 599, description: 'Versatile tablet for work and entertainment.' },
    4: { id: 4, name: 'T-Shirt', price: 29, description: 'Comfortable cotton t-shirt.' },
    5: { id: 5, name: 'Jeans', price: 89, description: 'Stylish and durable jeans.' },
};

export default function ProductDetails() {
    const { id } = useParams(); // 获取页面参数
    const product = productDetails[id] || { name: 'Product Not Found' };

    return (
        <main className="container">
            <h1>{product.name}</h1>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <button>Add to Cart</button>
        </main>
    );
}
