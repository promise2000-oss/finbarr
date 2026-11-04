import Link from 'next/link'
import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { siteConfig } from '../lib/site-config'
import { SiteLogo } from './site-logo'

export function SiteFooter() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="footer-top">
        <div className="footer-brand-block">
          <Link href="/" className="brand footer-brand" aria-label="St. Finbarr's College home">
            <SiteLogo className="crest-logo crest-light" />
            <span>St. Finbarr&apos;s<br /><em>College</em></span>
          </Link>
          <p className="footer-motto">The House of Faith &amp; Excellence</p>
          <p className="footer-location">{siteConfig.address} · Est. {siteConfig.est}</p>
        </div>

        <nav className="footer-nav" aria-label="School links">
          <span className="footer-nav-title">School</span>
          <Link href="/story">Our story</Link>
          <Link href="/#formation">Formation</Link>
          <Link href="/admissions">Admissions</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <nav className="footer-nav" aria-label="Learning and life links">
          <span className="footer-nav-title">Learning &amp; Life</span>
          <Link href="/academics">Academics</Link>
          <Link href="/student-life">Student life</Link>
          <Link href="/boarding">Boarding</Link>
          <Link href="/alumni">Alumni</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
        <nav className="footer-nav" aria-label="Resource links">
          <span className="footer-nav-title">Resources</span>
          <Link href="/news">News &amp; events</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/downloads">Downloads</Link>
        </nav>
      </div>

      <div className="footer-actions">
        <Link className="button gold-button" href="/admissions">Apply now <ArrowUpRight size={16} /></Link>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} St. Finbarr&apos;s College</span>
        <a href="#top">Back to top <ArrowUp size={15} /></a>
      </div>
    </footer>
  )
}
