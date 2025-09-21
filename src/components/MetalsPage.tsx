import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Product {
  id: string;
  name: string;
  model: string;
  image: string;
  category: string;
}

// Mock data - você pode substituir por dados reais da API
const categories = [
  { id: 'black', name: 'Black', color: '#000000' },
  { id: 'cromo', name: 'Cromo', color: '#C0C0C0' },
  { id: 'rose', name: 'Rose', color: '#E91E63' },
  { id: 'rose-gold', name: 'Rose Gold', color: '#E91E63' },
  { id: 'b80', name: 'B80', color: '#8B4513' },
  { id: 'b86', name: 'B86', color: '#A0522D' },
  { id: 'c42', name: 'C42', color: '#4682B4' }
];

const mockProducts: Product[] = [
  // Black products
  { id: '1', name: 'Torneira Gourmet Premium', model: 'TGP-2024-BK', image: 'https://images.unsplash.com/photo-1595428774862-a79ab68dbabb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', category: 'black' },
  { id: '2', name: 'Misturador Monocomando', model: 'MM-1805-BK', image: 'https://images.unsplash.com/photo-1646592491489-ebdf758b9d11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', category: 'black' },
  { id: '3', name: 'Torneira Cozinha Industrial', model: 'TCI-3000-BK', image: 'https://images.unsplash.com/photo-1566447695072-9f6cc2c84fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', category: 'black' },
  { id: '4', name: 'Ducha Higiênica Premium', model: 'DHP-1200-BK', image: 'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', category: 'black' },
  
  // Cromo products
  { id: '5', name: 'Torneira Bancada Luxo', model: 'TBL-2500-CR', image: 'https://images.unsplash.com/photo-1595428774862-a79ab68dbabb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', category: 'cromo' },
  { id: '6', name: 'Misturador Parede Clássico', model: 'MPC-1600-CR', image: 'https://images.unsplash.com/photo-1646592491489-ebdf758b9d11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', category: 'cromo' },
  { id: '7', name: 'Torneira Mesa Compacta', model: 'TMC-1400-CR', image: 'https://images.unsplash.com/photo-1566447695072-9f6cc2c84fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', category: 'cromo' },
  
  // Rose products
  { id: '8', name: 'Torneira Design Moderno', model: 'TDM-2200-RS', image: 'https://images.unsplash.com/photo-1595428774862-a79ab68dbabb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', category: 'rose' },
  { id: '9', name: 'Misturador Elegante', model: 'ME-1900-RS', image: 'https://images.unsplash.com/photo-1646592491489-ebdf758b9d11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', category: 'rose' },
  
  // Rose Gold products
  { id: '10', name: 'Torneira Premium Gold', model: 'TPG-2800-RG', image: 'https://images.unsplash.com/photo-1566447695072-9f6cc2c84fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', category: 'rose-gold' },
  { id: '11', name: 'Misturador Luxo Gold', model: 'MLG-2100-RG', image: 'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', category: 'rose-gold' },
  
  // B80 products
  { id: '12', name: 'Torneira Série B80', model: 'TSB-1700-B80', image: 'https://images.unsplash.com/photo-1595428774862-a79ab68dbabb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', category: 'b80' },
  { id: '13', name: 'Misturador B80 Pro', model: 'MB-1500-B80', image: 'https://images.unsplash.com/photo-1646592491489-ebdf758b9d11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', category: 'b80' },
  
  // B86 products
  { id: '14', name: 'Torneira Linha B86', model: 'TLB-1800-B86', image: 'https://images.unsplash.com/photo-1566447695072-9f6cc2c84fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', category: 'b86' },
  { id: '15', name: 'Misturador B86 Elite', model: 'MBE-2000-B86', image: 'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', category: 'b86' },
  
  // C42 products
  { id: '16', name: 'Torneira C42 Especial', model: 'TCE-1600-C42', image: 'https://images.unsplash.com/photo-1595428774862-a79ab68dbabb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', category: 'c42' },
  { id: '17', name: 'Misturador C42 Único', model: 'MCU-1900-C42', image: 'https://images.unsplash.com/photo-1646592491489-ebdf758b9d11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', category: 'c42' }
];

interface MetalsPageProps {
  onProductSelect?: (productId: string) => void;
}

