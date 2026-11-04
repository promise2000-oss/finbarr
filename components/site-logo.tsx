import type { ImgHTMLAttributes } from 'react'

type SiteLogoProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'>

export function SiteLogo({ className = '', ...props }: SiteLogoProps) {
  return (
    <img
      src="/favicon.ico"
      alt="St. Finbarr's College crest"
      width={48}
      height={48}
      className={`site-logo ${className}`}
      {...props}
    />
  )
}
