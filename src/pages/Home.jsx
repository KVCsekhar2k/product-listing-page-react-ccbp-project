import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ControlsBar from '../components/ControlsBar'
import FilterSidebar from '../components/FilterSidebar'
import ProductGrid from '../components/ProductGrid'
import { fetchProducts } from '../api/products'

export default function Home() {
  const [products, setProducts] = useState([])
  const [display, setDisplay] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({})
  const [sidebarVisible, setSidebarVisible] = useState(true) // desktop sidebar toggle
  const [mobileSidebar, setMobileSidebar] = useState(false) // overlay for mobile

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const data = await fetchProducts()
        setProducts(data)
        setDisplay(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  function handleFilterChange(section, selected) {
    const next = { ...filters, [section]: selected }
    setFilters(next)
    applyFilters(next, products)
  }

  function applyFilters(activeFilters, baseProducts) {
    let out = [...baseProducts]
    const idealFor = activeFilters['IDEAL FOR'] || []
    if (idealFor.length) {
      const map = {
        Men: ["men's clothing"],
        Women: ["women's clothing"],
        Unisex: ['jewelery', 'electronics'],
      }
      const allowedCats = idealFor.flatMap(k => map[k] || [])
      out = out.filter(p => allowedCats.includes(p.category))
    }
    if ((activeFilters['CUSTOMIZABLE'] || []).includes('Yes')) {
      out = out.filter(p => p.id % 2 === 0)
    }
    setDisplay(out)
  }

  function handleSort(sortKey) {
    let arr = [...display]
    if (sortKey === 'price-asc') arr.sort((a, b) => a.price - b.price)
    else if (sortKey === 'price-desc') arr.sort((a, b) => b.price - a.price)
    else if (sortKey === 'title-asc') arr.sort((a, b) => a.title.localeCompare(b.title))
    setDisplay(arr)
  }

  function handleToggleLike(id) {
    const wl = JSON.parse(localStorage.getItem('plp_wishlist') || '[]')
    const next = wl.includes(id) ? wl.filter(x => x !== id) : [...wl, id]
    localStorage.setItem('plp_wishlist', JSON.stringify(next))
    setDisplay(s => [...s])
  }

  return (
    <>
      <Header />
      <main className="container">
        <div className="hero">
          <div className="breadcrumb" style={{ color: '#999', fontSize: 13 }}>
            HOME | SHOP
          </div>
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        <ControlsBar
          total={display.length}
          onSort={handleSort}
          onToggleSidebar={() => setSidebarVisible(!sidebarVisible)}
        />

        <div className="page-main">
          {sidebarVisible && (
            <FilterSidebar onFilterChange={handleFilterChange} />
          )}
          <section>
            {loading ? (
              <div style={{ padding: 28 }}>Loading products...</div>
            ) : (
              <ProductGrid products={display} onToggleLike={handleToggleLike} />
            )}
          </section>
        </div>

        {/* Mobile overlay sidebar */}
        {mobileSidebar && (
          <div className="overlay">
            <div className="overlay-content">
              <button onClick={() => setMobileSidebar(false)} className="btn">
                Close ✕
              </button>
              <FilterSidebar onFilterChange={handleFilterChange} />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
