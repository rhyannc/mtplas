import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Catalogs } from './components/Catalogs';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Segments } from './components/Segments';
import { SegmentsPage } from './components/SegmentsPage';
import { MetalsPage } from './components/MetalsPage';
import { WholesalePage } from './components/WholesalePage';
import { SearchPage } from './components/SearchPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { About } from './components/About';
import { Products } from './components/Products';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { useState, useEffect, useCallback } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    // Initialize state based on current hash
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('search=')) {
      return 'search';
    }
    if (hash.startsWith('produto=')) {
      return 'product-detail';
    }
    switch (hash) {
      case 'contato':
        return 'contact';
      case 'segmentos':
        return 'segments';
      case 'metais':
        return 'metals';
      case 'atacado':
        return 'wholesale';
      default:
        return 'home';
    }
  });

  const [searchQuery, setSearchQuery] = useState(() => {
    // Initialize search query from URL hash
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('search=')) {
      return decodeURIComponent(hash.replace('search=', ''));
    }
    return '';
  });

  const [selectedProductId, setSelectedProductId] = useState(() => {
    // Initialize product ID from URL hash
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('produto=')) {
      return hash.replace('produto=', '');
    }
    return '';
  });

  const handlePageChange = useCallback((page: string, query?: string) => {
    // Immediately update state first
    setCurrentPage(page);
    
    // Handle search page with query
    if (page === 'search' && query) {
      setSearchQuery(query);
      setSelectedProductId('');
      const newUrl = `${window.location.pathname}#search=${encodeURIComponent(query)}`;
      window.history.pushState({ page, query }, '', newUrl);
    } else {
      setSearchQuery('');
      setSelectedProductId('');
      // Update URL for browser history
      const newUrl = page === 'home' ? window.location.pathname : `${window.location.pathname}#${page}`;
      window.history.pushState({ page }, '', newUrl);
    }
  }, []);

  const handleProductSelect = useCallback((productId: string) => {
    setCurrentPage('product-detail');
    setSelectedProductId(productId);
    setSearchQuery('');
    const newUrl = `${window.location.pathname}#produto=${productId}`;
    window.history.pushState({ page: 'product-detail', productId }, '', newUrl);
  }, []);

  const handleBackToMetals = useCallback(() => {
    handlePageChange('metals');
  }, [handlePageChange]);

  // Listen for browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('search=')) {
        setCurrentPage('search');
        setSearchQuery(decodeURIComponent(hash.replace('search=', '')));
        setSelectedProductId('');
      } else if (hash.startsWith('produto=')) {
        setCurrentPage('product-detail');
        setSelectedProductId(hash.replace('produto=', ''));
        setSearchQuery('');
      } else {
        setSearchQuery('');
        setSelectedProductId('');
        switch (hash) {
          case 'contato':
            setCurrentPage('contact');
            break;
          case 'segmentos':
            setCurrentPage('segments');
            break;
          case 'metais':
            setCurrentPage('metals');
            break;
          case 'atacado':
            setCurrentPage('wholesale');
            break;
          default:
            setCurrentPage('home');
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      
      {currentPage === 'home' ? (
        <>
          <Hero />
          <Catalogs />
          <FeaturedProducts />
          <Segments />
          <About />
          <Products />
          <Services />
          <Testimonials />
        </>
      ) : currentPage === 'segments' ? (
        <div className="pt-20">
          <SegmentsPage />
        </div>
      ) : currentPage === 'metals' ? (
        <div className="pt-20">
          <MetalsPage onProductSelect={handleProductSelect} />
        </div>
      ) : currentPage === 'wholesale' ? (
        <div className="pt-20">
          <WholesalePage />
        </div>
      ) : currentPage === 'search' ? (
        <div className="pt-20">
          <SearchPage searchQuery={searchQuery} onProductSelect={handleProductSelect} />
        </div>
      ) : currentPage === 'product-detail' ? (
        <div className="pt-20">
          <ProductDetailPage 
            productId={selectedProductId} 
            onBack={handleBackToMetals}
          />
        </div>
      ) : (
        <div className="pt-20">
          <Contact />
        </div>
      )}
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}