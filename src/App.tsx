import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  ChevronRight, 
  Star, 
  ArrowLeft, 
  Menu, 
  X,
  Heart,
  Share2,
  Navigation
} from 'lucide-react';

// --- Types ---
interface Destination {
  id: string;
  name: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  description: string;
  tags: string[];
}

// --- Mock Data ---
const DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'Amalfi Coast',
    location: 'Italy',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1000',
    price: 1200,
    rating: 4.9,
    description: 'The Amalfi Coast is a 50-kilometer stretch of coastline along the southern edge of Italy’s Sorrentine Peninsula, in the Campania region. It’s a popular holiday destination, with sheer cliffs and a rugged shoreline dotted with small beaches and pastel-colored fishing villages.',
    tags: ['Luxury', 'Coastal', 'Romantic']
  },
  {
    id: '2',
    name: 'Santorini',
    location: 'Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=1000',
    price: 950,
    rating: 4.8,
    description: 'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera.',
    tags: ['Island', 'Sunset', 'Iconic']
  },
  {
    id: '3',
    name: 'Kyoto',
    location: 'Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1000',
    price: 1500,
    rating: 4.9,
    description: 'Kyoto, once the capital of Japan, is a city on the island of Honshu. It’s famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses.',
    tags: ['Culture', 'Zen', 'Heritage']
  },
  {
    id: '4',
    name: 'Bora Bora',
    location: 'French Polynesia',
    image: 'https://images.unsplash.com/photo-1500522144261-ea64433bbe27?auto=format&fit=crop&q=80&w=1000',
    price: 2200,
    rating: 5.0,
    description: 'Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia. Surrounded by sand-fringed motus (islets) and a turquoise lagoon protected by a coral reef, it’s known for its scuba diving.',
    tags: ['Tropical', 'Overwater', 'Exclusive']
  }
];

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
        <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
      </div>
      <span className="text-xl font-display font-bold tracking-tight">VIBRANT</span>
    </div>
    <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/60">
      <a href="#" className="text-white hover:text-white transition-colors">Destinations</a>
      <a href="#" className="hover:text-white transition-colors">Experiences</a>
      <a href="#" className="hover:text-white transition-colors">About</a>
      <a href="#" className="hover:text-white transition-colors">Contact</a>
    </div>
    <div className="flex items-center gap-4">
      <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
        <Search size={20} />
      </button>
      <button className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors">
        <Menu size={20} />
      </button>
      <button className="hidden md:block px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white/90 transition-colors">
        Book Now
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen flex flex-col justify-center px-6 md:px-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000" 
        alt="Hero Background" 
        className="w-full h-full object-cover opacity-60"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </div>
    
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 max-w-3xl"
    >
      <span className="inline-block mb-4 px-4 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold text-white/60">
        Luxury Travel Reimagined
      </span>
      <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8 text-gradient">
        Discover the <br /> 
        <span className="italic font-normal">Unseen</span> World
      </h1>
      <p className="text-lg md:text-xl text-white/60 font-light max-w-xl mb-10 leading-relaxed">
        Curated experiences for the discerning traveler. We bring you closer to the world's most exclusive and breathtaking destinations.
      </p>
      
      <div className="flex flex-wrap gap-4">
        <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
          Start Exploring <ChevronRight size={16} />
        </button>
        <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white/10 transition-colors">
          Watch Film
        </button>
      </div>
    </motion.div>
    
    <div className="absolute bottom-10 left-6 md:left-20 z-10 flex gap-8">
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Elevation</span>
        <span className="text-xl font-display">2,450m</span>
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Temperature</span>
        <span className="text-xl font-display">18°C</span>
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Location</span>
        <span className="text-xl font-display">Swiss Alps</span>
      </div>
    </div>
  </section>
);

