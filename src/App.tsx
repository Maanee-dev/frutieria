import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Leaf, Truck, CheckCircle, 
  MapPin, Phone, Mail, Clock, ShoppingCart, 
  Instagram, ChevronRight, Info
} from 'lucide-react';

const WHATSAPP_NUMBER = "+9607903930"; // Using the actual phone number
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`;

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-offwhite font-sans selection:bg-brand-orange selection:text-white">
      {/* Navigation */}
      <div className="fixed top-0 w-full z-50 px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6 transition-all duration-300">
        <nav className={`max-w-7xl mx-auto flex justify-between items-center bg-white/95 backdrop-blur-md rounded-full px-4 sm:px-8 py-3.5 sm:py-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-brand-lightgrey/50 ${isScrolled ? 'shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white/100' : ''}`}>
          <div className="flex items-center gap-2">
            <a href="#" className="flex items-center justify-center">
              <img src="/logo.svg" alt="Fruteria.mv Logo" className="h-8 sm:h-10 w-auto transform hover:scale-105 transition-transform -mt-[10px] ml-0" />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-brand-dark font-display font-bold text-xs uppercase tracking-[0.1em]">
            <a href="#about" className="hover:text-brand-orange transition-colors">About</a>
            <a href="#features" className="hover:text-brand-orange transition-colors">Benefits</a>
            <a href="#fresh-stock" className="hover:text-brand-orange transition-colors">Fresh Stock</a>
            <a href="#contacts" className="hover:text-brand-orange transition-colors">Contacts</a>
          </div>

          <div className="hidden md:block">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-brand-dark hover:bg-brand-orange text-white px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-md hover:shadow-lg">
              Order Now <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-brand-dark" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-x-4 top-20 z-40 bg-white rounded-3xl p-6 shadow-2xl flex flex-col gap-4 md:hidden"
          >
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-dark text-lg font-medium border-b border-brand-lightgrey pb-2">About</a>
            <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-dark text-lg font-medium border-b border-brand-lightgrey pb-2">Benefits</a>
            <a href="#fresh-stock" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-dark text-lg font-medium border-b border-brand-lightgrey pb-2">Fresh Stock</a>
            <a href="#contacts" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-dark text-lg font-medium border-b border-brand-lightgrey pb-2">Contacts</a>
            
            <a href={WHATSAPP_LINK} className="mt-4 bg-brand-dark text-white text-center py-3 rounded-full font-medium flex items-center justify-center gap-2">
               Order on WhatsApp <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-24 px-4 sm:px-6 lg:px-8 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[750px] rounded-[2.5rem] overflow-hidden shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0">
               <img 
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1600&auto=format&fit=crop" 
                alt="Fresh fruits layout" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Overlapping Typography */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-32 sm:pb-16 px-4 sm:px-0">
              <h1 className="font-display font-bold text-white tracking-tight flex flex-col sm:flex-row items-center justify-center sm:scale-y-[1.05]">
                <span className="text-[15vw] md:text-[120px] lg:text-[160px] xl:text-[180px] leading-[0.8] sm:leading-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">FRUTERIA</span>
                <span className="text-[15vw] md:text-[120px] lg:text-[160px] xl:text-[180px] leading-[0.8] sm:leading-none text-brand-orange sm:-ml-3 mt-[-2%] sm:mt-0 drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">.MV</span>
              </h1>
              <p className="mt-4 sm:mt-8 font-medium text-white/90 text-sm sm:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase drop-shadow-md text-center max-w-sm sm:max-w-none">Premium Fresh Produce</p>
            </div>

            {/* CTA Buttons */}
            <div className="absolute bottom-6 sm:bottom-12 w-full flex flex-row justify-center items-center gap-3 sm:gap-5 z-20 px-4">
              <a href={WHATSAPP_LINK} className="bg-[#25D366] text-white hover:bg-[#1ebd5a] px-5 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-[0_8px_30px_rgba(37,211,102,0.3)] flex flex-1 sm:flex-none items-center justify-center gap-2 sm:gap-3 transition-transform hover:scale-105 group border border-white/20">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform shrink-0" />
                <span className="hidden sm:inline">Order on WhatsApp</span>
                <span className="sm:hidden">Order Now</span>
              </a>
              <a href="#catalogue" className="bg-white/90 backdrop-blur-md text-brand-dark hover:bg-white px-4 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-2xl flex flex-1 sm:flex-none items-center justify-center gap-1.5 sm:gap-3 transition-transform hover:scale-105 group">
                <span className="hidden sm:inline">View Fresh Stock</span>
                <span className="sm:hidden text-center">View Stock</span>
                <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-brand-dark text-white flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform"><ChevronRight className="w-3 h-3 sm:w-4 sm:h-4"/></div>
              </a>
            </div>

            {/* Vertical Subtext */}
            <div className="absolute top-1/2 left-6 -translate-y-1/2 hidden lg:flex flex-col gap-4 text-white/80 text-xs font-semibold tracking-widest writing-vertical-rl items-center">
              <span className="w-px h-8 bg-white/40 mb-2"></span>
              EST. 2024
              <span className="w-px h-8 bg-white/40 mt-2"></span>
              FRESH
            </div>
          </div>
        </div>
      </section>

      {/* Features & Intro Section (Matching Reference) */}
      <section id="features" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Intro */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-5xl font-display font-medium text-brand-dark leading-[1.1] uppercase">
              FRUTERIA.MV - FRESH PRODUCE DELIVERED TO THOSE WHO STRIVE FOR A HEALTHY LIFESTYLE
            </h2>
            <p className="text-brand-charcoal/80 text-lg md:text-xl font-light leading-relaxed">
              We source the finest fruits and vegetables without compromise, bringing natural freshness directly to your home, café, or business across the islands.
            </p>
            
            <div className="w-full h-48 md:h-64 rounded-[2rem] overflow-hidden mt-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-brand-lightgrey/50">
               <img 
                 src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800&q=80" 
                 alt="Fresh variety" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                 referrerPolicy="no-referrer"
               />
            </div>
          </div>

          {/* Right Column: Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-brand-lightgrey/50 flex flex-col justify-between aspect-square group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-brand-lightgrey flex items-center justify-center mb-auto group-hover:scale-110 group-hover:bg-brand-teal/10 transition-all duration-300">
                <Leaf className="w-6 h-6 text-brand-teal" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-brand-dark mb-1">100%</h3>
                <p className="text-brand-charcoal/60 text-sm font-medium">natural freshness</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-brand-lightgrey/50 flex flex-col justify-between aspect-square group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-brand-peach/30 flex items-center justify-center mb-auto group-hover:scale-110 group-hover:bg-brand-peach/50 transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-brand-orange" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-brand-dark mb-1">Quality</h3>
                <p className="text-brand-charcoal/60 text-sm font-medium">in every delivery</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-brand-lightgrey/50 flex flex-col justify-between aspect-square group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-brand-lightgrey flex items-center justify-center mb-auto group-hover:scale-110 group-hover:bg-brand-teal/10 transition-all duration-300">
                <MapPin className="w-6 h-6 text-brand-teal" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-brand-dark mb-1">Local</h3>
                <p className="text-brand-charcoal/60 text-sm font-medium">Male & Hulhumale</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-brand-lightgrey/50 flex flex-col justify-between aspect-square group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-brand-peach/30 flex items-center justify-center mb-auto group-hover:scale-110 group-hover:bg-brand-peach/50 transition-all duration-300">
                <Phone className="w-6 h-6 text-brand-orange" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-brand-dark mb-1">Easy</h3>
                <p className="text-brand-charcoal/60 text-sm font-medium">WhatsApp ordering</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Catalogue / Daily Fresh Stock Section */}
      <section id="catalogue" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-brand-dark uppercase tracking-tight mb-2">Daily Fresh Stock</h2>
            <p className="text-brand-charcoal/60 text-lg font-light">- for a healthy life without compromise</p>
          </div>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full border border-brand-lightgrey flex items-center justify-center text-brand-charcoal hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-all">
               <ChevronRight className="w-5 h-5 rotate-180" />
            </button>
            <button className="w-10 h-10 rounded-full border border-brand-lightgrey flex items-center justify-center text-brand-charcoal hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-all">
               <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex overflow-x-auto gap-6 sm:gap-8 pb-8 snap-x snap-mandatory scrollbar-hide">
          {[
            { id: 1, name: "Juicy Orange", cat: "FRUITS", weight: "1 kg", price: "55.00", image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=400" },
            { id: 2, name: "Fresh Strawberry", cat: "BERRIES", weight: "250 g", price: "80.00", image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=400" },
            { id: 3, name: "Crisp Green Apple", cat: "FRUITS", weight: "1 kg", price: "65.00", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=400" },
            { id: 4, name: "Cherry Tomatoes", cat: "VEGETABLES", weight: "500 g", price: "45.00", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=400" },
            { id: 5, name: "Honey Mango", cat: "FRUITS", weight: "1 kg", price: "65.00", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=400" },
          ].map((item) => (
            <div key={item.id} className="min-w-[280px] w-[280px] sm:min-w-[320px] sm:w-[320px] flex-none snap-start group cursor-pointer relative bg-white rounded-[2rem] p-4 transition-all shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-brand-lightgrey/50 hover:shadow-xl hover:-translate-y-1">
               {/* Image container */}
               <div className="w-full aspect-[4/5] bg-brand-offwhite rounded-[1.5rem] overflow-hidden mb-6 relative border border-brand-lightgrey/50 text-center flex items-center justify-center p-4">
                 <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-[1rem] transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                 
                 {/* Quick Add Button */}
                 <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                   <a href={WHATSAPP_LINK} className="bg-white text-brand-dark px-6 py-3 rounded-full font-bold shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-brand-orange hover:text-white transition-colors flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 duration-300">
                     <ShoppingCart className="w-4 h-4" /> Add to Order
                   </a>
                 </div>
               </div>

               {/* Details */}
               <div className="px-3 pb-2">
                 <div className="flex justify-between items-start mb-2 border-brand-lightgrey/50">
                   <div>
                     <p className="text-[10px] uppercase font-bold tracking-[0.15em] text-brand-orange mb-1.5">{item.cat}</p>
                     <h3 className="font-display font-medium text-xl text-brand-dark leading-tight">{item.name}</h3>
                   </div>
                 </div>
                 <div className="flex items-baseline gap-2 mt-4">
                   <p className="font-display font-bold text-xl text-brand-dark">MVR {item.price}</p>
                   <p className="text-xs text-brand-charcoal/50 font-medium">/ {item.weight}</p>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Highlight Section */}
      <section id="fresh-stock" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 lg:max-w-md z-10 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange font-bold text-[10px] uppercase tracking-widest mb-6">
              <Leaf className="w-3 h-3" /> Season Special
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-brand-dark mb-4 leading-[0.9]">
              Mango<br/>Season
            </h2>
            <div className="relative inline-block mb-10 w-fit mt-2">
              <p className="text-brand-charcoal text-lg md:text-xl font-light uppercase tracking-wide relative z-10">
                The perfect island treat
              </p>
              <svg className="absolute w-12 h-12 sm:w-16 sm:h-16 -bottom-8 -right-4 sm:-right-10 text-brand-stroke -rotate-12 z-20 opacity-50" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20,20 Q60,80 90,80" />
                <path d="M75,65 L90,80 L75,95" />
              </svg>
            </div>
            <a href={WHATSAPP_LINK} className="inline-flex bg-brand-dark text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-brand-orange hover:-translate-y-1 transition-all items-center gap-3">
              Order Fresh Mangoes <ChevronRight className="w-5 h-5"/>
            </a>
          </div>

          <div className="flex-1 relative flex justify-center items-center w-full max-w-2xl mx-auto h-[400px] sm:h-[500px]">
            {/* Background Circular Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[400px] sm:h-[400px] bg-brand-sand/50 rounded-full z-0"></div>
            
            {/* Circular Text (Approximated with absolute positioning elements) */}
            <div className="absolute top-8 right-12 z-0 hidden lg:block text-brand-orange font-display font-bold uppercase tracking-widest text-xs rotate-12">
              <svg viewBox="0 0 100 100" className="w-32 h-32 animate-spin-slow">
                <path id="curve" fill="transparent" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                <text className="text-[10px]" fill="currentColor">
                  <textPath href="#curve">
                    FRESH CITRUS & MANGO & FRESH CITRUS
                  </textPath>
                </text>
              </svg>
            </div>
            
            {/* Main Image */}
            <img 
               src="https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=800&auto=format&fit=crop" 
               alt="Fresh Mangoes" 
               className="relative z-10 w-4/5 h-auto object-cover rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white"
               referrerPolicy="no-referrer"
            />
          </div>

          {/* Partial Carousel View (Right Edge) */}
          <div className="hidden lg:flex w-48 h-48 bg-brand-peach/20 rounded-full absolute -right-24 top-1/2 -translate-y-1/2 items-center justify-start overflow-hidden pointer-events-none">
            <img 
               src="https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=300&q=80" 
               alt="Bananas" 
               className="w-32 h-32 object-cover object-left rounded-full opacity-80 shadow-md ml-4"
            />
          </div>

        </div>
      </section>

      {/* Contact & Hours Section */}
      <section id="contacts" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Contact Details & Hours */}
            <div className="w-full lg:w-1/2 flex flex-col gap-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-display font-medium text-brand-dark uppercase tracking-tight mb-4">Visit Us</h2>
                <p className="text-brand-charcoal/80 text-lg font-light">Stop by our store to handpick your favorite fresh produce.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Location & Contact */}
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-brand-dark tracking-wide mb-1 uppercase text-sm">Address</h4>
                      <p className="text-brand-charcoal text-sm leading-relaxed">
                        Vessel, Feedhifannu Magu<br/>
                        Fuvahmulah 18014<br/>
                        Maldives
                      </p>
                      <a href="https://maps.google.com/?q=Vessel,Feedhifannu+Magu,Fuvahmulah+18014" target="_blank" rel="noreferrer" className="text-brand-teal text-sm font-medium mt-2 inline-flex border-b border-brand-teal/30 hover:border-brand-teal transition-colors">
                        Map of Fruteria
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-brand-dark tracking-wide mb-1 uppercase text-sm">Phone</h4>
                      <a href="tel:7903930" className="text-brand-charcoal text-sm hover:text-brand-teal transition-colors block">
                        790-3930
                      </a>
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-teal text-white flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="w-full">
                      <h4 className="font-display font-bold text-brand-dark tracking-wide mb-3 uppercase text-sm">Opening Hours</h4>
                      <div className="flex flex-col gap-2 text-sm text-brand-charcoal">
                        <div className="flex justify-between border-b border-brand-lightgrey pb-2">
                          <span className="font-medium whitespace-nowrap">Sat - Thu</span>
                          <span className="text-right whitespace-nowrap">
                            8 am – 12 pm<br/>
                            1:30 pm – 5:30 pm<br/>
                            8 pm – 10 pm
                          </span>
                        </div>
                        <div className="flex justify-between pt-1">
                          <span className="font-medium text-brand-orange">Friday</span>
                          <span className="text-right text-brand-orange font-medium whitespace-nowrap">
                            8 am – 11 am<br/>
                            2 pm – 5:30 pm<br/>
                            8 pm – 10 pm
                          </span>
                        </div>
                      </div>
                      
                      <a href={WHATSAPP_LINK} className="text-xs text-brand-charcoal/50 hover:text-brand-dark transition-colors mt-6 block underline-offset-2 underline border-brand-lightgrey">
                        Suggest new hours
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map / Image Container */}
            <div className="w-full lg:w-1/2 aspect-video lg:aspect-[4/3] bg-brand-lightgrey/30 rounded-[2.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-brand-lightgrey/50 relative group cursor-pointer" onClick={() => window.open('https://maps.google.com/?q=Vessel,Feedhifannu+Magu,Fuvahmulah+18014', '_blank')}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.102635921869!2d73.41444555000001!3d-0.2974861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24b59bc65511b51b%3A0xe62c82c3c6f1345!2sFuvahmulah!5e0!3m2!1sen!2smv!4v1700000000000!5m2!1sen!2smv" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 pointer-events-none opacity-80 group-hover:opacity-100"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[6px] lg:border-[12px] border-white/20 rounded-[2.5rem] z-10 mix-blend-overlay"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-brand-dark text-xs flex items-center gap-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                Open in Maps <ChevronRight className="w-3 h-3" />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-24 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-medium text-brand-dark uppercase tracking-tight mb-4">Follow Us</h2>
            <p className="text-brand-charcoal/80 text-lg font-light max-w-2xl">Catch the latest fresh arrivals, seasonal fruits, and healthy lifestyle tips on our Instagram.</p>
            <a href="https://instagram.com/fruteria.mv" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-[#d68523] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform">
              <Instagram className="w-5 h-5" />
              @fruteria.mv
            </a>
          </div>

          {/* Insta Grid Mockup */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8">
            <div className="aspect-square rounded-[2rem] overflow-hidden group relative bg-brand-lightgrey shadow-[0_4px_20px_rgb(0,0,0,0.05)] transform hover:-translate-y-2 transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500&q=80" alt="Instagram Post 1" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 w-10 h-10 transform group-hover:scale-110 drop-shadow-lg" />
              </div>
            </div>
            <div className="aspect-square rounded-[2rem] overflow-hidden group relative bg-brand-lightgrey shadow-[0_4px_20px_rgb(0,0,0,0.05)] transform hover:-translate-y-2 transition-all duration-300 md:mt-12">
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&q=80" alt="Instagram Post 2" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 w-10 h-10 transform group-hover:scale-110 drop-shadow-lg" />
              </div>
            </div>
            <div className="aspect-square rounded-[2rem] overflow-hidden group relative bg-brand-lightgrey shadow-[0_4px_20px_rgb(0,0,0,0.05)] transform hover:-translate-y-2 transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=500&q=80" alt="Instagram Post 3" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 w-10 h-10 transform group-hover:scale-110 drop-shadow-lg" />
              </div>
            </div>
            <div className="aspect-square rounded-[2rem] overflow-hidden group relative bg-brand-lightgrey shadow-[0_4px_20px_rgb(0,0,0,0.05)] transform hover:-translate-y-2 transition-all duration-300 md:mt-12">
              <img src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&q=80" alt="Instagram Post 4" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 w-10 h-10 transform group-hover:scale-110 drop-shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-white py-8 border-t border-brand-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-charcoal/50 uppercase tracking-widest font-medium gap-4">
          <div className="flex gap-4">
            <a href="#about" className="hover:text-brand-dark">About</a>
            <a href="#features" className="hover:text-brand-dark">Features</a>
            <a href="#fresh-stock" className="hover:text-brand-dark">Products</a>
            <a href="#contacts" className="hover:text-brand-dark">Contacts</a>
          </div>
          <img src="/logo.svg" alt="Fruteria.mv Logo" className="h-6 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
          <div>
            <a href="#" className="hover:text-brand-dark">Privacy Policy</a>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center group"
      >
        <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[200px] group-hover:ml-3 font-bold transition-all duration-300">
          Order Now
        </span>
      </a>
    </div>
  );
}

