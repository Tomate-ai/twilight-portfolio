import { useState, useEffect } from 'react';
import { Star, Sparkles, Calendar, Phone, Mail, Instagram, Facebook, MessageCircle, Scissors, Crown, Flower2, Eye, Palette, Heart, Clock, MapPin, Award } from 'lucide-react';

const TwilightPortfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'facial', 'hair', 'gallery', 'booking', 'story', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  // Logo Component
  const Logo = () => (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <Crown className="h-8 w-8 text-yellow-400" />
        <Sparkles className="h-4 w-4 text-purple-300 absolute -top-1 -right-1" />
      </div>
      <div>
        <h1 className="text-xl font-serif font-bold text-white">The Twilight Princess</h1>
        <p className="text-xs text-purple-200">by Minerva Pont</p>
      </div>
    </div>
  );

  const services = {
    facial: [
      {
        icon: <Sparkles className="h-6 w-6" />,
        title: "Limpieza Facial Profunda",
        description: "Purificación completa que revela tu luminosidad natural con técnicas especializadas.",
        benefits: ["Extracción profesional", "Hidratación profunda", "Piel renovada"]
      },
      {
        icon: <Heart className="h-6 w-6" />,
        title: "Lifting Facial con Masajes",
        description: "Técnicas orientales que redefinen tu rostro, tensando y rejuveneciendo naturalmente.",
        benefits: ["Tonificación muscular", "Reducción de líneas", "Circulación mejorada"]
      },
      {
        icon: <Eye className="h-6 w-6" />,
        title: "Armonización de Cejas",
        description: "Diseño personalizado que enmarca tu mirada y realza tu belleza única.",
        benefits: ["Diseño a medida", "Técnicas avanzadas", "Resultado duradero"]
      }
    ],
    hair: [
      {
        icon: <Scissors className="h-6 w-6" />,
        title: "Cortes Personalizados",
        description: "Cada corte es una obra de arte adaptada a tu estilo y personalidad.",
        benefits: ["Análisis facial", "Tendencias actuales", "Mantenimiento fácil"]
      },
      {
        icon: <Palette className="h-6 w-6" />,
        title: "Coloración Artística",
        description: "Colores que complementan tu tono de piel y reflejan tu esencia interior.",
        benefits: ["Colores premium", "Técnicas modernas", "Cuidado capilar"]
      },
      {
        icon: <Crown className="h-6 w-6" />,
        title: "Peinados de Ocasión",
        description: "Creaciones elegantes para momentos especiales que merecen brillar.",
        benefits: ["Diseño exclusivo", "Duración garantizada", "Accesorios incluidos"]
      }
    ]
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-purple-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Logo />
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Inicio', 'Facial', 'Cabello', 'Galería', 'Citas', 'Historia', 'Contacto'].map((item, index) => {
                const sectionId = ['hero', 'facial', 'hair', 'gallery', 'booking', 'story', 'contact'][index];
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionId)}
                    className={`text-sm font-medium transition-colors ${
                      activeSection === sectionId 
                        ? 'text-yellow-400' 
                        : 'text-white hover:text-purple-300'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/40 backdrop-blur-md border-t border-purple-400/20">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['Inicio', 'Facial', 'Cabello', 'Galería', 'Citas', 'Historia', 'Contacto'].map((item, index) => {
                  const sectionId = ['hero', 'facial', 'hair', 'gallery', 'booking', 'story', 'contact'][index];
                  return (
                    <button
                      key={item}
                      onClick={() => scrollToSection(sectionId)}
                      className="block px-3 py-2 text-white hover:text-purple-300 transition-colors"
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-indigo-900/50"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-pulse">
          <Star className="h-6 w-6 text-yellow-400" />
        </div>
        <div className="absolute bottom-32 right-16 animate-bounce">
          <Flower2 className="h-8 w-8 text-purple-300" />
        </div>
        <div className="absolute top-1/3 right-10 animate-pulse">
          <Sparkles className="h-5 w-5 text-white" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <Crown className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">
              The Twilight Princess
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-2">by Minerva Pont</p>
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-serif text-yellow-400 mb-4">
              "Más que estética: una experiencia de renacimiento."
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Donde la belleza se encuentra con la elegancia japonesa moderna, 
              creando una sinfonía de transformación que despierta tu esencia más radiante.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('booking')}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Calendar className="inline h-5 w-5 mr-2" />
              Agenda tu Cita
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              <Eye className="inline h-5 w-5 mr-2" />
              Ver Trabajos
            </button>
          </div>
        </div>
      </section>

      {/* Facial Services */}
      <section id="facial" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center mb-4">
              <Sparkles className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800">Fase Facial</h2>
              <Sparkles className="h-8 w-8 text-purple-600 ml-3" />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rituales de belleza que despiertan la luminosidad natural de tu rostro, 
              combinando técnicas ancestrales con innovación moderna.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.facial.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-t-4 border-purple-500">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
                <div className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-700">
                      <Star className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hair Services */}
      <section id="hair" className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center mb-4">
              <Crown className="h-8 w-8 text-yellow-400 mr-3" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Fase Cabello</h2>
              <Crown className="h-8 w-8 text-yellow-400 ml-3" />
            </div>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Transformaciones capilares que celebran tu individualidad, 
              creando looks únicos que reflejan tu personalidad y estilo de vida.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.hair.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-black p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-purple-200 leading-relaxed">{service.description}</p>
                </div>
                <div className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center text-sm text-purple-100">
                      <Star className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Galería de Transformaciones</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Cada imagen cuenta una historia de renovación, donde la belleza florece 
              y la confianza renace en cada transformación realizada.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="relative aspect-square bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300">
                  <div className="text-center text-white">
                    <Eye className="h-8 w-8 mx-auto mb-2 opacity-80" />
                    <p className="text-sm font-medium">Antes/Después</p>
                  </div>
                </div>
                <div className="absolute top-2 right-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-purple-200 mb-6">¿Lista para tu propia transformación?</p>
            <button
              onClick={() => scrollToSection('booking')}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Agenda tu Sesión
            </button>
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section id="booking" className="py-20 bg-gradient-to-br from-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">Información de Citas</h2>
            <p className="text-xl text-gray-600">Tu transformación comienza con una cita personalizada</p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-white text-center">
              <Clock className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold mb-2">Horarios de Atención</h3>
              <p className="text-purple-100">Servicios únicamente con cita previa</p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-center p-6 bg-purple-50 rounded-2xl">
                  <Sparkles className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Servicios Faciales</h4>
                  <p className="text-gray-600 mb-2">Lunes a Sábado</p>
                  <p className="text-sm text-purple-600 font-medium">Horarios flexibles disponibles</p>
                </div>
                <div className="text-center p-6 bg-yellow-50 rounded-2xl">
                  <Crown className="h-8 w-8 text-yellow-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Servicios Capilares</h4>
                  <p className="text-gray-600 mb-2">Martes a Sábado</p>
                  <p className="text-sm text-yellow-600 font-medium">Citas extendidas disponibles</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-400 p-6 rounded-r-2xl mb-8">
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Política de Reservas</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Los servicios se atienden solo con agendamiento previo. Para facial, de lunes a sábado. 
                      Para peluquería, de martes a sábado. Es necesario agendarse con 
                      <span className="font-semibold text-red-600"> mínimo 1 a 2 días de anticipación</span>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-6">Agenda tu Transformación</h4>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/595987155524"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors flex items-center justify-center"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+595987155524"
                    className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Llamar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section id="story" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 opacity-20">
          <Flower2 className="h-16 w-16 text-purple-300" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <Crown className="h-20 w-20 text-yellow-400" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Crown className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">La Historia de una Princesa</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-purple-400/30 rounded-3xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-purple-100 leading-relaxed mb-6 text-center italic">
                "En el crepúsculo dorado donde los sueños cobran vida, nace The Twilight Princess..."
              </p>
              
              <div className="text-white/90 leading-relaxed space-y-6 text-lg">
                <p>
                  Como una sinfonía de elegancia japonesa moderna entrelazada con la fantasía de la Belle Époque, 
                  <span className="text-yellow-400 font-semibold"> Minerva Pont</span> creó un santuario donde cada rostro 
                  encuentra su verdadera luminosidad y cada cabello danza con su propia melodía.
                </p>
                
                <p>
                  En este reino de transformación, las técnicas ancestrales se abrazan con la innovación contemporánea, 
                  creando rituales de belleza que despiertan no solo la estética exterior, sino el renacimiento del alma. 
                  Cada tratamiento es una ceremonia personalizada, cada corte una obra de arte viviente.
                </p>
                
                <p>
                  The Twilight Princess no es solo un lugar de belleza; es un portal hacia tu versión más radiante, 
                  donde la elegancia real se encuentra con la modernidad sofisticada, y donde cada cliente 
                  descubre que la verdadera magia reside en <span className="text-purple-300 font-semibold">sentirse hermosa desde adentro hacia afuera</span>.
                </p>
              </div>

              <div className="text-center mt-8 pt-6 border-t border-purple-400/30">
                <p className="text-2xl font-serif text-yellow-400 italic">
                  "Más que estética: una experiencia de renacimiento."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Mail className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">Conecta Conmigo</h2>
            <p className="text-xl text-gray-600">Tu transformación está a un mensaje de distancia</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6">Envía tu Consulta</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Servicio de Interés</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all">
                    <option>Selecciona un servicio</option>
                    <option>Limpieza Facial Profunda</option>
                    <option>Lifting Facial con Masajes</option>
                    <option>Armonización de Cejas</option>
                    <option>Corte Personalizado</option>
                    <option>Coloración Artística</option>
                    <option>Peinado de Ocasión</option>
                    <option>Consulta General</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    placeholder="Cuéntame sobre tu transformación ideal..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Mail className="inline h-5 w-5 mr-2" />
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-3xl p-8">
                <h3 className="text-2xl font-serif font-bold mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-purple-200" />
                    <span>+595 987 155 524</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-purple-200" />
                    <span>minerva@twilightprincess.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-purple-200" />
                    <span>San Lorenzo, Central Department, PY</span>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6">Sígueme en Redes</h3>
                <div className="grid grid-cols-3 gap-4">
                  <a
                    href="https://wa.me/595987155524"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white p-4 rounded-2xl text-center hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageCircle className="h-8 w-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">WhatsApp</span>
                  </a>
                  <a
                    href="https://instagram.com/twilightprincess"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-4 rounded-2xl text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <Instagram className="h-8 w-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                  <a
                    href="https://facebook.com/twilightprincess"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-4 rounded-2xl text-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <Facebook className="h-8 w-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">Facebook</span>
                  </a>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-gradient-to-br from-yellow-50 to-purple-50 border border-purple-200 rounded-3xl p-8 text-center">
                <Sparkles className="h-10 w-10 text-purple-600 mx-auto mb-4" />
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "Tu belleza es única, tu transformación será inolvidable."
                </blockquote>
                <cite className="text-purple-600 font-semibold">- Minerva Pont</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Logo />
              <p className="text-gray-400 mt-4 leading-relaxed">
                Donde la belleza se encuentra con la elegancia, creando experiencias de transformación únicas.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Limpieza Facial Profunda</li>
                <li>Lifting Facial con Masajes</li>
                <li>Armonización de Cejas</li>
                <li>Cortes Personalizados</li>
                <li>Coloración Artística</li>
                <li>Peinados de Ocasión</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto Rápido</h4>
              <div className="space-y-3">
                <a
                  href="https://wa.me/595987155524"
                  className="flex items-center text-gray-400 hover:text-green-400 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp
                </a>
                <a
                  href="tel:+595987155524"
                  className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  +595 987 155 524
                </a>
                <a
                  href="mailto:minerva@twilightprincess.com"
                  className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 The Twilight Princess by Minerva Pont. Todos los derechos reservados.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              "Más que estética: una experiencia de renacimiento."
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TwilightPortfolio;