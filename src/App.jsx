import React, { useState, useEffect } from 'react';
import { Play, X, Film, Scissors, MonitorPlay, Mail, Instagram, Linkedin, ChevronRight, ExternalLink, Phone } from 'lucide-react';

const App = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // GitHub Pages ke liye simple path logic
  // Agar aapka repo 'my-portfolio' hai toh ye prefix add karega
  const getPath = (name) => {
    return name; // Relative paths usually work best with base: './'
  };

  // Navbar scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reels Data - Photos 'public' folder mein honi chahiye
  const projects = [
    {
      id: 1,
      title: "Motion Graphics",
      category: "Instagram Reel",
      image: "thumb1.jpg", 
      description: "Pacing aur transitions par focus kiya gaya high-energy edit.",
      videoUrl: "https://www.instagram.com/reel/DOVCmYKkwJx/embed"
    },
    {
      id: 2,
      title: "UI Animation",
      category: "Instagram Reel",
      image: "thumb2.jpg", 
      description: "Smooth camera movements aur professional color grading ka combo.",
      videoUrl: "https://www.instagram.com/reel/DM4aYLGRX_d/embed"
    },
    {
      id: 3,
      title: "Trendy Edit",
      category: "Immersive Vlog",
      image: "thumb3.jpg", 
      description: "Sheher ki khubsurti ko darshata ek immersive cinematic edit.",
      videoUrl: "https://www.instagram.com/reel/DLpHCBqzZAK/embed"
    },
    {
      id: 4,
      title: "Fency Edit",
      category: "Instagram Reel",
      image: "thumb4.jpg", 
      description: "Music ke beats par transitions ko sync karne ka ek creative flow.",
      videoUrl: "https://www.instagram.com/reel/DKcQDdwhhcN/embed"
    },
    {
      id: 5,
      title: "3D Animation",
      category: "Event Reel",
      image: "thumb5.jpg", 
      description: "Style aur aesthetic visuals ke liye fast-paced editing style.",
      videoUrl: "https://www.instagram.com/reel/DReGSJWEbQ0/embed"
    },
    {
      id: 6,
      title: "Personal Touch",
      category: "Instagram Reel",
      image: "thumb6.jpg", 
      description: "Technical precision aur creative feeling ka perfect blend.",
      videoUrl: "https://www.instagram.com/reel/DR6SaopkbN1/embed"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-red-500 selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-neutral-950/90 backdrop-blur-md py-4 border-b border-neutral-800' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter uppercase flex items-center gap-2">
            <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
            Devraj<span className="text-neutral-400">Edits</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
            <a href="#work" className="hover:text-red-500 transition-colors">WORK</a>
            <a href="#about" className="hover:text-red-500 transition-colors">ABOUT</a>
            <a href="#contact" className="px-4 py-2 border border-white hover:bg-white hover:text-black transition-all rounded-full text-xs">LET'S TALK</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px] animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-3/5 text-center md:text-left">
            <h2 className="text-red-500 font-medium tracking-[0.2em] mb-4 text-xs uppercase tracking-widest">Digital Creator & Editor</h2>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
              BUILT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-500 to-neutral-500 italic">FRAME BY FRAME</span>
            </h1>
            <p className="text-neutral-400 max-w-xl mb-10 text-lg leading-relaxed">
              Hi, I'm Devraj. Main raw footage ko viral reels aur cinematic stories mein badalta hoon.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
                <a href="#work" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-red-600/20">VIEW MY WORK</a>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 relative flex justify-center">
            <div className="absolute inset-0 bg-red-600/10 blur-[100px] rounded-full"></div>
            <img 
              src="portfolio.jpg" 
              alt="Character Avatar" 
              className="relative w-full max-w-[400px] drop-shadow-[0_20px_50px_rgba(220,38,38,0.3)] animate-float"
              onError={(e) => {
                // Fallback agar image nahi milti
                e.target.onerror = null; 
                e.target.src = "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=1000"; 
              }}
            />
          </div>
        </div>
      </header>

      {/* Portfolio Grid */}
      <section id="work" className="py-24 bg-neutral-950">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 uppercase italic border-l-4 border-red-600 pl-4">Selected Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group relative cursor-pointer aspect-[9/16] bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 hover:border-red-600/50 transition-all"
                onClick={() => setActiveVideo(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500" 
                  onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000"; 
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <span className="text-red-500 text-[10px] font-black tracking-widest uppercase">{project.category}</span>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[60] bg-black/98 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative w-full max-w-sm aspect-[9/16] bg-black rounded-3xl overflow-hidden border border-neutral-800">
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-neutral-800/80 hover:bg-red-600 rounded-full flex items-center justify-center text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe 
              width="100%" 
              height="100%" 
              src={activeVideo.videoUrl} 
              frameBorder="0" 
              allow="autoplay; encrypted-media" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="py-24 bg-neutral-900/30">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-4xl font-bold mb-6 italic uppercase tracking-tighter">About <span className="text-red-600">Devraj</span></h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Main Gwalior, M.P. se ek Video Editor hoon jo raw footage ko impact-ful stories mein badalne mein believe karta hoon. Let's make something viral.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-24 bg-neutral-950 text-center border-t border-neutral-900">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black mb-10 italic uppercase tracking-tighter">Ready for the <span className="text-red-600">Edit?</span></h2>
          <a href="https://wa.me/916232597042" target="_blank" rel="noopener noreferrer" className="bg-white text-black hover:bg-red-600 hover:text-white px-10 py-5 rounded-full font-black text-xl transition-all">
             WHATSAPP ME
          </a>
          <p className="mt-16 text-neutral-800 text-[10px] font-bold tracking-[0.4em] uppercase">© {new Date().getFullYear()} DEVRAJ EDITS</p>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      ` }} />
    </div>
  );
};

export default App;