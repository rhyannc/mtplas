import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle, Award, Users, Cog, Leaf, Shield } from 'lucide-react';

export function About() {
  return (
    <section id="sobre" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full">
            Nossa História
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Tradição e <span className="text-green-600">Inovação</span> 
            <br />em Cada Produto
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed">
                Há mais de três décadas, a <strong>Metalplas</strong> revoluciona o mercado 
                brasileiro de metais sanitários, combinando tradição familiar com tecnologia 
                de ponta para criar produtos que definem novos padrões de qualidade e design.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa jornada começou com uma visão simples: transformar a experiência 
                cotidiana através de produtos excepcionais que unem funcionalidade, 
                beleza e sustentabilidade.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Qualidade Garantida</h4>
                  <p className="text-gray-600">Controle rigoroso em cada etapa da produção</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Sustentabilidade</h4>
                  <p className="text-gray-600">Processos eco-friendly e materiais recicláveis</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1695603414685-af28aff0f9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjdG9yeSUyMG1ldGFsfGVufDF8fHx8MTc1ODEyNDY4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fábrica Metalplas"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">30+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Anos de História</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
            <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">ISO 9001</div>
            <div className="text-gray-600">Certificação Internacional de Qualidade</div>
          </div>
          
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
            <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Colaboradores Especializados</div>
          </div>
          
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
            <Cog className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-gray-600">Produção Nacional</div>
          </div>
          
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
            <div className="text-gray-600">Satisfação dos Clientes</div>
          </div>
        </div>
      </div>
    </section>
  );
}