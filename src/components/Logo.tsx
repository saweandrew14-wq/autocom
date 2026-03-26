export default function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  const logoUrl = "https://lh3.googleusercontent.com/d/1m5UwAp1iCgrStla5FArOewNT_EnwzqHW";
  
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoUrl} 
        alt="Autocom Systems Logo" 
        className={`h-10 md:h-14 w-auto object-contain transition-all duration-300 ${light ? 'brightness-0 invert' : ''}`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
