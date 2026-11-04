import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function StoryPage() {
  return (
    <main className="inner-page">
      <section className="inner-hero"><span className="eyebrow gold-text"><span className="eyebrow-line" /> Our story</span><h1>From six boys<br />to <em>a legacy.</em></h1><p>Founded in 1956 by Rev. Fr. D.J. Slattery, SMA, St. Finbarr&apos;s College has grown into one of Lagos&apos; most respected Catholic mission schools.</p></section>
      <section className="inner-content"><div><span className="section-kicker"><span>01</span><span>THE BEGINNING</span></span><h2>A formation<br />for <em>life.</em></h2></div><div className="inner-copy"><p className="lead">We believe education is more than the transfer of knowledge. It is the formation of young men who know what they stand for.</p><p>Our school community brings together the intellectual, spiritual, physical and social dimensions of a boy&apos;s development. Through rigorous academics, the Sacraments, sport, music and service, each Finbarrian is challenged to become his best self.</p><p>Today, the school continues its mission in Akoka with the same sense of purpose that marked its earliest days: faith at the centre, excellence as the standard, and character as the measure.</p><Link className="button navy-button" href="/admissions">Explore admissions <ArrowUpRight size={17} /></Link></div></section>
    </main>
  )
}
