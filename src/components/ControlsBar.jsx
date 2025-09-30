import React from 'react'

export default function ControlsBar({ total=0, onSort, onToggleSidebar }) {
  return (
    <>
      {/* Desktop */}
      <div className="container controls">
        <div className="left">
          <div>{total} ITEMS</div>
          <button className="btn" onClick={onToggleSidebar}>〈 HIDE FILTER</button>
        </div>
        <div className="right">
          <select onChange={(e)=>onSort?.(e.target.value)}>
            <option value="recommended">RECOMMENDED</option>
            <option value="price-asc">PRICE LOW TO HIGH</option>
            <option value="price-desc">PRICE HIGH TO LOW</option>
            <option value="title-asc">TITLE A → Z</option>
          </select>
        </div>
      </div>

      {/* Mobile */}
      <div className="container controls-mobile">
        <button onClick={onToggleSidebar}>FILTER</button>
        <select onChange={(e)=>onSort?.(e.target.value)}>
          <option value="recommended">RECOMMENDED</option>
          <option value="price-asc">PRICE LOW TO HIGH</option>
        </select>
      </div>
    </>
  )
}
