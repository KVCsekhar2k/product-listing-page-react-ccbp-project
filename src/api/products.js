export async function fetchProducts() {
  const url = 'https://fakestoreapi.com/products'
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch products')
  const data = await res.json()
  return data
}
