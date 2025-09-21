import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Download } from 'lucide-react';

export function Catalogs() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Catálogo de Metais */}
          <a 
            href="#catalogo-metais" 
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="aspect-[5/2] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1699662585308-fcb113a0a4ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGNhdGFsb2clMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc1ODEyNzcwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Catálogo de Metais Metalplas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Catálogo de Metais</h3>
                  <p className="text-gray-200">Explore nossa linha completa de produtos em metais sanitários</p>
                </div>
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <Download className="h-6 w-6" />
                </div>
              </div>
              
              {/* Call to action */}
              <div className="mt-4 flex items-center space-x-2 text-green-400 group-hover:text-green-300 transition-colors">
                <span className="font-medium">Download Gratuito</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>

          {/* Catálogo de Atacado */}
          <a 
            href="#catalogo-atacado" 
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="aspect-[5/2] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1661383198993-5451d28b40d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aG9sZXNhbGUlMjBjYXRhbG9nJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzU4MTI3NzExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Catálogo de Atacado Metalplas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Catálogo de Atacado</h3>
                  <p className="text-gray-200">Condições especiais para revendedores e grandes volumes</p>
                </div>
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <Download className="h-6 w-6" />
                </div>
              </div>
              
              {/* Call to action */}
              <div className="mt-4 flex items-center space-x-2 text-green-400 group-hover:text-green-300 transition-colors">
                <span className="font-medium">Download Gratuito</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}