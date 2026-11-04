import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'

export default function AdmissionsPage() {
  return <main className="inner-page"><section className="inner-hero inner-hero-gold"><span className="eyebrow gold-text"><span className="eyebrow-line" /> Admissions</span><h1>Begin the<br /><em>journey.</em></h1><p>Everything you need to take the first step toward a St. Finbarr&apos;s education.</p></section><section className="inner-content"><div><span className="section-kicker"><span>01</span><span>2027 / 2028 SESSION</span></span><h2>Admission<br />at a <em>glance.</em></h2></div><div className="inner-copy"><p className="lead">Admission is open for boys who will be at least 10 years old by September of the admission year.</p><ul className="check-list"><li><Check size={18} /> Entrance examination and interview</li><li><Check size={18} /> Recent passport photographs and school records</li><li><Check size={18} /> Parent or guardian consultation</li></ul><a className="button navy-button" href="mailto:info@stfinbarrscollege.org?subject=Admissions enquiry">Start an enquiry <ArrowUpRight size={17} /></a></div></section></main>
}
