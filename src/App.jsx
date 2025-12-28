import React, { useState, useEffect } from 'react';
import { Play, X, Film, Scissors, MonitorPlay, Mail, Instagram, Linkedin, ChevronRight, ExternalLink, Phone } from 'lucide-react';

const App = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reels Data - Devraj, yahan image path badalkar apni screenshots lagayein
  const projects = [
    {
      id: 1,
      title: "Motion Graphics",
      category: "Instagram Reel",
      // Screenshot ko public folder mein 'thumb1.jpg' naam se save karein
      image: "/thumb1.jpg", 
      description: "Pacing aur transitions par focus kiya gaya high-energy edit.",
      videoUrl: "https://www.instagram.com/reel/DOVCmYKkwJx/embed"
    },
    {
      id: 2,
      title: "UI Animation",
      category: "Instagram Reel",
      // Screenshot ko public folder mein 'thumb2.jpg' naam se save karein
      image: "/thumb2.jpg", 
      description: "Smooth camera movements aur professional color grading ka combo.",
      videoUrl: "https://www.instagram.com/reel/DM4aYLGRX_d/embed"
    },
    {
      id: 3,
      title: "Trendy Edit",
      category: "Immersive Vlog",
      image: "/thumb3.jpg", 
      description: "Sheher ki khubsurti ko darshata ek immersive cinematic edit.",
      videoUrl: "https://www.instagram.com/reel/DLpHCBqzZAK/embed"
    },
    {
      id: 4,
      title: "Fency Edit",
      category: "Instagram Reel",
      image: "/thumb4.jpg", 
      description: "Music ke beats par transitions ko sync karne ka ek creative flow.",
      videoUrl: "https://www.instagram.com/reel/DKcQDdwhhcN/embed"
    },
    {
      id: 5,
      title: "3D Animation",
      category: "Event Reel",
      image: "/thumb5.jpg", 
      description: "Style aur aesthetic visuals ke liye fast-paced editing style.",
      videoUrl: "https://www.instagram.com/reel/DReGSJWEbQ0/embed"
    },
    {
      id: 6,
      title: "Personal Touch",
      category: "Instagram Reel",
      image: "/thumb6.jpg", 
      description: "Technical precision aur creative feeling ka perfect blend.",
      videoUrl: "https://www.instagram.com/reel/DR6SaopkbN1/embed"
    }
  ];

  const services = [
    { icon: <Scissors className="w-8 h-8" />, title: "Video Editing", desc: "Har frame ko kahani banata hoon, seamless transitions ke saath." },
    { icon: <Film className="w-8 h-8" />, title: "Color Grading", desc: "Cinematic looks aur professional color correction." },
    { icon: <MonitorPlay className="w-8 h-8" />, title: "Motion Graphics", desc: "Titles aur animations jo viewer ko engage rakhein." },
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
            <a href="#services" className="hover:text-red-500 transition-colors">SERVICES</a>
            <a href="#about" className="hover:text-red-500 transition-colors">ABOUT</a>
            <a href="#contact" className="px-4 py-2 border border-white hover:bg-white hover:text-black transition-all rounded-full">LET'S TALK</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Character Focus */}
      <header className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px] animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-3/5 text-center md:text-left">
            <h2 className="text-red-500 font-medium tracking-[0.2em] mb-4 text-sm md:text-base uppercase tracking-widest">Digital Creator & Editor</h2>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-[1.1]">
              BUILT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-500 to-neutral-500 italic">FRAME BY FRAME</span>
            </h1>
            <p className="text-neutral-400 max-w-xl mb-10 text-lg mx-auto md:mx-0 leading-relaxed">
              Hi, I'm Devraj. Main raw footage ko impact-ful cinematic stories mein badalta hoon. Let's make your content viral.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#work" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105">
                    <Play className="w-4 h-4 fill-current" /> VIEW PORTFOLIO
                </a>
                <a href="#contact" className="inline-flex items-center justify-center gap-2 border border-neutral-700 hover:border-white text-white px-8 py-4 rounded-full font-bold transition-all">
                    GET IN TOUCH
                </a>
            </div>
          </div>
          
          {/* Character Image */}
          <div className="w-full md:w-2/5 flex justify-center items-center relative">
            <div className="absolute inset-0 bg-red-600/10 blur-[60px] rounded-full"></div>
            <img 
              src="/portfolio.jpg" 
              alt="Character Avatar" 
              className="relative w-full max-w-[450px] drop-shadow-[0_20px_50px_rgba(220,38,38,0.3)] animate-float"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=1000"; 
              }}
            />
          </div>
        </div>
      </header>

      {/* Software Stats */}
      <div className="border-y border-neutral-900 bg-neutral-950 py-10 relative overflow-hidden">
        <div className="container mx-auto px-6 flex flex-wrap justify-center md:justify-between gap-8 text-neutral-500 font-bold uppercase tracking-[0.3em] text-xs">
          <span className="hover:text-white transition-colors cursor-default">Adobe Premiere Pro</span>
          <span className="hover:text-white transition-colors cursor-default">CAPCUT</span>
          <span className="hover:text-white transition-colors cursor-default">After Effects</span>
        </div>
      </div>

      {/* Portfolio Grid */}
      <section id="work" className="py-24 bg-neutral-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-2">Selected Works</h2>
              <p className="text-neutral-400 font-medium">Mere haal hi ke kuch khaas projects.</p>
            </div>
            <div className="hidden md:block text-neutral-500 font-mono text-xs tracking-widest opacity-50">
                [ GRID_LAYOUT_ACTIVE ]
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group relative cursor-pointer"
                onClick={() => setActiveVideo(project)}
              >
                <div className="aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden relative border border-neutral-800 group-hover:border-red-600/50 transition-all duration-300">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                    onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000"; 
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                      <Play className="w-8 h-8 fill-white text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-red-500 text-[10px] font-black uppercase tracking-widest">{project.category}</span>
                    <h3 className="text-xl font-bold mt-1 text-white">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12">
          <div className="relative w-full max-w-lg max-h-[90vh] aspect-[9/16] bg-black rounded-3xl shadow-2xl overflow-hidden border border-neutral-800">
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-neutral-800/80 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors text-white backdrop-blur-md"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full h-full">
              <iframe 
                width="100%" 
                height="100%" 
                src={activeVideo.videoUrl} 
                title={activeVideo.title}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="py-24 bg-neutral-900/50 relative overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-transparent opacity-10 rounded-full blur-3xl"></div>
            <img 
              src="/portfolio.jpg" 
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=1000";
              }}
              alt="Character Devraj" 
              className="relative w-full max-w-[400px] rounded-2xl drop-shadow-2xl grayscale-0 hover:grayscale transition-all duration-500"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-12 h-1 bg-red-600 mb-6"></div>
            <h2 className="text-4xl font-bold mb-6 italic tracking-tight uppercase">Meet the Brain Behind <br/><span className="text-red-600">The Edits</span></h2>
            <p className="text-neutral-400 mb-6 leading-relaxed text-lg">
              Hi, I'm Devraj Ahirwar. Main Gwalior, M.P. se ek passionate Video Editor aur Content Creator hoon. Pichle 2 saalon se main creators aur brands ko digital presence banane mein madad kar raha hoon.
            </p>
            <p className="text-neutral-400 mb-8 leading-relaxed text-lg italic opacity-80">
              Mera character mere creative energy ko represent karta hai—Bold, Dynamic aur Impactful. Jab main edit karta hoon, toh har frame mein wahi energy dalne ki koshish karta hoon.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10 text-[10px] font-black tracking-widest text-neutral-500">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                    CREATIVITY FIRST
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                    FAST DELIVERY
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                    VIRAL TRANSITIONS
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                    CINEMATIC MOOD
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-neutral-950 text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Mastered Skills</h2>
            <p className="text-neutral-400 text-lg">
                High-energy reels se lekar cinematic vlogs tak, har cheez mein technical perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-10 bg-neutral-900 rounded-[2rem] border border-neutral-800 hover:border-red-600/50 transition-all hover:-translate-y-2 group">
                <div className="w-20 h-20 bg-neutral-950 rounded-2xl flex items-center justify-center mx-auto mb-8 text-white group-hover:text-red-500 group-hover:scale-110 transition-all shadow-xl">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-neutral-500 leading-relaxed font-medium">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-neutral-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase italic">Start the <span className="text-red-600">Revolution.</span></h2>
          <p className="text-neutral-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Main freelance projects aur collaborations ke liye available hoon. Chalo milkar kuch viral banate hain.
          </p>
          <a href="https://wa.me/916232597042" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-4 bg-white text-black hover:bg-red-500 hover:text-white px-10 py-5 rounded-full font-black text-xl transition-all mb-16 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-red-600/30">
            <Phone className="w-6 h-6" /> WHATSAPP ME <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>

          <div className="flex justify-center gap-12">
            <a href="https://www.instagram.com/devraj.ae" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-all transform group-hover:rotate-12 border border-neutral-800">
                <Instagram className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-neutral-500 uppercase">INSTAGRAM</span>
            </a>
            <a href="https://wa.me/916232597042" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-all transform group-hover:-rotate-12 border border-neutral-800">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-neutral-500 uppercase">WHATSAPP</span>
            </a>
            <a href="https://www.linkedin.com/in/devraj-ahirwar-a0717134a/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-all transform group-hover:rotate-12 border border-neutral-800">
                <Linkedin className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-neutral-500 uppercase">LINKEDIN</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-neutral-950 border-t border-neutral-900 text-center text-neutral-700 text-[10px] font-black tracking-[0.4em] uppercase">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} DEVRAJ EDITS // ALL SYSTEMS GO</p>
        </div>
      </footer>

      {/* Tailwind Animations */}
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