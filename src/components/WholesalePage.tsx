import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { User, FileText, TrendingUp, Award, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

export function WholesalePage() {
  const [activeTab, setActiveTab] = useState('portal');

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
            Vendas no Atacado
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Portal do <span className="text-green-600">Atacado</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções exclusivas para revendedores, distribuidores e grandes projetos com condições especiais e suporte dedicado.
          </p>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Seja Nosso Parceiro</h2>
              <p className="text-green-100 mb-6 text-lg">
                Junte-se à nossa rede de revendedores e tenha acesso a condições exclusivas, 
                suporte técnico especializado e produtos de alta qualidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-green-600 px-8 py-3 rounded-full font-medium hover:bg-green-50 transition-colors">
                  Cadastre-se Agora
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-green-600 transition-colors">
                  Saiba Mais
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Parceiros Metalplas"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('portal')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'portal'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Portal do Revendedor
            </button>
            <button
              onClick={() => setActiveTab('prices')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'prices'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Tabela de Preços
            </button>
            <button
              onClick={() => setActiveTab('conditions')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'conditions'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Condições Especiais
            </button>
            <button
              onClick={() => setActiveTab('become')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'become'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Seja um Revendedor
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-16">
          {activeTab === 'portal' && (
            <div className="space-y-12">
              {/* Portal Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <User className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Área do Cliente</h3>
                  <p className="text-gray-600 text-sm">
                    Acesse seu painel personalizado com histórico de pedidos e relatórios.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Catálogos Digitais</h3>
                  <p className="text-gray-600 text-sm">
                    Download de catálogos atualizados com preços exclusivos para revendedores.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Relatórios de Vendas</h3>
                  <p className="text-gray-600 text-sm">
                    Acompanhe seu desempenho com relatórios detalhados e análises de mercado.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Programa de Bonificação</h3>
                  <p className="text-gray-600 text-sm">
                    Ganhe pontos e benefícios exclusivos baseados no seu volume de vendas.
                  </p>
                </div>
              </div>

              {/* Portal Access */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Acesse Seu Portal</h2>
                  <p className="text-gray-600">Faça login para acessar todas as funcionalidades exclusivas</p>
                </div>

                <div className="max-w-md mx-auto">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email ou CNPJ</label>
                      <input
                        type="text"
                        placeholder="seu@email.com ou 00.000.000/0001-00"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition-colors"
                    >
                      Entrar no Portal
                    </button>
                  </form>
                  
                  <div className="text-center mt-4 space-y-2">
                    <a href="#" className="text-green-600 hover:underline text-sm">Esqueci minha senha</a>
                    <div className="text-gray-500 text-sm">
                      Não tem conta? <a href="#" className="text-green-600 hover:underline">Cadastre-se aqui</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'prices' && (
            <div className="space-y-8">
              {/* Price Table Categories */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Linha Residencial</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Torneiras Básicas</span>
                      <span className="font-medium text-green-600">R$ 89 - R$ 189</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Misturadores</span>
                      <span className="font-medium text-green-600">R$ 159 - R$ 289</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Duchas</span>
                      <span className="font-medium text-green-600">R$ 69 - R$ 149</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors">
                    Ver Tabela Completa
                  </button>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Linha Profissional</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Torneiras Industriais</span>
                      <span className="font-medium text-green-600">R$ 189 - R$ 389</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Misturadores Pro</span>
                      <span className="font-medium text-green-600">R$ 259 - R$ 489</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Sistemas Complexos</span>
                      <span className="font-medium text-green-600">R$ 389 - R$ 789</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors">
                    Ver Tabela Completa
                  </button>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Linha Premium</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Gourmet Premium</span>
                      <span className="font-medium text-green-600">R$ 489 - R$ 889</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Linha Hospitalar</span>
                      <span className="font-medium text-green-600">R$ 589 - R$ 1289</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Luxo Exclusivo</span>
                      <span className="font-medium text-green-600">R$ 789 - R$ 1589</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors">
                    Ver Tabela Completa
                  </button>
                </div>
              </div>

              {/* Download Notice */}
              <div className="bg-blue-50 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tabela Completa de Preços</h3>
                <p className="text-gray-600 mb-6">
                  Acesse nossa tabela completa com mais de 500 produtos e preços atualizados mensalmente.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                  Baixar Tabela PDF (Login Necessário)
                </button>
              </div>
            </div>
          )}

          {activeTab === 'conditions' && (
            <div className="space-y-8">
              {/* Special Conditions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Condições de Pagamento</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900">À Vista</h4>
                        <p className="text-gray-600 text-sm">Desconto de até 8% para pagamentos à vista</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900">Parcelado</h4>
                        <p className="text-gray-600 text-sm">Até 10x sem juros para clientes aprovados</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900">Faturado</h4>
                        <p className="text-gray-600 text-sm">Prazo de 30 a 60 dias para parceiros consolidados</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefícios Exclusivos</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900">Frete Grátis</h4>
                        <p className="text-gray-600 text-sm">Compras acima de R$ 2.000 em todo o país</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900">Suporte Técnico</h4>
                        <p className="text-gray-600 text-sm">Linha direta para revendedores</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900">Treinamentos</h4>
                        <p className="text-gray-600 text-sm">Capacitação gratuita para sua equipe</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Volume Discounts */}
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Descontos por Volume</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">5%</div>
                    <div className="text-green-100">R$ 10.000 - R$ 25.000</div>
                    <div className="text-sm text-green-100 mt-1">Volume mensal</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">8%</div>
                    <div className="text-green-100">R$ 25.000 - R$ 50.000</div>
                    <div className="text-sm text-green-100 mt-1">Volume mensal</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">12%</div>
                    <div className="text-green-100">Acima de R$ 50.000</div>
                    <div className="text-sm text-green-100 mt-1">Volume mensal</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'become' && (
            <div className="space-y-8">
              {/* Requirements */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Como se Tornar um Revendedor</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Requisitos Básicos</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">CNPJ ativo há pelo menos 1 ano</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">Ramo de atividade compatível</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">Referências comerciais</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">Capacidade de estoque mínimo</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Documentos Necessários</h4>
                    <div className="space-y-2 text-gray-600">
                      <div>• Cartão CNPJ atualizado</div>
                      <div>• Contrato Social</div>
                      <div>• Inscrição Estadual</div>
                      <div>• Comprovante de endereço</div>
                      <div>• Referências bancárias</div>
                      <div>• Declaração de Imposto de Renda PJ</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Application Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Formulário de Cadastro</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Razão Social *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">CNPJ *</label>
                      <input
                        type="text"
                        placeholder="00.000.000/0001-00"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Comercial *</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ramo de Atividade *</label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                      <option value="">Selecione</option>
                      <option value="construcao">Material de Construção</option>
                      <option value="hidraulica">Hidráulica e Ferragens</option>
                      <option value="decoracao">Decoração e Design</option>
                      <option value="distribuidor">Distribuidor</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                    <textarea
                      rows={4}
                      placeholder="Conte-nos mais sobre sua empresa e expectativas..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition-colors"
                  >
                    Enviar Solicitação
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Fale com Nossa Equipe de Atacado</h2>
            <p className="text-gray-600">Nossos especialistas estão prontos para atender suas necessidades</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Telefone</h3>
              <p className="text-gray-600">(11) 3456-7890</p>
              <p className="text-sm text-gray-500">Seg-Sex: 8h às 18h</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">atacado@metalplas.com.br</p>
              <p className="text-sm text-gray-500">Resposta em até 4h</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Horário</h3>
              <p className="text-gray-600">Segunda a Sexta</p>
              <p className="text-sm text-gray-500">8h às 18h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}