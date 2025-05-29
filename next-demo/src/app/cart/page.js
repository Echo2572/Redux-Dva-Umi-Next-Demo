'use client';

import { useState } from 'react';

export default function CartPage() {
    const [cart, setCart] = useState([
        { id: 1, name: 'iPhone', price: 999, quantity: 1 },
    ]);

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const incrementQuantity = (id) => {
        setCart(cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const decrementQuantity = (id) => {
        setCart(cart.map(item => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }));
    };

    const getTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <main className="container">
            <h1>Shopping Cart</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map(item => (
                            <div key={item.id} className="cart-item">
                                <h3>{item.name}</h3>
                                <p>${item.price}</p>
                                <div>
                                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                                </div>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h3>Total: ${getTotal()}</h3>
                        <button>Checkout</button>
                    </div>
                </>
            )}
        </main>
    );
}
