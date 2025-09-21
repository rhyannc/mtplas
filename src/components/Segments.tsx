import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { ArrowRight, ChefHat, Building2, Utensils, Bath, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Segments() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const segments = [
    {
      id: 'gourmet',
      title: 'Gourmet',
      subtitle: 'Cozinhas Gourmet & Áreas Gourmet',
      description: 'Soluções sofisticadas que combinam funcionalidade e elegância para experiências culinárias excepcionais.',
      image: 'https://images.unsplash.com/photo-1695606452743-e4b6872df715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnb3VybWV0JTIwa2l0Y2hlbnxlbnwxfHx8fHwxNzU4MTI2Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: <ChefHat className="h-6 w-6" />,
      color: 'from-green-600 to-green-700'
    },
    {
      id: 'hospitalar',
      title: 'Hospitalar',
      subtitle: 'Ambientes Médicos & Hospitalares',
      description: 'Produtos com tecnologia antibacteriana atendendo normas sanitárias rigorosas da área da saúde.',
      image: 'https://images.unsplash.com/photo-1631507623104-aa66944677aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1lZGljYWwlMjBmYWNpbGl0eXxlbnwxfHx8fHwxNzU4MTI2Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: <Building2 className="h-6 w-6" />,
      color: 'from-blue-600 to-blue-700'
    },
    {
      id: 'cozinhas',
      title: 'Cozinhas',
      subtitle: 'Cozinhas Profissionais & Residenciais',
      description: 'Linha completa desenvolvida para suportar uso intenso mantendo performance e beleza.',
      image: 'https://images.unsplash.com/photo-1722649957265-372809976610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb21tZXJjaWFsJTIwa2l0Y2hlbnxlbnwxfHx8fHwxNzU4MTI2NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: <Utensils className="h-6 w-6" />,
      color: 'from-orange-600 to-orange-700'
    },
    {
      id: 'banheiros',
      title: 'Banheiros',
      subtitle: 'Banheiros de Luxo & Convencionais',
      description: 'Soluções completas desde linhas econômicas até produtos de luxo com tecnologia de ponta.',
      image: 'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBiYXRocm9vbXxlbnwxfHx8fHwxNzU4MTI2NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: <Bath className="h-6 w-6" />,
      color: 'from-purple-600 to-purple-700'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % segments.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [segments.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % segments.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + segments.length) % segments.length);
  };

  return (
    <section id="segmentos" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full">
            Nossos Segmentos
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Soluções Para Cada <span className="text-green-600">Ambiente</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Cards Container */}
          <div className="overflow-hidden px-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-4 pb-4 "
              style={{ transform: `translateX(-${currentSlide * (100/3)}%)` }}
            >
              {[...segments, ...segments].map((segment, index) => (
                <div key={`${segment.id}-${index}`} className="w-1/3 flex-shrink-0">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className="h-48 relative overflow-hidden">
                      <ImageWithFallback
                        src={segment.image}
                        alt={`${segment.title} - Metalplas`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      {/* Icon overlay */}
                      <div className={`absolute top-4 left-4 w-10 h-10 bg-gradient-to-r ${segment.color} text-white rounded-lg flex items-center justify-center`}>
                        {segment.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-3">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{segment.title}</h3>
                        <p className="text-sm text-gray-600">{segment.subtitle}</p>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                        {segment.description}
                      </p>

                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full w-full group">
                        Ver Produtos
                        <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {segments.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-green-600 scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}