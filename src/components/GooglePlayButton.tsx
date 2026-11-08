import { siteConfig } from '../config/siteConfig';

interface GooglePlayButtonProps {
  className?: string;
  heightClass?: string;
}

export function GooglePlayButton({ className = '', heightClass = 'h-11 sm:h-12' }: GooglePlayButtonProps) {
  return (
    <a
      href={siteConfig.googlePlayUrl}
      target="_blank"
      rel="noopener noreferrer"
      title="Get it on Google Play"
      aria-label="Get it on Google Play"
      className={`inline-flex items-center transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] drop-shadow-sm hover:drop-shadow-md cursor-pointer ${className}`}
    >
      <img
        src="/google-play-badge.svg"
        alt="Get it on Google Play"
        className={`${heightClass} w-auto object-contain rounded-lg`}
      />
    </a>
  );
}
