import React, { useState } from 'react'
import FilterSection from './FilterSection'

export default function FilterSidebar({ onFilterChange }) {
  // Predefined options (replace or extend as needed)
  const sections = [
    { title: 'CUSTOMIZABLE', options: ['Yes'] },
    { title: 'IDEAL FOR', options: ['Men','Women','Unisex'] },
    { title: 'OCCASION', options: ['Casual','Formal','Party'] },
    { title: 'FABRIC', options: ['Cotton','Silk','Polyester'] },
    { title: 'PATTERN', options: ['Solid','Checked','Printed'] }
  ]

  function handleChange(title, selected) {
    onFilterChange?.(title, selected)
  }

  return (
    <aside className="sidebar">
      {sections.map(s => (
        <FilterSection key={s.title} title={s.title} options={s.options} onChange={handleChange} />
      ))}
    </aside>
  )
}
