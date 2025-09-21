import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Star, Award } from 'lucide-react';

export function Products() {
  const products = [
    {
      id: 1,
      name: "Série Executive",
      category: "Premium",
      description: "Linha executiva com design exclusivo e acabamentos nobres para ambientes sofisticados",
      image: "https://images.unsplash.com/photo-1668910225551-1080c3a12241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwZmF1Y2V0JTIwc3RhaW5sZXNzJTIwc3RlZWx8ZW58MXx8fHwxNzU4MTI0Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Bica Móvel 360°", "Inox 304", "Garantia 7 anos"],
      rating: 4.9,
      badge: "Mais Vendido"
    },
    {
      id: 2,
      name: "Série Luxury Bath",
      category: "Design",
      description: "Coleção premium para banheiros com tecnologia anti-gotejamento e controle de temperatura",
      image: "https://images.unsplash.com/photo-1595428774862-a79ab68dbabb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMGZhdWNldHxlbnwxfHx8fHwxNzU4MTI0Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Controle Termostático", "Cromado Premium", "Design Award"],
      rating: 4.8,
      badge: "Lançamento"
    },
    {
      id: 3,
      name: "Série Professional",
      category: "Industrial",
      description: "Linha robusta para uso comercial e industrial com máxima durabilidade e performance",
      image: "https://images.unsplash.com/photo-1667328931918-b6362ed95c1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbmR1c3RyaWFsJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzU4MTI0Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Alta Resistência", "Uso Intenso 24h", "Manutenção Facilitada"],
      rating: 4.7,
      badge: "Escolha Pro"
    }
  ];

  return (
    <section id="produtos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full">
            Nossos Produtos
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Produtos <span className="text-green-600">Premiados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra nossa linha completa de torneiras desenvolvidas com tecnologia 
            avançada, design inovador e materiais de primeira qualidade.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-2xl transition-all duration-500 bg-white border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.badge}
                    </span>
                  </div>
                  
                  {/* Category */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.rating})</span>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-gray-100">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full py-3 group">
                      Ver Detalhes
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* CTA */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Mais de 200 Modelos Disponíveis
            </h3>
            <p className="text-lg text-gray-600">
              Explore nosso catálogo completo com soluções para todos os segmentos 
              e necessidades. Desde linhas econômicas até produtos de luxo.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full">
              Ver Catálogo Completo
            </Button>
          </div>

          {/* Awards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <div className="font-bold text-gray-900 mb-2">Design Award</div>
              <div className="text-sm text-gray-600">Prêmio Internacional de Design 2024</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <div className="font-bold text-gray-900 mb-2">Top Quality</div>
              <div className="text-sm text-gray-600">Selo de Qualidade Superior</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}