import React, { useState, useEffect } from 'react';
import { X, Radio, ShieldCheck, CheckCircle2, Loader2, Sparkles, Smartphone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BuildingPassport } from '../types';

interface NfcModalProps {
  isOpen: boolean;
  onClose: () => void;
  passport: BuildingPassport;
  onVerificationComplete: () => void;
}

export const NfcModal: React.FC<NfcModalProps> = ({
  isOpen,
  onClose,
  passport,
  onVerificationComplete,
}) => {
  const [scanningState, setScanningState] = useState<'idle' | 'scanning' | 'success'>('idle');

  useEffect(() => {
    if (isOpen) {
      setScanningState('idle');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleStartScan = () => {
    setScanningState('scanning');
    setTimeout(() => {
      setScanningState('success');
      onVerificationComplete();
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#ccff80', '#a3e635', '#adc6ff', '#fcce19'],
        });
      } catch (e) {
        // ignore
      }
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#060e20]/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md bg-[#131b2e] border border-[#ccff80]/40 rounded-2xl shadow-2xl p-6 overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#ccff80]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-[#c2cab0] hover:text-[#dae2fd] hover:bg-[#171f33] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center pt-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#ccff80]/10 text-[#ccff80] border border-[#ccff80]/30 mb-3">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            NFC HARDWARE AUTHENTICATOR
          </div>

          <h3 className="text-xl font-bold font-mono text-[#dae2fd]">
            {passport.title}
          </h3>
          <p className="text-xs font-mono text-[#c2cab0] mt-1">
            SERIAL: {passport.serialNumber}
          </p>
        </div>

        {/* Scanner Simulation Area */}
        <div className="my-8 flex flex-col items-center justify-center min-h-[180px]">
          {scanningState === 'idle' && (
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-[#171f33] border-2 border-dashed border-[#ccff80]/60 flex items-center justify-center shadow-[0_0_30px_rgba(204,255,128,0.15)]">
                  <Smartphone className="w-10 h-10 text-[#ccff80]" />
                </div>
              </div>
              <p className="text-xs text-[#c2cab0] max-w-xs leading-relaxed">
                Піднесіть фізичну картку/пристрій NFC або натисніть кнопку нижче для запуску верифікації криптографічного ключа.
              </p>
            </div>
          )}

          {scanningState === 'scanning' && (
            <div className="flex flex-col items-center gap-4 text-center animate-pulse">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-28 h-28 rounded-full border-2 border-[#ccff80] animate-ping opacity-30" />
                <div className="w-24 h-24 rounded-full bg-[#171f33] border-2 border-[#ccff80] flex items-center justify-center">
                  <Loader2 className="w-10 h-10 text-[#ccff80] animate-spin" />
                </div>
              </div>
              <div className="font-mono text-xs text-[#ccff80] tracking-wider">
                ЗЧИТУВАННЯ NFC ЧІПА & ВАЛІДАЦІЯ SHA-256...
              </div>
            </div>
          )}

          {scanningState === 'success' && (
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="w-24 h-24 rounded-full bg-[#ccff80]/20 border-2 border-[#ccff80] flex items-center justify-center shadow-[0_0_40px_rgba(204,255,128,0.4)]">
                <CheckCircle2 className="w-12 h-12 text-[#ccff80]" />
              </div>
              <div className="font-mono text-sm font-bold text-[#ccff80] tracking-wider">
                АВТЕНТИФІКОВАНО УСПІШНО!
              </div>
              <div className="text-[11px] font-mono text-[#c2cab0] bg-[#060e20] p-2 rounded border border-[#424936] max-w-xs truncate">
                HASH: {passport.provenance.tokenHash.substring(0, 24)}...
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-4">
          {scanningState === 'idle' && (
            <button
              onClick={handleStartScan}
              className="w-full bg-[#ccff80] text-[#213600] py-3 rounded-xl font-mono text-xs font-bold hover:bg-[#b2f746] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(204,255,128,0.3)]"
            >
              <Radio className="w-4 h-4" />
              СКАНУВАТИ NFC ТЕПЕР
            </button>
          )}

          {scanningState === 'scanning' && (
            <button
              disabled
              className="w-full bg-[#171f33] text-[#c2cab0] py-3 rounded-xl font-mono text-xs font-medium cursor-not-allowed border border-[#424936]"
            >
              Обробка сертифіката...
            </button>
          )}

          {scanningState === 'success' && (
            <button
              onClick={onClose}
              className="w-full bg-[#ccff80] text-[#213600] py-3 rounded-xl font-mono text-xs font-bold hover:bg-[#b2f746] transition-all"
            >
              ГОТОВО (ЗАКРИТИ)
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
