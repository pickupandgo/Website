import { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackIcon?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackTitle,
  fallbackIcon = 'local_shipping',
  ...rest
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`bg-gradient-to-br from-[#eceef4] to-[#e0e2e8] flex flex-col items-center justify-center p-4 text-center ${className}`}>
        <span className="material-symbols-outlined text-3xl text-[#544ec2] mb-1.5">{fallbackIcon}</span>
        {fallbackTitle && (
          <span className="font-code-waybill text-[11px] font-semibold text-[#181c20] tracking-wide uppercase">
            {fallbackTitle}
          </span>
        )}
        <span className="text-[11px] text-[#46464c] mt-0.5 line-clamp-1">{alt || 'MultipleRide Fleet & Cargo Logistics'}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      onError={() => setError(true)}
      loading="lazy"
      {...rest}
    />
  );
}
