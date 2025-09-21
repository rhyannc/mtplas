import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export function FeaturedProducts() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: 1,
      name: "Executive Pro",
      image:
        "https://images.unsplash.com/photo-1695624825876-7110a459a21a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZmF1Y2V0JTIwc3RhaW5sZXNzJTIwc3RlZWx8ZW58MXx8fHwxNzU4MTI5MTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 2,
      name: "Chrome Classic",
      image:
        "https://images.unsplash.com/photo-1542020186-c952a6c4045a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGZhdWNldCUyMGNocm9tZSUyMG1vZGVybnxlbnwxfHx8fDE3NTgxMjkxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 3,
      name: "Gold Luxury",
      image:
        "https://images.unsplash.com/photo-1655151410066-71ea5ed18ad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXVjZXQlMjBicmFzcyUyMGdvbGR8ZW58MXx8fHwxNzU4MTI5MTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 4,
      name: "Industrial Max",
      image:
        "https://images.unsplash.com/photo-1662405964427-0e5e4c483a7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwa2l0Y2hlbiUyMGZhdWNldCUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzU4MTI5MTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 5,
      name: "Mixer Supreme",
      image:
        "https://images.unsplash.com/photo-1662405964427-0e5e4c483a7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhlciUyMHRhcCUyMGtpdGNoZW4lMjBzaW5rfGVufDF8fHx8MTc1ODEyOTEzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 6,
      name: "Compact Design",
      image:
        "https://images.unsplash.com/photo-1695624825876-7110a459a21a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZmF1Y2V0JTIwc3RhaW5sZXNzJTIwc3RlZWx8ZW58MXx8fHwxNzU4MTI5MTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 7,
      name: "Eco Smart",
      image:
        "https://images.unsplash.com/photo-1542020186-c952a6c4045a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGZhdWNldCUyMGNocm9tZSUyMG1vZGVybnxlbnwxfHx8fDE3NTgxMjkxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 8,
      name: "Premium Bath",
      image:
        "https://images.unsplash.com/photo-1655151410066-71ea5ed18ad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXVjZXQlMjBicmFzcyUyMGdvbGR8ZW58MXx8fHwxNzU4MTI5MTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 9,
      name: "Professional Plus",
      image:
        "https://images.unsplash.com/photo-1662405964427-0e5e4c483a7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwa2l0Y2hlbiUyMGZhdWNldCUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzU4MTI5MTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 10,
      name: "Modern Style",
      image:
        "https://images.unsplash.com/photo-1695624825876-7110a459a21a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZmF1Y2V0JTIwc3RhaW5sZXNzJTIwc3RlZWx8ZW58MXx8fHwxNzU4MTI5MTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 11,
      name: "Essential Line",
      image:
        "https://images.unsplash.com/photo-1542020186-c952a6c4045a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGZhdWNldCUyMGNocm9tZSUyMG1vZGVybnxlbnwxfHx8fDE3NTgxMjkxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 12,
      name: "Deluxe Series",
      image:
        "https://images.unsplash.com/photo-1655151410066-71ea5ed18ad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXVjZXQlMjBicmFzcyUyMGdvbGR8ZW58MXx8fHwxNzU4MTI5MTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 13,
      name: "Robust Pro",
      image:
        "https://images.unsplash.com/photo-1662405964427-0e5e4c483a7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwa2l0Y2hlbiUyMGZhdWNldCUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzU4MTI5MTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 14,
      name: "Smart Touch",
      image:
        "https://images.unsplash.com/photo-1695624825876-7110a459a21a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZmF1Y2V0JTIwc3RhaW5sZXNzJTIwc3RlZWx8ZW58MXx8fHwxNzU4MTI5MTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 15,
      name: "Elite Collection",
      image:
        "https://images.unsplash.com/photo-1542020186-c952a6c4045a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGZhdWNldCUyMGNocm9tZSUyMG1vZGVybnxlbnwxfHx8fDE3NTgxMjkxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 16,
      name: "Urban Style",
      image:
        "https://images.unsplash.com/photo-1655151410066-71ea5ed18ad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXVjZXQlMjBicmFzcyUyMGdvbGR8ZW58MXx8fHwxNzU4MTI5MTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 17,
      name: "Commercial Max",
      image:
        "https://images.unsplash.com/photo-1662405964427-0e5e4c483a7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwa2l0Y2hlbiUyMGZhdWNldCUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzU4MTI5MTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 18,
      name: "Signature Line",
      image:
        "https://images.unsplash.com/photo-1695624825876-7110a459a21a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZmF1Y2V0JTIwc3RhaW5sZXNzJTIwc3RlZWx8ZW58MXx8fHwxNzU4MTI5MTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 19,
      name: "Contemporary",
      image:
        "https://images.unsplash.com/photo-1542020186-c952a6c4045a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGZhdWNldCUyMGNocm9tZSUyMG1vZGVybnxlbnwxfHx8fDE3NTgxMjkxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 20,
      name: "Heritage Series",
      image:
        "https://images.unsplash.com/photo-1655151410066-71ea5ed18ad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXVjZXQlMjBicmFzcyUyMGdvbGR8ZW58MXx8fHwxNzU4MTI5MTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) =>
          (prev + 1) % Math.ceil(products.length - 6 + 1),
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [products.length]);

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % Math.ceil(products.length - 6 + 1),
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(products.length - 6 + 1)) %
        Math.ceil(products.length - 6 + 1),
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full">
            Produtos em Destaque
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Nossa{" "}
            <span className="text-green-600">
              Seleção Especial
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Products Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4  pb-4"
              style={{
                transform: `translateX(-${currentSlide * (100 / 6)}%)`,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-1/6 flex-shrink-0"
                >
                  <div className="bg-white rounded-xl   transition-shadow duration-300 overflow-hidden group cursor-pointer">
                    <div className="aspect-square overflow-hidden">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-medium text-gray-900 text-center group-hover:text-green-600 transition-colors">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10 group"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600 group-hover:text-green-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10 group"
          >
            <ChevronRight className="h-5 w-5 text-gray-600 group-hover:text-green-600" />
          </button>
        </div>
      </div>
    </section>
  );
}