export function MetalsPage({ onProductSelect }: MetalsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('black');
  
  const filteredProducts = mockProducts.filter(product => product.category === selectedCategory);
  const selectedCategoryInfo = categories.find(cat => cat.id === selectedCategory);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full">
            Nossos Metais
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Catálogo de <span className="text-green-600">Metais Sanitários</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore nossa linha completa de metais sanitários organizados por acabamento e categoria.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Categorias</h2>
              
              <div className="space-y-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 flex items-center space-x-3 ${
                      selectedCategory === category.id
                        ? 'border-green-600 bg-green-50 text-green-700'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-green-300 hover:bg-green-50'
                    }`}
                  >
                    <div 
                      className="w-6 h-6 rounded-full border-2 border-gray-300"
                      style={{ backgroundColor: category.color }}
                    ></div>
                    <span className="font-medium">{category.name}</span>
                    <span className="ml-auto text-sm text-gray-500">
                      ({mockProducts.filter(p => p.category === category.id).length})
                    </span>
                  </button>
                ))}
              </div>

              {/* Category Info */}
              {selectedCategoryInfo && (
                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Sobre {selectedCategoryInfo.name}</h3>
                  <p className="text-sm text-gray-600">
                    {selectedCategoryInfo.id === 'black' && 'Acabamento preto fosco premium, resistente a marcas de água e impressões digitais.'}
                    {selectedCategoryInfo.id === 'cromo' && 'Acabamento cromado clássico com alta durabilidade e brilho duradouro.'}
                    {selectedCategoryInfo.id === 'rose' && 'Acabamento rosé moderno e elegante para ambientes sofisticados.'}
                    {selectedCategoryInfo.id === 'rose-gold' && 'Acabamento rose gold premium com toque luxuoso e exclusivo.'}
                    {selectedCategoryInfo.id === 'b80' && 'Linha B80 com acabamento especial resistente ao uso intenso.'}
                    {selectedCategoryInfo.id === 'b86' && 'Série B86 desenvolvida para projetos comerciais e residenciais.'}
                    {selectedCategoryInfo.id === 'c42' && 'Categoria C42 com tecnologia avançada e design inovador.'}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Category Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <div 
                  className="w-8 h-8 rounded-full border-2 border-gray-300"
                  style={{ backgroundColor: selectedCategoryInfo?.color }}
                ></div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategoryInfo?.name}
                </h2>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  {filteredProducts.length} produtos
                </span>
              </div>
              
              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:border-green-300 transition-colors">
                  Todos
                </button>
                <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:border-green-300 transition-colors">
                  Torneiras
                </button>
                <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:border-green-300 transition-colors">
                  Misturadores
                </button>
                <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:border-green-300 transition-colors">
                  Duchas
                </button>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="aspect-square relative overflow-hidden">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <div 
                          className="w-6 h-6 rounded-full border-2 border-white shadow-lg"
                          style={{ backgroundColor: selectedCategoryInfo?.color }}
                        ></div>
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button 
                          onClick={() => onProductSelect && onProductSelect(product.id)}
                          className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                        >
                          Ver Detalhes
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-green-600 font-medium text-sm mb-4">
                        Modelo: {product.model}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div 
                            className="w-4 h-4 rounded-full border border-gray-300"
                            style={{ backgroundColor: selectedCategoryInfo?.color }}
                          ></div>
                          <span className="text-sm text-gray-600">{selectedCategoryInfo?.name}</span>
                        </div>
                        
                        <button className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center space-x-1 transition-colors">
                          <span>Solicitar Orçamento</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293H9.414a1 1 0 01-.707-.293L6.293 13.293A1 1 0 005.586 13H3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhum produto encontrado</h3>
                <p className="text-gray-600">
                  Não encontramos produtos para esta categoria no momento.
                </p>
              </div>
            )}

            {/* Load More Button */}
            {filteredProducts.length > 0 && (
              <div className="text-center mt-12">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                  Carregar Mais Produtos
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Não encontrou o que procura?</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Nossa equipe pode desenvolver produtos personalizados para atender suas necessidades específicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-medium hover:bg-green-50 transition-colors">
              Solicitar Orçamento Personalizado
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-green-600 transition-colors">
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}