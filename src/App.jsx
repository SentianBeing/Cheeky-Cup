import React from 'react';
import { CartProvider } from './context/CartContext';
import { GlossierNavbar } from './components/GlossierNavbar';
import { GlossierHero } from './components/GlossierHero';
import { GlossierTileRow } from './components/GlossierTileRow';
import { GlossierFeatureDuo } from './components/GlossierFeatureDuo';
import { GlossierEditorialLookbook } from './components/GlossierEditorialLookbook';
import { GlossierRitual } from './components/GlossierRitual';
import { GlossierQualities } from './components/GlossierQualities';
import { GlossierPDP } from './components/GlossierPDP';
import { GlossierStoryHighlight } from './components/GlossierStoryHighlight';
import { GlossierCaughtCheek } from './components/GlossierCaughtCheek';
import { GlossierVideoSection } from './components/GlossierVideoSection';
import { GlossierFooter } from './components/GlossierFooter';
import { CartDrawer } from './components/CartDrawer';

export function App() {
  return (
    <CartProvider>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--ivory)' }}>
        <GlossierNavbar />
        <main>
          <GlossierHero />
          <GlossierTileRow />
          <GlossierQualities />
          <GlossierStoryHighlight />
          <GlossierPDP />
          <GlossierRitual />
          <GlossierEditorialLookbook />
          <GlossierVideoSection />
          <GlossierCaughtCheek />
          <GlossierFeatureDuo />
        </main>
        <GlossierFooter />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

export default App;
