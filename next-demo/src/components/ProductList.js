import Link from 'next/link';

// 接收products的prop参数
export default function ProductList({ products }) {
    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>
                    <p>Category: {product.category}</p>
                    <Link href={`/product/${product.id}`} className="link-button">
                        View Details
                    </Link>
                </div>
            ))}
        </div>
    );
}
