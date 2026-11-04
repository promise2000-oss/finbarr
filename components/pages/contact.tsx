import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { siteConfig } from '../../lib/site-config'

export default function ContactPage() {
  return <main className="inner-page"><section className="inner-hero"><span className="eyebrow gold-text"><span className="eyebrow-line" /> Contact</span><h1>Come and<br /><em>connect.</em></h1><p>Our doors are open to families who want to learn more about the Finbarrian way.</p></section><section className="contact-grid"><div className="contact-card"><MapPin size={22} /><span>Visit us</span><p>St. Finbarr&apos;s College<br />{siteConfig.address}</p></div><div className="contact-card"><Mail size={22} /><span>Email us</span><p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p></div><div className="contact-card"><Phone size={22} /><span>Call the office</span><p><a href={siteConfig.phoneHref}>{siteConfig.phone}</a></p></div></section></main>
}
