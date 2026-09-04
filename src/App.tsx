import React, { useState } from 'react';
import { BuildingPassport, HistoryFact } from './types';
import { MAIN_BUILDING_PASSPORT, ADDITIONAL_PASSPORTS } from './data/passports';
import { Header } from './components/Header';
import { PassportView } from './components/PassportView';
import { SpecificationsView } from './components/SpecificationsView';
import { HistoryTimelineView } from './components/HistoryTimelineView';
import { AnalyticsView } from './components/AnalyticsView';
import { NfcModal } from './components/NfcModal';
import { FactDetailModal } from './components/FactDetailModal';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPassport, setCurrentPassport] = useState<BuildingPassport>(MAIN_BUILDING_PASSPORT);
  const [isVerified, setIsVerified] = useState<boolean>(true);
  const [isNfcModalOpen, setIsNfcModalOpen] = useState<boolean>(false);
  const [selectedFact, setSelectedFact] = useState<HistoryFact | null>(null);

  const handleVerificationComplete = () => {
    setIsVerified(true);
  };

  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd] flex flex-col font-sans selection:bg-[#ccff80] selection:text-[#213600]">
      {/* Top Bar Header */}
      <Header
        currentPassport={currentPassport}
        passports={ADDITIONAL_PASSPORTS}
        onSelectPassport={setCurrentPassport}
        onOpenNfcModal={() => setIsNfcModalOpen(true)}
        isVerified={isVerified}
      />

      {/* Main Single Page Content Area - All sections in sequential order */}
      <main className="w-full max-w-5xl mx-auto pt-16 pb-12 px-3 sm:px-6 flex flex-col gap-10 flex-1">
        {/* 1. Passport Section */}
        <section id="passport">
          <PassportView
            passport={currentPassport}
            onSelectFact={setSelectedFact}
            onOpenNfcModal={() => setIsNfcModalOpen(true)}
            isVerified={isVerified}
          />
        </section>

        {/* 2. Specifications Section */}
        <section id="specifications">
          <SpecificationsView passport={currentPassport} />
        </section>

        {/* 3. History Timeline Section */}
        <section id="history">
          <HistoryTimelineView
            passport={currentPassport}
            onSelectFact={setSelectedFact}
          />
        </section>

        {/* 4. Analytics Section */}
        <section id="analytics">
          <AnalyticsView passport={currentPassport} />
        </section>

        {/* Footer */}
        <div className="mt-8">
          <Footer />
        </div>
      </main>

      {/* Interactive Modals */}
      <NfcModal
        isOpen={isNfcModalOpen}
        onClose={() => setIsNfcModalOpen(false)}
        passport={currentPassport}
        onVerificationComplete={handleVerificationComplete}
      />

      <FactDetailModal
        fact={selectedFact}
        onClose={() => setSelectedFact(null)}
      />
    </div>
  );
}

