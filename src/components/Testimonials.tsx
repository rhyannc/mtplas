import { useState, useRef, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, HeadphonesIcon, MapPin, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ana Carolina Santos',
    role: 'Arquiteta',
    company: 'Studio AC Design',
    location: 'São Paulo, SP',
    rating: 5,
    comment: 'A Metalplas superou todas as nossas expectativas! Os metais sanitários entregues para nosso projeto residencial de alto padrão são simplesmente impecáveis. A qualidade do acabamento e a durabilidade dos produtos são excepcionais. Nossa cliente ficou encantada com o resultado final.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150',
    project: 'Residência de Luxo'
  },
  {
    id: '2',
    name: 'Roberto Oliveira',
    role: 'Chef Executivo',
    company: 'Restaurante Bella Vista',
    location: 'Rio de Janeiro, RJ',
    rating: 5,
    comment: 'Como chef, preciso de equipamentos que suportem o uso intenso de uma cozinha profissional. As torneiras e misturadores da Metalplas funcionam perfeitamente há mais de 2 anos, sem nenhum problema. O design também é elegante e moderno, ideal para nosso ambiente gourmet.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150',
    project: 'Cozinha Gourmet Profissional'
  },
  {
    id: '3',
    name: 'Dra. Mariana Costa',
    role: 'Diretora Técnica',
    company: 'Hospital Santa Clara',
    location: 'Belo Horizonte, MG',
    rating: 5,
    comment: 'A confiabilidade dos produtos Metalplas é fundamental para o nosso ambiente hospitalar. Adquirimos uma linha completa para a reforma de nossos banheiros e vestiários. A facilidade de limpeza e a resistência antimicrobiana dos metais são essenciais para nossa rotina de higienização.',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150',
    project: 'Renovação Hospitalar'
  },
  {
    id: '4',
    name: 'Carlos Mendes',
    role: 'Engenheiro Civil',
    company: 'Construtora Horizonte',
    location: 'Brasília, DF',
    rating: 5,
    comment: 'Já especificamos Metalplas em mais de 15 empreendimentos. A qualidade é consistente, os prazos são cumpridos e o suporte técnico é excepcional. Nossos clientes sempre elogiam a beleza e funcionalidade dos produtos. É nossa fornecedora de confiança para projetos de alto padrão.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150',
    project: 'Múltiplos Empreendimentos'
  },
  {
    id: '5',
    name: 'Letícia Fernandes',
    role: 'Designer de Interiores',
    company: 'LF Ambientes',
    location: 'Curitiba, PR',
    rating: 5,
    comment: 'A variedade de acabamentos da Metalplas permite criar ambientes únicos e sofisticados. Especialmente os acabamentos Black e Rose Gold, que dão um toque moderno e exclusivo aos projetos. Meus clientes sempre perguntam sobre a marca dos metais sanitários!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150',
    project: 'Apartamento Moderno'
  },
  {
    id: '6',
    name: 'João Pedro Silva',
    role: 'Proprietário',
    company: 'Pousada Vista Mar',
    location: 'Florianópolis, SC',
    rating: 5,
    comment: 'Reformamos toda a pousada com produtos Metalplas e o resultado foi incrível! Os hóspedes sempre comentam sobre a qualidade dos banheiros. Após 3 anos de uso intenso, os produtos continuam como novos. Investimento que vale a pena para quem busca qualidade e durabilidade.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150',
    project: 'Hotelaria'
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full">
            Depoimentos
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            O que nossos <span className="text-green-600">clientes dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 30 anos transformando espaços e superando expectativas. 
            Conheça as experiências de quem confia na Metalplas.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${currentIndex}-${index}`}
                className="bg-white rounded-2xl shadow-lg p-8 relative transition-all duration-500 hover:shadow-xl"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <Quote className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Comment */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 text-sm lg:text-base">
                  "{testimonial.comment}"
                </blockquote>

                {/* Project Tag */}
                <div className="mb-6">
                  <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {testimonial.project}
                  </span>
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <ImageWithFallback
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900 truncate">{testimonial.name}</p>
                    <p className="text-green-600 text-sm truncate">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs truncate">{testimonial.company}</p>
                    <p className="text-gray-400 text-xs truncate">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden justify-center space-x-4 mt-8">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="w-10 h-10 rounded-full border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="w-10 h-10 rounded-full border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-green-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-center text-white mt-16">
          <h3 className="text-3xl font-bold mb-4">
            Precisa de Atendimento?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Nossa equipe de especialistas está pronta para criar a solução perfeita para o seu projeto.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <HeadphonesIcon className="h-6 w-6" />
              </div>
              <div className="text-left">
                <div className="font-bold">(11) 3456-7890</div>
                <div className="text-sm opacity-80">Seg-Sex: 8h às 18h</div>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-12 bg-white/20"></div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="text-left">
                <div className="font-bold">servicos@metalplas.com.br</div>
                <div className="text-sm opacity-80">Resposta em até 2h</div>
              </div>
            </div>
          </div>
          
          <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium">
            Falar com Especialista
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}