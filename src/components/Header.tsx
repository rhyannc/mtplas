import { Menu, Phone, Search, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useState, memo } from 'react';

interface HeaderProps {
  currentPage?: string;
  onPageChange?: (page: string, searchQuery?: string) => void;
}

const Header = memo(function Header({ currentPage = 'home', onPageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const getNavItemClass = (page: string) => {
    const baseClass = "py-2 transition-all duration-300 border-b-2 border-transparent hover:border-green-600";
    const activeClass = "text-green-600 border-green-600";
    const inactiveClass = "text-gray-600 hover:text-green-600";
    
    if (page === 'home' && currentPage === 'home') {
      return `${baseClass} ${activeClass}`;
    } else if (page === 'segments' && currentPage === 'segments') {
      return `${baseClass} ${activeClass}`;
    } else if (page === 'contact' && currentPage === 'contact') {
      return `${baseClass} ${activeClass}`;
    } else if (page === 'products' && (currentPage === 'metals' || currentPage === 'wholesale')) {
      return `${baseClass} ${activeClass}`;
    } else {
      return `${baseClass} ${inactiveClass}`;
    }
  };
  
  const getMobileNavItemClass = (page: string) => {
    const baseClass = "block py-2 transition-colors";
    const activeClass = "text-green-600 font-medium";
    const inactiveClass = "text-gray-600 hover:text-green-600";
    
    if (page === 'home' && currentPage === 'home') {
      return `${baseClass} ${activeClass}`;
    } else if (page === 'segments' && currentPage === 'segments') {
      return `${baseClass} ${activeClass}`;
    } else if (page === 'contact' && currentPage === 'contact') {
      return `${baseClass} ${activeClass}`;
    } else if (page === 'metals' && currentPage === 'metals') {
      return `${baseClass} ${activeClass}`;
    } else if (page === 'wholesale' && currentPage === 'wholesale') {
      return `${baseClass} ${activeClass}`;
    } else {
      return `${baseClass} ${inactiveClass}`;
    }
  };

  const handleNavigation = (page: string, searchQuery?: string) => {
    setIsMenuOpen(false);
    setIsProductsDropdownOpen(false);
    if (onPageChange) {
      onPageChange(page, searchQuery);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      handleNavigation('search', searchQuery.trim());
    }
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleNavigation('home')}
              className="text-3xl font-bold hover:opacity-80 transition-opacity"
            >
              <span className="text-green-600">Metal</span><span className="text-gray-900">plas</span>
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => handleNavigation('home')}
                className={getNavItemClass('home')}
              >
                Início
              </button>
              
              <button 
                onClick={() => handleNavigation('segments')}
                className={getNavItemClass('segments')}
              >
                Segmentos
              </button>

              {/* Produtos Dropdown */}
              <div className="dropdown-container">
                <button 
                  className={`${getNavItemClass('products')} flex items-center space-x-1`}
                >
                  <span>Produtos</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                <div className="dropdown-menu mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  <button 
                    onClick={() => handleNavigation('metals')}
                    className="block w-full text-left px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      
                      <div>
                        <div className="font-medium">Metais</div>
                        <div className="text-xs text-gray-500">Catálogo de Metais</div>
                      </div>
                    </div>
                  </button>
                  <button 
                    onClick={() => handleNavigation('wholesale')}
                    className="block w-full text-left px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      
                      <div>
                        <div className="font-medium">Atacado</div>
                        <div className="text-xs text-gray-500">Catálogo de Atacado</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              
              <button 
                onClick={() => handleNavigation('contact')}
                className={getNavItemClass('contact')}
              >
                Contato
              </button>
            </div>
          </div>

          {/* Search and Contact */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Search */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Buscar produtos..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleSearchKeyPress}
                className="w-64 pl-10 pr-24 py-2 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Button 
                onClick={handleSearch}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-full text-sm"
              >
                Buscar
              </Button>
            </div>
            
            {/* Phone */}
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>(11) 3456-7890</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-4 space-y-4">
              <button 
                className={getMobileNavItemClass('home')}
                onClick={() => handleNavigation('home')}
              >
                Início
              </button>
              <button 
                className={getMobileNavItemClass('segments')}
                onClick={() => handleNavigation('segments')}
              >
                Segmentos
              </button>
              
              {/* Mobile Products Section */}
              <div className="border-t border-gray-100 pt-4">
                <div className="text-sm font-medium text-gray-500 mb-3">Produtos</div>
                <button 
                  className="block w-full text-left py-2 pl-4 text-gray-600 hover:text-green-600 transition-colors"
                  onClick={() => handleNavigation('metals')}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-gray-600 to-gray-800 rounded text-white text-xs flex items-center justify-center font-bold">M</div>
                    <span>Metais</span>
                  </div>
                </button>
                <button 
                  className="block w-full text-left py-2 pl-4 text-gray-600 hover:text-green-600 transition-colors"
                  onClick={() => handleNavigation('wholesale')}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded text-white text-xs flex items-center justify-center font-bold">A</div>
                    <span>Atacado</span>
                  </div>
                </button>
              </div>
              
              <button 
                className={getMobileNavItemClass('contact')}
                onClick={() => handleNavigation('contact')}
              >
                Contato
              </button>
              
              {/* Mobile search */}
              <div className="pt-4 border-t border-gray-100">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Buscar produtos..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleSearchKeyPress}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                <Button 
                  onClick={handleSearch}
                  className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white rounded-full"
                >
                  Buscar
                </Button>
              </div>
              
              {/* Mobile phone */}
              <div className="flex items-center space-x-2 text-sm text-gray-600 pt-2">
                <Phone className="h-4 w-4" />
                <span>(11) 3456-7890</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
});

export { Header };