import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Wrench, Truck, HeadphonesIcon, Shield, Clock, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Consultoria & Instalação",
      description: "Equipe técnica especializada oferece consultoria completa e instalação profissional com garantia de qualidade.",
      features: ["Análise técnica gratuita", "Instalação certificada", "Teste de funcionamento"]
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Logística Expressa",
      description: "Sistema logístico nacional com entrega rastreada e segura em todo o território brasileiro.",
      features: ["Entrega em 5 dias", "Frete grátis acima de R$ 500", "Rastreamento online"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Garantia Premium",
      description: "Cobertura estendida de até 7 anos com suporte técnico especializado e peças originais.",
      features: ["Garantia de até 7 anos", "Peças originais", "Mão de obra incluída"]
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8" />,
      title: "Suporte 360°",
      description: "Atendimento multicanal com especialistas prontos para resolver qualquer questão técnica.",
      features: ["Suporte via WhatsApp", "Chat online 24h", "Videoconferência técnica"]
    }
  ];

  return (
    <section id="servicos" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full">
            Nossos Serviços
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Experiência <span className="text-green-600">Completa</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Do projeto à instalação, oferecemos um ecossistema completo de serviços 
            para garantir o sucesso do seu projeto.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 bg-white border-0 overflow-hidden">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pl-20">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pl-20 pt-4">
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all">
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}