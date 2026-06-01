import { MapPin, Search, ShoppingBag, Clock, Phone, Navigation, Store, Tag, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { PROMOTIONS, CATEGORIES, BEST_SELLERS, TESTIMONIALS } from '../data';

export default function Storefront() {
  return (
    <div className="relative pb-24 md:pb-0 font-sans">
      {/* Mobile Top Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm lg:px-8 lg:h-20">
        <div className="flex items-center gap-3">
          <div className="text-2xl md:text-3xl font-black tracking-tighter text-red-600 uppercase">
            Mikthona
          </div>
        </div>
        <div className="flex items-center gap-4 text-slate-600">
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-bold border border-blue-100 uppercase tracking-wider">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Open Now until 11 PM
          </div>
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors"><Search size={24} strokeWidth={2.5} /></button>
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors relative">
            <ShoppingBag size={24} strokeWidth={2.5} />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-600 rounded-full border-2 border-white"></span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-6 md:py-8 md:px-8 max-w-7xl mx-auto">
        <div className="bg-red-600 rounded-3xl p-8 md:p-12 flex flex-col justify-end relative overflow-hidden shadow-xl min-h-[400px]">
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 pointer-events-none">
            <svg className="w-full h-full text-white" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="80" cy="20" r="40" />
              <circle cx="100" cy="80" r="30" />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col md:w-2/3 lg:w-3/4">
            <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-md text-xs font-bold uppercase tracking-widest w-fit mb-4">
              Neighborhood Favorite
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[0.9] mb-4 uppercase">
              Everything you need,<br/>right around the corner.
            </h1>
            <p className="text-red-50 text-lg md:text-xl font-medium max-w-xl mb-8 leading-relaxed">
              Fresh snacks, ice-cold drinks, and daily essentials. Fast, friendly, and always local at Mikthona.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-2xl font-black shadow-lg hover:scale-105 transition-transform tracking-wide">
                <Navigation size={20} className="mb-0.5" strokeWidth={2.5} />
                GET DIRECTIONS
              </button>
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-red-900/20 text-white border-2 border-white/30 px-8 py-4 rounded-2xl font-black hover:bg-white/10 transition-colors tracking-wide">
                BROWSE DEALS
              </button>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto">
        {/* Weekly Promotions */}
        <section className="px-4 py-8 md:px-8">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Weekly Deals</h2>
              <p className="text-slate-500 font-medium mt-1">Exclusive offers for our local community</p>
            </div>
            <button className="text-blue-600 font-bold hover:underline uppercase tracking-wide text-sm">View all</button>
          </div>
          
          <div className="flex overflow-x-auto gap-6 pb-6 snap-x -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar">
            {PROMOTIONS.map((promo, idx) => (
              <motion.div 
                key={promo.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`flex-none w-72 md:w-80 rounded-3xl p-8 text-white snap-center relative overflow-hidden shadow-xl ${promo.color}`}
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <h3 className="font-black text-2xl mb-3 relative z-10 leading-tight">{promo.title}</h3>
                <p className="text-white/90 font-medium text-sm mb-8 relative z-10 line-clamp-2">{promo.description}</p>
                <div className="inline-block bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest relative z-10 border border-white/10">
                  {promo.validUntil}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="px-4 py-8 md:px-8">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-6 uppercase">Aisles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((category) => (
              <button 
                key={category.id}
                className="bg-white p-6 rounded-3xl border border-slate-200 flex items-center justify-between group cursor-pointer hover:shadow-md hover:border-slate-300 transition-all active:scale-95"
              >
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-1 text-slate-900">{category.name}</h3>
                  <p className="text-slate-500 text-sm font-medium">Shop items &rarr;</p>
                </div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold transition-transform group-hover:scale-110 ${category.color}`}>
                  <category.icon size={26} strokeWidth={2.5} />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Best Sellers */}
        <section className="px-4 py-8 md:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Neighborhood Favorites</h2>
              <p className="text-slate-500 font-medium mt-1">What your neighbors are picking up today</p>
            </div>
            <button className="text-blue-600 font-bold hover:underline mt-2 sm:mt-0 uppercase tracking-wide text-sm hidden sm:block">Shop all</button>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {BEST_SELLERS.map((product) => (
              <div key={product.id} className="bg-white p-4 md:p-5 rounded-3xl shadow-sm border border-slate-200 group flex flex-col">
                <div className="relative aspect-square mb-4 bg-slate-100 rounded-2xl overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-white text-slate-900 text-[10px] font-black uppercase tracking-widest px-2 py-1 md:px-3 md:py-1.5 rounded-md shadow-sm border border-slate-100">
                      {product.badge}
                    </div>
                  )}
                </div>
                <div className="flex flex-col flex-1 px-1">
                  <p className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">{product.category}</p>
                  <h3 className="font-extrabold text-slate-900 text-sm md:text-lg leading-tight mb-3 flex-1 line-clamp-2 md:line-clamp-none">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-black text-lg md:text-xl text-slate-900">${product.price.toFixed(2)}</span>
                    <button className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                      <ShoppingBag size={18} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Loyalty Program Teaser */}
        <section className="px-4 py-8 md:px-8">
          <div className="bg-blue-700 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="relative z-10 md:w-2/3">
              <h4 className="font-black text-white leading-tight mb-2 text-2xl md:text-4xl uppercase tracking-tighter">JOIN MIKTHONA REWARDS</h4>
              <p className="text-xs md:text-sm font-bold text-blue-100 mb-6 uppercase tracking-widest leading-relaxed">EARN POINTS ON EVERY SNACK & SODA PURCHASE.</p>
              
              <div className="flex items-center gap-3 mb-8">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-blue-700 bg-slate-200"></div>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-blue-700 bg-slate-300"></div>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-blue-700 bg-slate-400"></div>
                </div>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-wider text-white">+800 LOCALS ALREADY JOINED</span>
              </div>
              
              <button className="bg-white hover:bg-slate-100 text-blue-700 px-8 py-4 rounded-2xl font-black transition-colors active:scale-95 shadow-xl uppercase tracking-wide w-full md:w-auto text-center">
                Join for Free
              </button>
            </div>
            
            <div className="relative z-10 w-full max-w-[200px] aspect-[1/2] rounded-[2rem] border-8 border-white bg-slate-50 shadow-2xl flex flex-col items-center justify-center p-4 transform md:rotate-12 flex-none translate-y-4 md:translate-y-0 hidden sm:flex">
              <div className="w-16 h-16 bg-gradient-to-tr from-red-500 to-blue-500 rounded-full mb-4 shadow-inner"></div>
              <div className="w-3/4 h-3 bg-slate-200 rounded-full mb-2"></div>
              <div className="w-1/2 h-3 bg-slate-200 rounded-full mb-8"></div>
              
              <div className="w-full bg-white border border-slate-100 rounded-xl p-3 mb-2 shadow-sm">
                <div className="flex justify-between items-center">
                  <div className="w-1/2 h-2 bg-slate-200 rounded-full"></div>
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Contact */}
        <section className="px-4 py-8 md:px-8 max-w-7xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-sm">
            <div className="h-64 md:h-auto md:w-1/2 bg-slate-200 relative bg-[url('https://images.unsplash.com/photo-1574632292356-046603cc74c0?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center">
              <div className="absolute inset-0 bg-slate-900/30"></div>
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1.5 rounded text-[10px] font-black uppercase tracking-widest shadow-lg text-slate-900">
                GOALS CONVERSION MAP
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center shadow-2xl -rotate-12 border-4 border-white relative">
                  <Store size={28} strokeWidth={2.5} />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 border-2 border-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tighter mb-2 uppercase">Visit Us Today</h2>
                <p className="text-slate-500 mb-8 font-medium text-lg">123 Local Street, Central District</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-sm font-bold border-b border-slate-100 pb-3">
                    <span className="text-slate-500 uppercase tracking-wide">Parking</span>
                    <span className="text-slate-900 bg-slate-100 px-3 py-1 rounded-md">FREE CUSTOMER LOT</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-bold border-b border-slate-100 pb-3">
                    <span className="text-slate-500 uppercase tracking-wide">Transit</span>
                    <span className="text-slate-900 bg-slate-100 px-3 py-1 rounded-md">BUS STOP (LINE 42)</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <button className="flex-1 bg-slate-900 text-white py-4 px-6 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors uppercase tracking-wide">
                  <Navigation size={20} />
                  Open in Maps
                </button>
                <div className="flex gap-4 sm:w-1/2">
                  <button className="flex-1 bg-[#25D366] text-white py-4 rounded-2xl font-black flex items-center justify-center hover:bg-[#1DA851] transition-colors shadow-md">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  </button>
                  <button className="flex-1 bg-white border border-slate-200 text-slate-900 py-4 rounded-2xl font-black flex items-center justify-center hover:bg-slate-50 transition-colors shadow-sm">
                    <Phone size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 px-6 py-6 flex flex-col md:flex-row items-center justify-between pb-24 md:pb-6">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 md:mb-0">
          &copy; 2024 Mikthona Convenience Corp. &bull; Local First
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-[10px] font-black text-slate-500">
          <span className="text-green-600">FAST CHECKOUT</span>
          <span>CURBSIDE PICKUP</span>
          <span>DAILY FRESH STOCK</span>
        </div>
      </footer>

      {/* Mobile Sticky Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-slate-100 pb-safe z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="flex justify-around items-center p-3">
          <button className="flex flex-col items-center gap-1 text-red-600">
            <Store size={22} className="fill-red-50" strokeWidth={2.5} />
            <span className="text-[10px] font-semibold">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
            <Tag size={22} />
            <span className="text-[10px] font-medium">Promos</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
            <Star size={22} />
            <span className="text-[10px] font-medium">Rewards</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
            <MapPin size={22} />
            <span className="text-[10px] font-medium">Find Us</span>
          </button>
        </div>
      </div>
      
    </div>
  );
}
