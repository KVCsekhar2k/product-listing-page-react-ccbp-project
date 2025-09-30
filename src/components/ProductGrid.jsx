import React from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({ products = [], onToggleLike }) {
  if (!products.length) return <div style={{ padding: 18 }}>No products found.</div>

  return (
    <div className="grid">
      {products.map(p => <ProductCard key={p.id} product={p} onToggleLike={onToggleLike} />)}
    </div>
  )
}
