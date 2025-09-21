import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { ArrowRight, ChefHat, Building2, Utensils, Bath, CheckCircle, Award } from 'lucide-react';

export function SegmentsPage() {
  const segments = [
    {
      id: 'gourmet',
      title: 'Gourmet',
      subtitle: 'Cozinhas Gourmet & Áreas Gourmet',
      description: 'Soluções sofisticadas com acabamentos exclusivos para experiências culinárias excepcionais.',
      image: 'https://images.unsplash.com/photo-1695606452743-e4b6872df715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnb3VybWV0JTIwa2l0Y2hlbnxlbnwxfHx8fHwxNzU4MTI2Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: <ChefHat className="h-6 w-6" />,
      color: 'from-green-600 to-green-700',
      bgColor: 'bg-green-50/50',
      features: [
        'Acabamentos premium exclusivos',
        'Tecnologia antibacteriana',
        'Garantia estendida 10 anos'
      ],
      stats: { projects: '2.5k+', satisfaction: '98%', warranty: '10 anos' }
    },
    {
      id: 'hospitalar',
      title: 'Hospitalar',
      subtitle: 'Ambientes Médicos & Hospitalares',
      description: 'Produtos com tecnologia antibacteriana e conformidade total com normas sanitárias ANVISA.',
      image: 'https://images.unsplash.com/photo-1631507623104-aa66944677aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1lZGljYWwlMjBmYWNpbGl0eXxlbnwxfHx8fHwxNzU4MTI2Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: <Building2 className="h-6 w-6" />,
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50/50',
      features: [
        'Acionamento por sensor automático',
        'Certificação ANVISA',
        'Resistente a desinfetantes'
      ],
      stats: { projects: '800+', satisfaction: '99%', warranty: '5 anos' }
    },
    {
      id: 'cozinhas',
      title: 'Cozinhas',
      subtitle: 'Cozinhas Profissionais & Residenciais',
      description: 'Linha completa para uso intenso com performance profissional e design ergonômico.',
      image: 'https://images.unsplash.com/photo-1722649957265-372809976610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb21tZXJjaWFsJTIwa2l0Y2hlbnxlbnwxfHx8fHwxNzU4MTI2NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: <Utensils className="h-6 w-6" />,
      color: 'from-orange-600 to-orange-700',
      bgColor: 'bg-orange-50/50',
      features: [
        'Resistência a uso intenso',
        'Tecnologia anti-gotejamento',
        'Compatível sistemas comerciais'
      ],
      stats: { projects: '5k+', satisfaction: '97%', warranty: '7 anos' }
    },
    {
      id: 'banheiros',
      title: 'Banheiros',
      subtitle: 'Banheiros de Luxo & Convencionais',
      description: 'Soluções completas desde linhas econômicas até produtos de luxo com tecnologia de ponta.',
      image: 'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBiYXRocm9vbXxlbnwxfHx8fHwxNzU4MTI2NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: <Bath className="h-6 w-6" />,
      color: 'from-purple-600 to-purple-700',
      bgColor: 'bg-purple-50/50',
      features: [
        'Tecnologia economizadora de água',
        'Ampla variedade de estilos',
        'Opções para todos os orçamentos'
      ],
      stats: { projects: '15k+', satisfaction: '96%', warranty: '5 anos' }
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full">
            Nossos Segmentos
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Soluções Para Cada <span className="text-green-600">Segmento</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 30 anos desenvolvendo produtos específicos para cada ambiente e aplicação.
          </p>
        </div>

        {/* Segments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {segments.map((segment, index) => (
            <div key={segment.id} className={`${segment.bgColor} border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300`}>
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={segment.image}
                  alt={`${segment.title} - Metalplas`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                {/* Icon overlay */}
                <div className={`absolute top-4 left-4 w-10 h-10 bg-gradient-to-r ${segment.color} text-white rounded-lg flex items-center justify-center`}>
                  {segment.icon}
                </div>

                {/* Stats overlay */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <div className="flex items-center space-x-4 text-xs">
                    <div className="text-center">
                      <div className="font-bold text-gray-900">{segment.stats.projects}</div>
                      <div className="text-gray-600">Projetos</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-green-600">{segment.stats.satisfaction}</div>
                      <div className="text-gray-600">Satisfação</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Title and Description */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">{segment.title}</h2>
                  <p className="text-sm text-gray-600 mb-2">{segment.subtitle}</p>
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-2">
                    {segment.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {segment.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-xs leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <Button size="sm" className={`bg-gradient-to-r ${segment.color} text-white px-4 py-2 rounded-full w-full group text-sm`}>
                    Ver Produtos {segment.title}
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900">
              Precisa de uma Solução <span className="text-green-600">Personalizada?</span>
            </h2>
            
            <p className="text-gray-600">
              Nossa equipe pode desenvolver produtos sob medida para suas necessidades específicas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full">
                Falar com Especialista
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-6 py-2 rounded-full">
                Baixar Catálogos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}