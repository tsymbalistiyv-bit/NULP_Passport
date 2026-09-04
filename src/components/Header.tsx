import React from 'react';
import { Radio, ShieldCheck, Fingerprint, ChevronDown, Download } from 'lucide-react';
import { BuildingPassport } from '../types';

interface HeaderProps {
  currentPassport: BuildingPassport;
  passports: BuildingPassport[];
  onSelectPassport: (passport: BuildingPassport) => void;
  onOpenNfcModal: () => void;
  isVerified: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentPassport,
  passports,
  onSelectPassport,
  onOpenNfcModal,
  isVerified,
}) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const handleDownloadHtml = () => {
    window.open('/passport.html', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 h-12 bg-[#060e20]/80 backdrop-blur-xl border-b border-[#424936]/40">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#ccff80] animate-pulse" />
          <span className="font-mono text-[11px] font-bold tracking-widest text-[#ccff80]">
            Model_Passport
          </span>
        </div>

        {/* Quick building switcher */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#171f33]/80 border border-[#424936]/50 text-[11px] font-mono text-[#dae2fd] hover:border-[#ccff80]/50 transition-colors"
          >
            <span className="truncate max-w-[120px] sm:max-w-[180px]">
              {currentPassport.edition}
            </span>
            <ChevronDown className="w-3 h-3 text-[#c2cab0]" />
          </button>

          {dropdownOpen && (
            <div className="absolute left-0 mt-1.5 w-64 bg-[#131b2e] border border-[#424936] rounded-lg shadow-2xl py-1 z-50">
              <div className="px-3 py-1.5 text-[10px] font-mono uppercase text-[#c2cab0] border-b border-[#424936]/40">
                Select Architectural Passport
              </div>
              {passports.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    onSelectPassport(p);
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-xs flex flex-col gap-0.5 transition-colors ${
                    p.id === currentPassport.id
                      ? 'bg-[#ccff80]/15 text-[#ccff80] font-medium'
                      : 'text-[#dae2fd] hover:bg-[#171f33]'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{p.title}</span>
                    <span className="font-mono text-[10px] text-[#c2cab0]">{p.edition}</span>
                  </div>
                  <span className="text-[10px] text-[#c2cab0] truncate">{p.subtitle}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Quick Section Anchor Jump Links */}
        <nav className="hidden md:flex items-center gap-1 ml-2 text-xs font-mono">
          <a
            href="#passport"
            className="px-2.5 py-1 rounded text-[#c2cab0] hover:text-[#ccff80] hover:bg-[#171f33]/60 transition-colors"
          >
            Паспорт
          </a>
          <a
            href="#specifications"
            className="px-2.5 py-1 rounded text-[#c2cab0] hover:text-[#ccff80] hover:bg-[#171f33]/60 transition-colors"
          >
            Характеристики
          </a>
          <a
            href="#history"
            className="px-2.5 py-1 rounded text-[#c2cab0] hover:text-[#ccff80] hover:bg-[#171f33]/60 transition-colors"
          >
            Історія
          </a>
          <a
            href="#analytics"
            className="px-2.5 py-1 rounded text-[#c2cab0] hover:text-[#ccff80] hover:bg-[#171f33]/60 transition-colors"
          >
            Аналітика
          </a>
        </nav>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button
          onClick={handleDownloadHtml}
          className="flex items-center gap-1.5 px-2.5 py-1 bg-[#ccff80]/10 hover:bg-[#ccff80]/20 border border-[#ccff80]/30 text-[#ccff80] rounded text-[11px] font-mono transition-all"
          title="Відкрити або завантажити автономний HTML файл"
        >
          <Download className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">HTML файл</span>
        </button>

        <div className="flex items-center gap-2 text-[#ccff80]">
          <button
            onClick={onOpenNfcModal}
            title="NFC Authenticator"
            className="flex items-center gap-1 p-1 hover:bg-[#ccff80]/10 rounded transition-colors group"
          >
            <Radio className={`w-[18px] h-[18px] ${isVerified ? 'text-[#ccff80]' : 'text-[#c2cab0] group-hover:text-[#ccff80]'}`} />
          </button>

          <button
            onClick={onOpenNfcModal}
            title="Cryptographic Proof Verified"
            className="flex items-center p-1 hover:bg-[#ccff80]/10 rounded transition-colors"
          >
            <ShieldCheck className="w-[18px] h-[18px] text-[#ccff80]" />
          </button>

          <button
            onClick={onOpenNfcModal}
            title="Digital Fingerprint"
            className="flex items-center p-1 hover:bg-[#ccff80]/10 rounded transition-colors"
          >
            <Fingerprint className="w-[18px] h-[18px] text-[#ccff80]" />
          </button>
        </div>
      </div>
    </header>
  );
};

