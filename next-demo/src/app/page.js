'use client';

import Link from 'next/link';
import ProductList from '@/components/ProductList';

const products = [
  { id: 1, name: 'iPhone', price: 999, category: 'electronics' },
  { id: 2, name: 'MacBook', price: 1999, category: 'electronics' },
  { id: 3, name: 'iPad', price: 599, category: 'electronics' },
  { id: 4, name: 'T-Shirt', price: 29, category: 'clothing' },
  { id: 5, name: 'Jeans', price: 89, category: 'clothing' },
];

export default function Home() {
  return (
    <main className="container">
      <header>
        <h1>Shopping App</h1>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/cart">Cart</Link></li>
          </ul>
        </nav>
      </header>

      <ProductList products={products} />
    </main>
  );
}
