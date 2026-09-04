import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-auto flex flex-col items-center gap-4 text-center pb-24 lg:pb-8 bg-[#060e20] p-6 border-t border-[#424936]/30">
      <div className="text-[11px] font-mono text-[#c2cab0] leading-relaxed">
        Production by Gen Studio<br />
        Location: Lviv, Ukraine
      </div>

      <div className="flex flex-wrap justify-center gap-4 text-[11px] font-mono text-[#c2cab0]">
        <button
          onClick={() => alert('Terms of Authentication: Cryptographically verified digital twin passport under Chronos Protocol.')}
          className="hover:text-[#ccff80] underline transition-colors"
        >
          Terms of Authentication
        </button>
        <button
          onClick={() => alert('Metadata Policy: Open archival research format compliant with BIM Level 4 and Heritage standards.')}
          className="hover:text-[#ccff80] underline transition-colors"
        >
          Metadata Policy
        </button>
        <button
          onClick={() => alert('Litteris et Artibus: "To Letters and Arts" — Historical motto of Lviv Polytechnic.')}
          className="hover:text-[#ccff80] underline transition-colors"
        >
          Litteris et Artibus
        </button>
      </div>

      <div className="text-[11px] font-mono text-[#ccff80] tracking-wider font-bold">
        © 2150 CHRONOS PROTOCOL | ARCHIVAL PRESTIGE
      </div>
    </footer>
  );
};