const DestinationCard = ({ destination, onClick }: { destination: Destination, onClick: () => void }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer"
    onClick={onClick}
  >
    <img 
      src={destination.image} 
      alt={destination.name} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
    
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <div className="flex justify-between items-end">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-white/60 mb-1 block">
            {destination.location}
          </span>
          <h3 className="text-2xl font-display font-bold mb-2">{destination.name}</h3>
          <div className="flex gap-2">
            {destination.tags.map(tag => (
              <span key={tag} className="text-[8px] uppercase tracking-widest px-2 py-0.5 border border-white/20 rounded-full text-white/40">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="text-right">
          <span className="text-[10px] uppercase tracking-widest text-white/40 block">From</span>
          <span className="text-xl font-display font-bold">${destination.price}</span>
        </div>
      </div>
    </div>
    
    <button className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20">
      <Heart size={18} className="text-white" />
    </button>
  </motion.div>
);

const DetailView = ({ destination, onBack }: { destination: Destination, onBack: () => void }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] bg-black overflow-y-auto"
  >
    <div className="relative h-[60vh] md:h-[70vh]">
      <img 
        src={destination.image} 
        alt={destination.name} 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      
      <div className="absolute top-8 left-6 md:left-12 flex gap-4">
        <button 
          onClick={onBack}
          className="p-3 bg-black/40 backdrop-blur-md rounded-full hover:bg-black/60 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
      </div>
      
      <div className="absolute top-8 right-6 md:right-12 flex gap-4">
        <button className="p-3 bg-black/40 backdrop-blur-md rounded-full hover:bg-black/60 transition-colors">
          <Heart size={20} />
        </button>
        <button className="p-3 bg-black/40 backdrop-blur-md rounded-full hover:bg-black/60 transition-colors">
          <Share2 size={20} />
        </button>
      </div>
      
      <div className="absolute bottom-12 left-6 md:left-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/60 mb-2 block">
            {destination.location}
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">{destination.name}</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-brand-gold">
              <Star size={16} fill="currentColor" />
              <span className="text-sm font-bold">{destination.rating}</span>
            </div>
            <span className="text-white/40">•</span>
            <span className="text-sm text-white/60">124 Reviews</span>
          </div>
        </motion.div>
      </div>
    </div>
    
    <div className="px-6 md:px-12 py-12 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
      <div className="md:col-span-2">
        <h2 className="text-3xl font-display font-bold mb-6">About the Experience</h2>
        <p className="text-lg text-white/60 font-light leading-relaxed mb-8">
          {destination.description}
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="p-6 glass-card rounded-2xl">
            <Calendar className="text-white/40 mb-3" size={24} />
            <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-1">Duration</span>
            <span className="text-sm font-medium">7 Days</span>
          </div>
          <div className="p-6 glass-card rounded-2xl">
            <Users className="text-white/40 mb-3" size={24} />
            <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-1">Group Size</span>
            <span className="text-sm font-medium">Max 8</span>
          </div>
          <div className="p-6 glass-card rounded-2xl">
            <Navigation className="text-white/40 mb-3" size={24} />
            <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-1">Transport</span>
            <span className="text-sm font-medium">Private Jet</span>
          </div>
          <div className="p-6 glass-card rounded-2xl">
            <Star className="text-white/40 mb-3" size={24} />
            <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-1">Service</span>
            <span className="text-sm font-medium">Ultra-Luxury</span>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <div className="sticky top-24 p-8 glass-card rounded-3xl">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm text-white/60">Starting from</span>
            <span className="text-3xl font-display font-bold">${destination.price}</span>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="p-4 bg-white/5 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-white/40" />
                <span className="text-sm">Select Dates</span>
              </div>
              <ChevronRight size={16} className="text-white/40" />
            </div>
            <div className="p-4 bg-white/5 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Users size={18} className="text-white/40" />
                <span className="text-sm">2 Travelers</span>
              </div>
              <ChevronRight size={16} className="text-white/40" />
            </div>
          </div>
          
          <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-white/90 transition-colors mb-4">
            Reserve Now
          </button>
          <p className="text-center text-[10px] text-white/40 uppercase tracking-widest">
            No payment required today
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black selection:bg-white selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        
        <section className="px-6 md:px-20 py-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-4 block">
                Exclusive Collection
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-bold">
                Curated <span className="italic font-normal">Destinations</span>
              </h2>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
                All
              </button>
              <button className="px-6 py-2 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                Europe
              </button>
              <button className="px-6 py-2 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                Asia
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DESTINATIONS.map((dest, idx) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <DestinationCard 
                  destination={dest} 
                  onClick={() => setSelectedDestination(dest)} 
                />
              </motion.div>
            ))}
          </div>
        </section>
        
        <section className="px-6 md:px-20 py-24 bg-white/5">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=1000" 
                  alt="Experience" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 glass-card rounded-3xl p-8 hidden md:block">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                  <Star className="text-black" size={20} fill="currentColor" />
                </div>
                <h4 className="text-xl font-display font-bold mb-2">Private Concierge</h4>
                <p className="text-sm text-white/60 leading-relaxed">
                  24/7 dedicated support for every detail of your journey.
                </p>
              </div>
            </div>
            
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-4 block">
                The Vibrant Standard
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                Beyond <br /> <span className="italic font-normal">Expectations</span>
              </h2>
              <p className="text-lg text-white/60 font-light leading-relaxed mb-10">
                We believe travel should be more than just visiting a place. It's about the stories you tell, the people you meet, and the moments that take your breath away.
              </p>
              
              <ul className="space-y-6 mb-10">
                {[
                  'Hand-picked luxury accommodations',
                  'Exclusive access to private events',
                  'Customized itineraries by local experts',
                  'Seamless door-to-door logistics'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    <span className="text-sm font-medium text-white/80 uppercase tracking-widest">{item}</span>
                  </li>
                ))}
              </ul>
              
              <button className="px-10 py-4 border border-white text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white hover:text-black transition-all">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="px-6 md:px-20 py-20 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">VIBRANT</span>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed">
              Redefining luxury travel through curated experiences and unparalleled service. Your journey begins here.
            </p>
          </div>
          
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest mb-6">Explore</h5>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Experiences</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Private Jet</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cruises</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest mb-6">Company</h5>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
          <span className="text-[10px] uppercase tracking-widest text-white/20">
            © 2026 Vibrant Travel Explorer. All rights reserved.
          </span>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/20">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedDestination && (
          <DetailView 
            destination={selectedDestination} 
            onBack={() => setSelectedDestination(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
