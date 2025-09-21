import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Heart, Share2, ShoppingCart, Star, Check } from 'lucide-react';
import { Button } from './ui/button';

interface Product {
  id: string;
  name: string;
  model: string;
  image: string;
  category: string;
  price?: string;
  description: string;
  colors: string[];
  applications: string[];
  specifications: { [key: string]: string };
}

interface ProductDetailPageProps {
  productId: string;
  onBack: () => void;
}

// Mock product data - em uma aplicação real, isso viria de uma API
const getProductById = (id: string): Product | null => {
  const products: { [key: string]: Product } = {
    '1': {
      id: '1',
      name: 'Torneira Gourmet Premium',
      model: 'TGP-2024-BK',
      image: 'https://images.unsplash.com/photo-1595428774862-a79ab68dbabb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      category: 'black',
      price: 'Consulte',
      description: 'A Torneira Gourmet Premium representa o estado da arte em design e funcionalidade para cozinhas modernas. Desenvolvida especialmente para ambientes gourmet e cozinhas profissionais, esta torneira combina tecnologia avançada com acabamento premium black fosco. Seu design ergonômico e funcional oferece total controle do fluxo de água, ideal para chefs exigentes e entusiastas da gastronomia. O acabamento resistente a impressões digitais e manchas garante que sua cozinha mantenha sempre um aspecto impecável.',
      colors: ['Black Fosco', 'Cromo Polido', 'Rose Gold'],
      applications: ['Cozinhas Gourmet', 'Restaurantes', 'Residenciais Premium'],
      specifications: {
        'Material': 'Latão cromado com acabamento PVD',
        'Pressão de trabalho': '1 a 40 mca (10 a 400 kPa)',
        'Temperatura máxima': '70°C',
        'Rosca de entrada': '1/2" BSP',
        'Certificações': 'INMETRO, ISO 9001',
        'Garantia': '5 anos contra defeitos de fabricação',
        'Dimensões': '35cm (altura) x 22cm (alcance)',
        'Peso': '2.8 kg'
      }
    },
    '2': {
      id: '2',
      name: 'Misturador Monocomando',
      model: 'MM-1805-BK',
      image: 'https://images.unsplash.com/photo-1646592491489-ebdf758b9d11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      category: 'black',
      price: 'Consulte',
      description: 'O Misturador Monocomando MM-1805-BK é a solução perfeita para quem busca praticidade e elegância. Com acionamento único para água fria e quente, este misturador oferece total controle de temperatura e vazão com um simples movimento. Seu design minimalista e moderno se adapta perfeitamente a qualquer estilo de ambiente, enquanto a tecnologia de vedação cerâmica garante durabilidade e funcionamento suave por anos. O acabamento black fosco premium não apenas impressiona visualmente, mas também oferece resistência superior ao uso diário.',
      colors: ['Black Fosco', 'Cromo', 'Rose'],
      applications: ['Banheiros', 'Lavabos', 'Cozinhas Compactas'],
      specifications: {
        'Material': 'Liga de latão com tratamento PVD',
        'Pressão de trabalho': '1 a 50 mca (10 a 500 kPa)',
        'Temperatura máxima': '80°C',
        'Rosca de entrada': '1/2" BSP',
        'Cartucho': 'Cerâmico 40mm',
        'Garantia': '3 anos contra defeitos de fabricação',
        'Dimensões': '28cm (altura) x 18cm (alcance)',
        'Peso': '1.9 kg'
      }
    }
  };
  
  return products[id] || null;
};

// Produtos similares mock
const getSimilarProducts = (currentId: string, category: string) => {
  const allProducts = [
    { id: '3', name: 'Torneira Cozinha Industrial', model: 'TCI-3000-BK', image: 'https://images.unsplash.com/photo-1566447695072-9f6cc2c84fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', category: 'black' },
    { id: '4', name: 'Ducha Higiênica Premium', model: 'DHP-1200-BK', image: 'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', category: 'black' },
    { id: '5', name: 'Torneira Bancada Luxo', model: 'TBL-2500-CR', image: 'https://images.unsplash.com/photo-1595428774862-a79ab68dbabb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', category: 'cromo' },
    { id: '6', name: 'Misturador Parede Clássico', model: 'MPC-1600-CR', image: 'https://images.unsplash.com/photo-1646592491489-ebdf758b9d11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', category: 'cromo' }
  ];
  
  return allProducts
    .filter(p => p.id !== currentId && p.category === category)
    .slice(0, 3);
};

const categoryInfo: { [key: string]: { name: string; color: string } } = {
  'black': { name: 'Black', color: '#000000' },
  'cromo': { name: 'Cromo', color: '#C0C0C0' },
  'rose': { name: 'Rose', color: '#E91E63' },
  'rose-gold': { name: 'Rose Gold', color: '#E91E63' },
};

