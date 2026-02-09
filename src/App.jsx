import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import ForBrides from './pages/ForBrides';
import ForVenues from './pages/ForVenues';
import WorkWithUs from './pages/WorkWithUs';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import About from './pages/About';
import DestinationWeddingGuide from './pages/DestinationWeddingGuide';
import DestinationWeddingCost from './pages/DestinationWeddingCost';
import OrganisingWeddingAbroad from './pages/OrganisingWeddingAbroad';
import LuxuryWeddingVenues from './pages/LuxuryWeddingVenues';
import DubaiWeddingPackages from './pages/DubaiWeddingPackages';
import WeddingMasterclass from './pages/WeddingMasterclass';
import InsightDetail from './pages/InsightDetail';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-primary bg-secondary">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/for-brides" element={<ForBrides />} />
            <Route path="/for-venues" element={<ForVenues />} />
            <Route path="/work-with-us" element={<WorkWithUs />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:id" element={<InsightDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            
            {/* SEO Pages */}
            <Route path="/destination-wedding-guide" element={<DestinationWeddingGuide />} />
            <Route path="/destination-wedding-cost-abroad" element={<DestinationWeddingCost />} />
            <Route path="/organising-a-wedding-abroad" element={<OrganisingWeddingAbroad />} />
            <Route path="/luxury-wedding-venues-beach-destination" element={<LuxuryWeddingVenues />} />
            <Route path="/dubai-wedding-packages" element={<DubaiWeddingPackages />} />
            <Route path="/wedding-masterclass" element={<WeddingMasterclass />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
