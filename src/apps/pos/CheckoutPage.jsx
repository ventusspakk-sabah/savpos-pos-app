import { useState } from 'react'

const services = [
  { id: 1, name: 'Swedish Massage', price: 85, duration: '60m', category: 'Massage', icon: 'spa' },
  { id: 2, name: 'Deep Tissue', price: 110, duration: '90m', category: 'Massage', icon: 'physical_therapy' },
  { id: 3, name: 'Hot Stone', price: 125, duration: '60m', category: 'Massage', icon: 'heat' },
  { id: 4, name: 'Aromatherapy', price: 95, duration: '60m', category: 'Massage', icon: 'airware' },
]

function CheckoutPage() {
  const [cart, setCart] = useState([])
  const [activeCategory, setActiveCategory] = useState('Massage')

  const addToCart = (service) => {
    setCart([...cart, { ...service, cartId: Date.now(), therapist: 'David' }])
  }

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId))
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0)
  const tax = subtotal * 0.08
  const total = subtotal + tax

  const filteredServices = services.filter(s => s.category === activeCategory)

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen">
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-md h-[64px] bg-surface">
        <div className="flex items-center gap-md">
          <button className="p-2 hover:bg-surface-container-high rounded-full transition-all active:scale-95 duration-150">
            <span className="material-symbols-outlined text-primary">menu</span>
          </button>
          <h1 className="font-headline-md text-headline-md font-black tracking-tight text-primary">Sav.pos</h1>
        </div>
        <div className="flex items-center gap-sm">
          <button className="p-2 hover:bg-surface-container-high rounded-full transition-all active:scale-95 duration-150">
            <span className="material-symbols-outlined text-primary">search</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary-container text-[18px]">person</span>
          </div>
        </div>
      </header>

      <main className="pt-[64px] pb-[80px] min-h-screen flex flex-col md:flex-row">
        <section className="flex-1 p-md flex flex-col gap-md">
          <div className="bg-surface-container-low p-sm rounded-xl flex items-center gap-3 border border-outline-variant/30">
            <span className="material-symbols-outlined text-outline">barcode_scanner</span>
            <input autoFocus className="bg-transparent border-none focus:ring-0 w-full font-mono-md text-mono-md" placeholder="Scan or search services..." type="text"/>
          </div>
          <div className="flex gap-md overflow-x-auto no-scrollbar border-b border-outline-variant/20 pb-1">
            {['Massage', 'Facial', 'Products', 'Packages', 'Add-ons'].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-md py-2 font-label-md text-label-md whitespace-nowrap ${activeCategory === cat ? 'active-category' : 'text-on-surface-variant hover:text-primary'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
            {filteredServices.map(service => (
              <button
                key={service.id}
                className="bg-surface-container-lowest border border-outline-variant/20 p-md rounded-xl text-left hover:border-secondary transition-all active:scale-95 group"
                onClick={() => addToCart(service)}
              >
                <div className="aspect-square bg-surface-container-high rounded-lg mb-sm flex items-center justify-center">
                  <span className="material-symbols-outlined text-outline-variant text-[40px] group-hover:text-secondary transition-colors">{service.icon}</span>
                </div>
                <p className="font-label-md text-label-md text-on-surface mb-1">{service.name}</p>
                <p className="font-mono-md text-mono-md text-secondary">{service.duration} • ${service.price.toFixed(2)}</p>
              </button>
            ))}
          </div>
        </section>

        <aside className="w-full md:w-[400px] border-l border-outline-variant/20 flex flex-col bg-surface-container-lowest h-full">
          <div className="p-md border-b border-outline-variant/10">
            <div className="flex items-center justify-between mb-sm">
              <h2 className="font-label-md text-label-md uppercase tracking-wider text-outline">Customer</h2>
              <button className="text-secondary text-label-md hover:underline">+ New</button>
            </div>
            <div className="bg-secondary-container/10 p-md rounded-xl border border-secondary/20 flex items-center gap-md">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-secondary-container">person</span>
              </div>
              <div className="flex-1">
                <p className="font-label-md text-label-md text-on-surface">Elena Rodriguez</p>
                <p className="font-body-sm text-body-sm text-outline">Gold Member • 1,250 pts</p>
              </div>
              <button className="p-1 hover:bg-secondary-container/20 rounded-full transition-colors">
                <span className="material-symbols-outlined text-secondary">edit</span>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar p-md flex flex-col gap-sm">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-xl text-outline opacity-40">
                <span className="material-symbols-outlined text-[48px] mb-2">shopping_cart</span>
                <p className="font-body-sm">Cart is empty</p>
              </div>
            ) : (
              cart.map(item => (
                <div key={item.cartId} className="flex justify-between items-start group">
                  <div className="flex-1">
                    <p className="font-label-md text-label-md">{item.name} ({item.duration})</p>
                    <div className="flex gap-xs mt-1">
                      <span className="bg-surface-container-high px-2 py-0.5 rounded text-[10px] uppercase font-bold text-on-surface-variant">
                        Therapist: {item.therapist}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-mono-md text-mono-md">${item.price.toFixed(2)}</p>
                    <button onClick={() => removeFromCart(item.cartId)}
                      className="text-error/50 hover:text-error opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-md bg-surface-container-low border-t border-outline-variant/20">
            <div className="flex items-center justify-between mb-md">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">loyalty</span>
                <span className="font-body-md text-body-md">Redeem Points (500 pts = $10)</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input className="sr-only peer" type="checkbox"/>
                <div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
              </label>
            </div>
            <div className="space-y-2 border-t border-outline-variant/20 pt-md mb-md">
              <div className="flex justify-between text-on-surface-variant">
                <span className="font-body-md">Subtotal</span>
                <span className="font-mono-md">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <span className="font-body-md">Taxes (8%)</span>
                <span className="font-mono-md">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-outline-variant/10">
                <span className="font-headline-sm text-headline-sm">Total</span>
                <span className="font-headline-sm text-headline-sm text-primary">${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-primary text-on-primary font-label-md text-label-md py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all active:scale-[0.98]">
              CHECKOUT
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </aside>
      </main>

      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 pb-safe shadow-lg bg-surface">
        <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant/50 transition-colors" href="#">
          <span className="material-symbols-outlined">grid_view</span>
          <span className="font-label-sm text-label-sm">Rooms</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-5 py-1 active:scale-95 duration-200 ease-in-out" href="#">
          <span className="material-symbols-outlined">point_of_sale</span>
          <span className="font-label-sm text-label-sm">Sales</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant/50 transition-colors" href="#">
          <span className="material-symbols-outlined">analytics</span>
          <span className="font-label-sm text-label-sm">Reports</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant/50 transition-colors" href="#">
          <span className="material-symbols-outlined">settings</span>
          <span className="font-label-sm text-label-sm">Settings</span>
        </a>
      </nav>
    </div>
  )
}

export default CheckoutPage
END
