import { useEffect, useMemo, useState } from 'react'

const categories = ["All", "Burgers", "Chicken", "Sides", "Drinks", "Desserts"]

function Menu() {
  const [items, setItems] = useState([])
  const [filtered, setFiltered] = useState([])
  const [active, setActive] = useState("All")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/menu?limit=60`)
        const data = await res.json()
        setItems(data)
        setFiltered(data)
      } catch (e) {
        setError('Unable to load menu')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  useEffect(() => {
    if (active === 'All') {
      setFiltered(items)
    } else {
      setFiltered(items.filter(i => i.category === active))
    }
  }, [active, items])

  return (
    <section id="menu" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-red-700 mb-4">Explore the menu</h2>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full border text-sm font-semibold whitespace-nowrap transition ${active === cat ? 'bg-red-600 text-white border-red-600' : 'bg-yellow-100 text-red-800 border-yellow-300 hover:bg-yellow-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading && <p className="mt-6 text-red-800">Loading...</p>}
        {error && <p className="mt-6 text-red-700">{error}</p>}

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <article key={item.name} className="rounded-2xl overflow-hidden ring-1 ring-yellow-200 hover:shadow-lg transition">
              <div className="aspect-[4/3] bg-yellow-50">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full grid place-items-center text-yellow-700">No image</div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-red-800">{item.name}</h3>
                  <span className="px-2 py-1 rounded bg-yellow-200 text-red-800 text-xs font-semibold">${item.price.toFixed(2)}</span>
                </div>
                <p className="mt-1 text-sm text-red-900/70 line-clamp-2">{item.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-red-900/60">{item.category}</span>
                  {typeof item.calories === 'number' && (
                    <span className="text-xs text-red-900/60">{item.calories} cal</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
