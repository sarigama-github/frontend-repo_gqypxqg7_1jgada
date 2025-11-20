import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Menu from './components/Menu'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Featured />
      <Menu />

      <footer className="bg-red-700 text-yellow-100 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-2xl font-black">McDonald's</p>
            <p className="text-sm mt-2 text-yellow-200/90">
              Unofficial concept site built for demonstration purposes only. Not affiliated with McDonald's Corporation.
            </p>
          </div>
          <div>
            <p className="font-semibold mb-2">Quick Links</p>
            <ul className="space-y-1 text-yellow-50/90 text-sm">
              <li><a href="#featured" className="hover:underline">Featured</a></li>
              <li><a href="#menu" className="hover:underline">Menu</a></li>
              <li><a href="/test" className="hover:underline">System Status</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Legal</p>
            <p className="text-xs text-yellow-50/80">
              All trademarks are property of their respective owners. Images used for illustrative purposes.
            </p>
          </div>
        </div>
        <div className="border-t border-red-600/70">
          <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-yellow-200/70">
            © {new Date().getFullYear()} Demo Experience
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
