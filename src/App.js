import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('katalog');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Splash screen timer
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Menerapkan tema ke elemen <body> agar latar desktop juga berubah
  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Katalog 9 Item GadgetLens
  const products = [
    { id: 1, name: 'iPhone 15 Pro Max', price: 'Rp 24.999.000', cat: 'Smartphone' },
    { id: 2, name: 'Samsung S24 Ultra', price: 'Rp 21.999.000', cat: 'Smartphone' },
    { id: 3, name: 'Sony WH-1000XM5', price: 'Rp 5.999.000', cat: 'Audio' },
    { id: 4, name: 'Apple AirPods Pro 2', price: 'Rp 3.999.000', cat: 'Audio' },
    { id: 5, name: 'Anker PowerCore 10K', price: 'Rp 450.000', cat: 'Aksesoris' },
    { id: 6, name: 'Baseus GaN 65W', price: 'Rp 350.000', cat: 'Aksesoris' },
    { id: 7, name: 'Logitech MX Master 3S', price: 'Rp 1.699.000', cat: 'Periferal' },
    { id: 8, name: 'iPad Pro M4', price: 'Rp 19.999.000', cat: 'Tablet' },
    { id: 9, name: 'Galaxy Watch 6', price: 'Rp 3.999.000', cat: 'Wearable' }
  ];

  // Komponen Ikon SVG Minimalis
  const IconHome = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
  const IconGrid = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>;
  const IconUser = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
  const IconSun = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>;
  const IconMoon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>;

  return (
    <div className="app-container">
      {/* 1. Splash Screen dengan Logo PNG */}
      {showSplash && (
        <div className="splash-screen">
          <img src="/icons/icon-192x192.png" alt="GadgetLens Logo" className="splash-logo" />
          <h2 className="splash-title">GadgetLens</h2>
        </div>
      )}

      {/* 2. Header & Theme Toggle */}
      <header className="app-header">
        <div className="header-content">
          <h3>
            {activeTab === 'beranda' ? 'Beranda' : 
             activeTab === 'katalog' ? 'Katalog Gadget' : 'Profil Saya'}
          </h3>
          <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)} aria-label="Toggle Theme">
            {isDarkMode ? <IconSun /> : <IconMoon />}
          </button>
        </div>
      </header>

      {/* 3. Main Content Area */}
      <main className="app-content">
        {activeTab === 'beranda' && (
          <div className="tab-content">
            <h2 className="text-main">Selamat Datang di GadgetLens</h2>
            <p className="text-muted">Temukan gadget dan aksesoris terbaik untuk produktivitas Anda.</p>
          </div>
        )}

        {activeTab === 'katalog' && (
          <div className="catalog-grid">
            {products.map(item => (
              <div key={item.id} className="product-card">
                <div className="product-image">
                  <span className="placeholder-text">{item.cat}</span>
                </div>
                <h4 className="text-main">{item.name}</h4>
                <p className="price">{item.price}</p>
                <button className="btn-buy">Lihat Detail</button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'profil' && (
          <div className="tab-content">
            <div className="profile-icon-large"><IconUser /></div>
            <h3 className="text-main">Pengguna GadgetLens</h3>
            <p className="text-muted">Status: Service Worker Aktif</p>
          </div>
        )}
      </main>

      {/* 4. Bottom Navigation / Sidebar */}
      <nav className="bottom-nav">
        <button className={`nav-item ${activeTab === 'beranda' ? 'active' : ''}`} onClick={() => setActiveTab('beranda')}>
          <span className="icon"><IconHome /></span>
          <span className="label">Beranda</span>
        </button>
        <button className={`nav-item ${activeTab === 'katalog' ? 'active' : ''}`} onClick={() => setActiveTab('katalog')}>
          <span className="icon"><IconGrid /></span>
          <span className="label">Katalog</span>
        </button>
        <button className={`nav-item ${activeTab === 'profil' ? 'active' : ''}`} onClick={() => setActiveTab('profil')}>
          <span className="icon"><IconUser /></span>
          <span className="label">Profil</span>
        </button>
      </nav>
    </div>
  );
}

export default App;