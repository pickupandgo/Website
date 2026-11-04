import { siteConfig } from '../config/siteConfig';

interface GooglePlayButtonProps {
  className?: string;
  heightClass?: string;
}

export function GooglePlayButton({ className = '', heightClass = 'h-11 sm:h-12' }: GooglePlayButtonProps) {
  return (
    <a
      href={siteConfig.apkDownloadUrl}
      download={siteConfig.apkFileName}
      title="Download MultipleRide Android App (APK)"
      aria-label="Download MultipleRide Android App (APK)"
      className={`inline-flex items-center transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] drop-shadow-sm hover:drop-shadow-md cursor-pointer ${className}`}
    >
      <img
        src="/google-play-badge.svg"
        alt="Download MultipleRide Android App"
        className={`${heightClass} w-auto object-contain rounded-lg`}
      />
    </a>
  );
}
