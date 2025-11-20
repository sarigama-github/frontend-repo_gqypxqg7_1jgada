import { useEffect, useState } from 'react'

function Featured() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/menu?featured=true&limit=6`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setError('Unable to load featured items')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="featured" className="max-w-6xl mx-auto px-4 py-14">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-red-700">Featured now</h2>
          <p className="text-red-900/70">Hand-picked favorites and seasonal specials</p>
        </div>
        <a href="#menu" className="text-sm font-semibold text-red-700 hover:text-red-800">View all</a>
      </div>

      {loading && <p className="text-red-800">Loading...</p>}
      {error && <p className="text-red-700">{error}</p>}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <article key={item.name} className="bg-white rounded-2xl overflow-hidden shadow border border-yellow-200/60 hover:shadow-lg transition">
            <div className="aspect-[4/3] bg-yellow-100">
              {item.image ? (
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full grid place-items-center text-yellow-700">No image</div>
              )}
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-bold text-red-800 text-lg">{item.name}</h3>
                <span className="px-2 py-1 rounded bg-yellow-200 text-red-800 text-xs font-semibold">${item.price.toFixed(2)}</span>
              </div>
              <p className="mt-2 text-sm text-red-900/70 line-clamp-2">{item.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-red-900/60">{item.category}</span>
                {typeof item.spicy_level === 'number' && (
                  <span className="text-xs text-orange-700">🌶️ {item.spicy_level}</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Featured
