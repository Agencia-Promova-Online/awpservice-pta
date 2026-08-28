import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { MachinesPage } from '@/pages/MachinesPage';
import { MachineDetailPage } from '@/pages/MachineDetailPage';
import { BrandsPage } from '@/pages/BrandsPage';
import { BrandDetailPage } from '@/pages/BrandDetailPage';
import { BlogPage } from '@/pages/BlogPage';
import { BlogArticlePage } from '@/pages/BlogArticlePage';
import { ContactPage } from '@/pages/ContactPage';
import { ThankYouPage } from '@/pages/ThankYouPage';
import { SitemapSEOPage } from '@/pages/SitemapSEOPage';
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-industrial-black">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/servicos/:slug" element={<ServiceDetailPage />} />
            <Route path="/maquinas" element={<MachinesPage />} />
            <Route path="/maquinas/:slug" element={<MachineDetailPage />} />
            <Route path="/marcas" element={<BrandsPage />} />
            <Route path="/marcas/:slug" element={<BrandDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogArticlePage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/obrigado" element={<ThankYouPage />} />
            <Route path="/sitemap-seo" element={<SitemapSEOPage />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  );
}

export default App;
