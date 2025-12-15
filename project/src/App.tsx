import { useState } from 'react';
import HeroSlider from './components/HeroSlider';
import ServiceIcons from './components/ServiceIcons';
import ActionButtons from './components/ActionButtons';
import ProductsSection from './components/ProductsSection';
import PromoBanner from './components/PromoBanner';
import Footer from './components/Footer';
import CarServicePage from './pages/CarServicePage';
import CarCleaningPage from './pages/CarCleaningPage';
import HouseCleaningPage from './pages/HouseCleaningPage';

type Page = 'home' | 'car-service' | 'car-cleaning' | 'house-cleaning';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateToService = (service: string) => {
    setCurrentPage(service as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'car-service') {
    return <CarServicePage onBack={navigateToHome} />;
  }

  if (currentPage === 'car-cleaning') {
    return <CarCleaningPage onBack={navigateToHome} />;
  }

  if (currentPage === 'house-cleaning') {
    return <HouseCleaningPage onBack={navigateToHome} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-4">
            Clean Service Solutions
          </h1>
          <p className="text-xl text-center text-gray-600">
            Premium Car Services & Quality Cleaning Products
          </p>
        </header>

        <HeroSlider onSlideClick={navigateToService} />

        <ServiceIcons onServiceClick={navigateToService} />

        <ActionButtons />

        <ProductsSection />

        <PromoBanner />
      </div>

      <Footer />
    </div>
  );
}

export default App;
