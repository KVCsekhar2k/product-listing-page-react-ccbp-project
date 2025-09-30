import React, { useState } from 'react'

export default function FilterSection({ title, options = [], onChange }) {
  const [open, setOpen] = useState(true)
  const [selected, setSelected] = useState([])

  function toggleOpt(opt) {
    const next = selected.includes(opt) ? selected.filter(x => x !== opt) : [...selected, opt]
    setSelected(next)
    onChange?.(title, next)
  }

  return (
    <div className="filter-section">
      <div className="filter-title" onClick={() => setOpen(!open)}>
        <div>{title}</div>
        <div>{open ? '▾' : '▸'}</div>
      </div>

      {open && (
        <div>
          <a style={{ fontSize: 13, color: '#0070f3', cursor:'pointer' }} onClick={() => { setSelected([]); onChange?.(title, []) }}>Unselect all</a>
          <div style={{ marginTop: 8 }}>
            {options.map(opt => (
              <label className="filter-option" key={opt}>
                <input type="checkbox" checked={selected.includes(opt)} onChange={() => toggleOpt(opt)} />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
