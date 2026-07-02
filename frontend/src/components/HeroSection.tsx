// @ts-ignore
import Hyperspeed from './Hyperspeed';

export default function HeroSection({ onOpenPopup }: { onOpenPopup?: () => void }) {
  return (
    <header className="min-h-screen pt-20 bg-background text-on-background relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* Intense technical Hyperspeed background (Clay.com style dark mode) */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed
          effectOptions={{"distortion":"turbulentDistortion","length":400,"roadWidth":10,"islandWidth":2,"lanesPerRoad":3,"fov":90,"fovSpeedUp":150,"speedUp":2,"carLightsFade":0.4,"totalSideLightSticks":20,"lightPairsPerRoadWay":40,"shoulderLinesWidthPercentage":0.05,"brokenLinesWidthPercentage":0.1,"brokenLinesLengthPercentage":0.5,"lightStickWidth":[0.12,0.5],"lightStickHeight":[1.3,1.7],"movingAwaySpeed":[60,80],"movingCloserSpeed":[-120,-160],"carLightsLength":[12,80],"carLightsRadius":[0.05,0.14],"carWidthPercentage":[0.3,0.5],"carShiftX":[-0.8,0.8],"carFloorSeparation":[0,5],"colors":{"roadColor":526344,"islandColor":657930,"background":0,"shoulderLines":1250072,"brokenLines":1250072,"leftCars":[366185,1096065,2278750],"rightCars":[1096065,889992,292951],"sticks":1096065}}}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
        
        {/* Top Text Content */}
        <div className="text-center max-w-4xl mx-auto mb-16 relative z-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-full text-xs font-bold tracking-wider uppercase text-on-surface-variant mb-8 border border-outline shadow-clay-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
            FASTER TO FIRST DEAL
          </div>
          <h1 className="font-sans text-5xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[1.05] tracking-tighter text-on-background mb-6">
            Ramp reps in days, <br className="hidden md:block"/>
            <span className="text-on-surface-variant">not months.</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-10 font-sans font-medium">
            AI onboarding, practice, and live guidance for modern sales teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onOpenPopup}
              className="px-8 py-3.5 bg-primary text-on-primary font-semibold rounded-full hover:bg-surface-container-highest transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Start Building
            </button>
          </div>
          
          {/* Backed By Section */}
          <div className="mt-24 flex flex-col items-center z-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-on-surface-variant mb-8 text-center">
              Backed by leaders from
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14 bg-surface-container-high/60 backdrop-blur-md px-10 py-5 rounded-full border border-outline/30 shadow-clay-sm">
              <div className="flex items-center cursor-default">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" className="h-5 brightness-0 invert" />
                <span className="font-sans font-semibold tracking-tight text-white text-lg ml-2">for  Startups</span>
              </div>
              <div className="h-6 w-px bg-outline/30 hidden sm:block"></div>
              <div className="flex items-center cursor-default">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google G" className="h-5 w-5 brightness-0 invert mr-2" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-5 brightness-0 invert" />
                <span className="font-sans font-semibold tracking-tight text-white text-lg ml-2">for  Startups</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
