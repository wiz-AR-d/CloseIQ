import { useState } from 'react';

interface TryPageProps {
  onBack?: () => void;
}

export default function TryPage({ onBack }: TryPageProps) {
  const [selectedHero, setSelectedHero] = useState<string>('closer');

  const heroes = [
    {
      id: 'closer',
      role: 'The Deal Closer',
      description: 'Master of negotiation, handling objections with absolute poise, converting warm leads to signed agreements.',
      glow: 'shadow-[0_0_25px_rgba(59,130,246,0.25)] border-blue-500/50',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      tag: 'Negotiation Expert'
    },
    {
      id: 'hunter',
      role: 'The Lead Hunter',
      description: 'Relentless prospector, finding opportunities where others see dead ends, building pipeline with ease.',
      glow: 'shadow-[0_0_25px_rgba(59,130,246,0.25)] border-blue-500/50',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      tag: 'Outbound Specialist'
    },
    {
      id: 'advisor',
      role: 'The Trusted Advisor',
      description: 'Consultative strategist, building deep relationship capital, helping clients discover and solve true needs.',
      glow: 'shadow-[0_0_25px_rgba(139,92,246,0.25)] border-purple-500/50',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      tag: 'Solutions Consultant'
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-white relative overflow-hidden flex flex-col items-center justify-center font-sans py-12 px-6">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-4xl w-full relative z-10 text-center flex flex-col items-center">
        {/* Navigation Indicator / Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 backdrop-blur-md rounded-full text-xs font-semibold tracking-widest uppercase text-blue-400 mb-8 border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
          Try Experience
        </div>

        {/* The Title text requested by the user */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight max-w-2xl">
          You can be a hero <br />
          <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            who you are
          </span>
        </h1>

        <p className="text-white/60 max-w-xl text-base md:text-lg mb-12 font-medium leading-relaxed">
          CloseIQ helps you discover and amplify your native sales personality. Select a role archetype below to unleash your super powers.
        </p>

        {/* Hero Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
          {heroes.map((hero) => {
            const isSelected = selectedHero === hero.id;
            return (
              <div
                key={hero.id}
                onClick={() => setSelectedHero(hero.id)}
                className={`cursor-pointer text-left p-6 rounded-2xl border transition-all duration-500 bg-[#0E0E11]/80 backdrop-blur-xl ${
                  isSelected 
                    ? `${hero.glow} scale-[1.03] bg-[#121216] border-white/20` 
                    : 'border-white/5 hover:border-white/10 hover:bg-[#121216]/50'
                }`}
              >
                <div className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider mb-4 border ${hero.badgeColor}`}>
                  {hero.tag}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{hero.role}</h3>
                <p className="text-sm text-white/70 leading-relaxed font-medium">
                  {hero.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA / Action */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
          <button 
            onClick={onBack}
            className="px-6 py-2.5 bg-transparent border border-white/10 hover:border-white/20 text-white/80 hover:text-white font-semibold text-sm rounded-full transition-all duration-300 flex items-center gap-2 group"
          >
            <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Back to Home
          </button>
          <button 
            onClick={() => window.location.href = 'mailto:hello@closeiq.ai?subject=I want to be a CloseIQ Hero'}
            className="px-8 py-3 bg-blue-500 text-black font-bold text-sm rounded-full hover:bg-blue-400 hover:shadow-[0_0_20px_rgba(96,165,250,0.4)] transition-all duration-300"
          >
            Activate Your Persona
          </button>
        </div>
      </div>
    </div>
  );
}
