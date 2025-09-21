import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">
                Fique por dentro das <span className="text-green-400">novidades</span>
              </h3>
              <p className="text-gray-400 text-lg">
                Receba em primeira mão lançamentos, promoções exclusivas e conteúdos sobre design e arquitetura.
              </p>
            </div>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="w-full px-6 py-4 pr-40 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-green-400 h-14"
              />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full">
                Inscrever-se
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold">
                <span className="text-green-400">Metal</span><span className="text-white">plas</span>
              </h3>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Transformando espaços há mais de 30 anos com produtos de qualidade excepcional e design inovador.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-gray-700 transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-gray-700 transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-gray-700 transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-gray-700 transition-all">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Segments */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg text-white">Segmentos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Gourmet
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Hospitalar
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Cozinhas Profissionais
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Banheiros de Luxo
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Soluções Personalizadas
              </a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg text-white">Serviços</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Consultoria Técnica
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Instalação Profissional
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Manutenção Preventiva
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Garantia Estendida
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Suporte 24h
              </a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg text-white">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Av. Industrial, 1234</p>
                  <p>Distrito Industrial</p>
                  <p>São Paulo - SP</p>
                  <p>CEP: 01234-567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">(11) 3456-7890</div>
                  <div className="text-gray-400 text-sm">Seg-Sex: 8h às 18h</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">contato@metalplas.com.br</div>
                  <div className="text-gray-400 text-sm">Resposta em até 2h</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400">
              © 2024 Metalplas. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Trabalhe Conosco
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}