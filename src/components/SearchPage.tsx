import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Product {
  id: string;
  name: string;
  model: string;
  image: string;
  category: string;
}

interface SearchPageProps {
  searchQuery: string;
  onProductSelect?: (productId: string) => void;
}

// Mock data - mesmo da MetalsPage para simular resultados de busca
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

const categoryInfo: { [key: string]: { name: string; color: string } } = {
  'black': { name: 'Black', color: '#000000' },
  'cromo': { name: 'Cromo', color: '#C0C0C0' },
  'rose': { name: 'Rose', color: '#E91E63' },
  'rose-gold': { name: 'Rose Gold', color: '#E91E63' },
  'b80': { name: 'B80', color: '#8B4513' },
  'b86': { name: 'B86', color: '#A0522D' },
  'c42': { name: 'C42', color: '#4682B4' }
};

export function SearchPage({ searchQuery, onProductSelect }: SearchPageProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredProducts([]);
      return;
    }

    // Simular busca por nome, modelo ou categoria
    const searchLower = searchQuery.toLowerCase();
    const results = mockProducts.filter(product => 
      product.name.toLowerCase().includes(searchLower) ||
      product.model.toLowerCase().includes(searchLower) ||
      categoryInfo[product.category]?.name.toLowerCase().includes(searchLower)
    );
    
    setFilteredProducts(results);
  }, [searchQuery]);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full">
            Resultados da Busca
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Pesquisa por: <span className="text-green-600">"{searchQuery}"</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {filteredProducts.length > 0 
              ? `Encontramos ${filteredProducts.length} produto${filteredProducts.length > 1 ? 's' : ''} relacionado${filteredProducts.length > 1 ? 's' : ''} à sua busca.`
              : 'Nenhum produto encontrado para sua busca.'
            }
          </p>
        </div>

        {/* Results Section */}
        <div className="w-full">
          {/* Results Header */}
          {filteredProducts.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Produtos Encontrados
                </h2>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  {filteredProducts.length} resultado{filteredProducts.length > 1 ? 's' : ''}
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
          )}

          {/* Products Grid - 4 colunas em vez de 3 */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => {
                const categoryData = categoryInfo[product.category];
                return (
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
                          style={{ backgroundColor: categoryData?.color }}
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
                            style={{ backgroundColor: categoryData?.color }}
                          ></div>
                          <span className="text-sm text-gray-600">{categoryData?.name}</span>
                        </div>
                        
                        <button className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center space-x-1 transition-colors">
                          <span>Solicitar Orçamento</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : searchQuery.trim() ? (
            // Estado de "nenhum resultado"
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhum produto encontrado</h3>
              <p className="text-gray-600 mb-6">
                Não encontramos produtos para "{searchQuery}". Tente usar outros termos de busca.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <p>Dicas para melhorar sua busca:</p>
                <ul className="space-y-1">
                  <li>• Verifique a ortografia das palavras</li>
                  <li>• Use termos mais gerais (ex: "torneira" em vez de "torneira específica")</li>
                  <li>• Tente buscar por categoria (Black, Cromo, Rose, etc.)</li>
                </ul>
              </div>
            </div>
          ) : (
            // Estado inicial (sem busca)
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Digite algo para buscar</h3>
              <p className="text-gray-600">
                Use a barra de pesquisa no topo da página para encontrar produtos.
              </p>
            </div>
          )}

          {/* Load More Button */}
          {filteredProducts.length > 0 && (
            <div className="text-center mt-12">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                Carregar Mais Resultados
              </button>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Não encontrou o que procura?</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Nossa equipe pode ajudar você a encontrar o produto ideal ou desenvolver soluções personalizadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-medium hover:bg-green-50 transition-colors">
              Falar com Especialista
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-green-600 transition-colors">
              Ver Catálogo Completo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}