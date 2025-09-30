import React from 'react'

export default function ProductCard({ product, onToggleLike }) {
  const liked = JSON.parse(localStorage.getItem('plp_wishlist') || '[]').includes(product.id)

  return (
    <div className="card">
      <div className="img-wrap">
        <img src={product.image} alt={product.title} />
        <button className="heart" onClick={() => onToggleLike(product.id)} aria-label="like">
          {liked ? '❤️' : '♡'}
        </button>
      </div>

      <div className="card-body">
        <div className="title">{product.title}</div>
        <div className="price-note">Sign in or Create an account to see pricing</div>
      </div>
    </div>
  )
}