export function ProductDetailPage({ productId, onBack }: ProductDetailPageProps) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [isFavorite, setIsFavorite] = useState(false);

  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Produto não encontrado</h1>
            <Button onClick={onBack} className="mt-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const categoryData = categoryInfo[product.category];
  const similarProducts = getSimilarProducts(product.id, product.category);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar aos produtos
          </button>
        </div>

        {/* Product Detail */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="p-8">
              <div className="aspect-square relative overflow-hidden rounded-2xl bg-gray-100">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Action buttons */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button 
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm border-2 transition-all ${
                      isFavorite 
                        ? 'bg-red-500 border-red-500 text-white' 
                        : 'bg-white/80 border-white text-gray-600 hover:text-red-500'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
                  </button>
                  <button className="w-10 h-10 bg-white/80 backdrop-blur-sm border-2 border-white rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>

                {/* Category badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full">
                    <div 
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: categoryData?.color }}
                    ></div>
                    <span className="text-sm font-medium">{categoryData?.name}</span>
                  </div>
                </div>
              </div>

              {/* Color Selection */}
              <div className="mt-6">
                <h3 className="font-medium text-gray-900 mb-3">Cores Disponíveis</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(index)}
                      className={`px-4 py-2 rounded-lg border-2 text-sm transition-all ${
                        selectedColor === index
                          ? 'border-green-600 bg-green-50 text-green-700'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-green-300'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-8">
              <div className="space-y-6">
                {/* Title and Rating */}
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                  <p className="text-green-600 font-medium text-lg">Modelo: {product.model}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">(4.8) • 127 avaliações</span>
                  </div>
                </div>

                {/* Price */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-gray-900">{product.price}</div>
                  <p className="text-gray-600">Entre em contato para orçamento personalizado</p>
                </div>

                {/* Applications */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Aplicações</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app) => (
                      <span key={app} className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                        <Check className="h-3 w-3 mr-1" />
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-4">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Solicitar Orçamento
                  </Button>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                      Catálogo PDF
                    </Button>
                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                      Falar com Especialista
                    </Button>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="border-t pt-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Garantia 5 anos</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Frete grátis</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Instalação inclusa</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Suporte técnico</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="border-t border-gray-200">
            <div className="px-8">
              <nav className="flex space-x-8" aria-label="Tabs">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'description'
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Descrição
                </button>
                <button
                  onClick={() => setActiveTab('specifications')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'specifications'
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Especificações
                </button>
                <button
                  onClick={() => setActiveTab('installation')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'installation'
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Instalação
                </button>
              </nav>
            </div>

            <div className="px-8 py-6">
              {activeTab === 'description' && (
                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-900">{key}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'installation' && (
                <div className="space-y-4">
                  <p className="text-gray-600">
                    A instalação deve ser realizada por profissional qualificado seguindo as normas técnicas brasileiras.
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-medium text-yellow-800 mb-2">Importante:</h4>
                    <ul className="text-yellow-700 text-sm space-y-1">
                      <li>• Verifique a pressão da rede antes da instalação</li>
                      <li>• Use vedações adequadas nas conexões</li>
                      <li>• Teste o funcionamento antes de finalizar</li>
                      <li>• Mantenha manual e nota fiscal para garantia</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Produtos Similares</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarProducts.map((similar) => (
                <div key={similar.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className="aspect-square relative overflow-hidden">
                    <ImageWithFallback
                      src={similar.image}
                      alt={similar.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <div 
                        className="w-6 h-6 rounded-full border-2 border-white shadow-lg"
                        style={{ backgroundColor: categoryInfo[similar.category]?.color }}
                      ></div>
                    </div>
                    
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {similar.name}
                    </h3>
                    <p className="text-green-600 font-medium text-sm mb-4">
                      Modelo: {similar.model}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div 
                          className="w-4 h-4 rounded-full border border-gray-300"
                          style={{ backgroundColor: categoryInfo[similar.category]?.color }}
                        ></div>
                        <span className="text-sm text-gray-600">{categoryInfo[similar.category]?.name}</span>
                      </div>
                      
                      <button className="text-green-600 hover:text-green-700 font-medium text-sm transition-colors">
                        Solicitar Orçamento
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Interessado neste produto?</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Nossa equipe de especialistas pode ajudar você a escolher a solução ideal para seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-600 px-8 py-3 rounded-full font-medium hover:bg-green-50 transition-colors">
              Solicitar Orçamento Personalizado
            </Button>
            <Button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-green-600 transition-colors">
              Agendar Visita Técnica
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}