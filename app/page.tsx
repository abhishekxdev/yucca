import Image from 'next/image';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CTASection from '@/components/CTASection';
import CategoriesDetailSection from '@/components/CategoriesDetailSection';
import AboutSection from '@/components/AboutSection';
import NewProductsSection from '@/components/NewProductsSection';
import CustomSolutionsSection from '@/components/CustomSolutionsSection';
import StandardsSection from '@/components/StandardsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen">
        {/* Background Image covering header and hero */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero1.png"
            alt="Hero background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Header />
          <HeroSection />
        </div>
      </main>
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* CTA Section */}
      <CTASection />
      
      {/* Categories Detail Section */}
      <CategoriesDetailSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* New Products Section */}
      <NewProductsSection />
      
      {/* Custom Solutions Section */}
      <CustomSolutionsSection />
      
      {/* Standards Section */}
      <StandardsSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Footer */}
      <Footer />
    </>
  );
}
