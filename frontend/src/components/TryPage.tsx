import { useEffect, useState } from 'react';

interface TryPageProps {
  onBack?: () => void;
}

export default function TryPage(_props: TryPageProps) {
  const [iframeSrc, setIframeSrc] = useState(() => {
    const search = window.location.search;
    return `https://closeiq-try.onrender.com/${search}`;
  });

  useEffect(() => {
    const handleLocation = () => {
      setIframeSrc(`https://closeiq-try.onrender.com/${window.location.search}`);
    };
    window.addEventListener('popstate', handleLocation);
    return () => window.removeEventListener('popstate', handleLocation);
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen bg-[#050507] overflow-hidden z-50">
      <iframe
        src={iframeSrc}
        title="CloseIQ PulseRoleplay AI Simulator"
        className="w-full h-full border-0 bg-[#050507]"
        allow="microphone; camera; clipboard-write; autoplay"
        allowFullScreen
      />
    </div>
  );
}
