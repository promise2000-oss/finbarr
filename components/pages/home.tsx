'use client'

import { useState } from 'react'
import {
  ArrowDown, ArrowUpRight, CalendarDays, ChevronDown, CircleArrowOutUpRight,
  Quote,
} from 'lucide-react'
import { SiteLogo } from '../site-logo'

const values = ['Excellence', 'Discipline', 'Morality', 'Fear of God', 'Integrity', 'Commitment', 'Respect for Human Life', 'Gratitude']

const strengths = [
  { number: '01', title: 'STEM', text: 'Practical skills in science, technology and engineering for university and the world of work.' },
  { number: '02', title: 'Faith formation', text: 'Daily Mass, homilies and morning assembly keep Catholic values at the centre of school life.' },
  { number: '03', title: 'Beyond the classroom', text: 'Orchestra, dance, drama, football, basketball and athletics develop the whole person.' },
]

const milestones = [
  ['1956', 'A school begins', 'Founded by Rev. Fr. D.J. Slattery, SMA, with six boys and a vision for a unique Catholic school.'],
  ['1960s', 'A growing community', 'The school develops its academic, sporting and faith traditions in Lagos.'],
  ['2026', '70 years of formation', 'A living legacy of faith, excellence and service continues on the Akoka campus.'],
]

function Crest({ light = false }: { light?: boolean }) {
  return <SiteLogo className={`crest crest-logo ${light ? 'crest-light' : ''}`} />
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="hero-copy"><p className="eyebrow gold-text"><span className="eyebrow-line" /> Akoka · Lagos · Est. 1956</p><h1>Citadel<br /><i>of</i> Excellence</h1><p className="hero-intro">Comprehensive Catholic education for boys — nurturing young men of character, knowledge and faith.</p><div className="hero-links"><a className="button gold-button" href="#admissions">Begin the journey <ArrowUpRight size={17} /></a><a className="text-link light-link" href="#story">Discover our story <ArrowDown size={16} /></a></div></div>
        <div className="hero-mark"><Crest light /><span>THE HOUSE OF<br />FAITH &amp; EXCELLENCE</span></div>
        <div className="hero-footer"><span>01 / 04</span><span className="hero-scroll"><span className="scroll-line" /> Scroll to explore</span><span>70 years<br />of formation</span></div>
      </section>

      <section className="notice-bar"><CalendarDays size={19} /><p><strong>Admissions open</strong> for the 2027/2028 academic session.</p><a href="#admissions">View requirements <ArrowUpRight size={15} /></a></section>

      <section className="intro-section section-pad" id="story">
        <div className="section-kicker"><span>01</span><span>THE FOUNDATION</span></div><div className="intro-layout"><h2>A school is<br />a <em>formation.</em></h2><div className="intro-body"><p className="lead">St. Finbarr&apos;s College is a Catholic boys&apos; school owned by the Catholic Archdiocese of Lagos.</p><p>Founded in 1956 by an Irish missionary priest, Rev. Fr. D.J. Slattery, we have grown from a class of six boys into one of the best-known mission schools in Lagos. We offer a rounded education in which academic excellence, discipline and the fear of God go hand in hand.</p><a className="text-link dark-link" href="/story">Read our history <ArrowUpRight size={16} /></a></div></div>
      </section>

      <section className="statement-section" id="formation"><div className="statement-word">BECOME</div><div className="statement-content"><Quote size={32} className="quote-mark" /><p>To produce God-fearing young men who pursue excellence in all they do, and who are creative, self-reliant and useful to society.</p><span>Our vision</span></div></section>

      <section className="strengths-section section-pad"><div className="section-kicker"><span>02</span><span>THE FINBARRIAN WAY</span></div><div className="section-heading-row"><h2>Built for the<br /><em>whole person.</em></h2><p>Mind. Character. Faith. Three strands, one formation.</p></div><div className="strength-grid">{strengths.map((item) => <article className="strength-item" key={item.number}><span className="item-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><a href="#contact" aria-label={`Learn more about ${item.title}`}><CircleArrowOutUpRight size={21} /></a></article>)}</div></section>

      <section className="values-section"><div className="values-heading"><span className="eyebrow gold-text"><span className="eyebrow-line" /> A compass for life</span><h2>The values<br />we <em>live by.</em></h2></div><div className="values-list">{values.map((value, index) => <div className="value-row" key={value}><span>0{index + 1}</span><strong>{value}</strong><ArrowUpRight size={18} /></div>)}</div></section>

      <section className="history-section section-pad" id="history"><div className="section-kicker"><span>03</span><span>SEVENTY YEARS</span></div><div className="history-top"><h2>From six boys<br />to <em>a legacy.</em></h2><p>Our story is not only about where we began. It is about the young men who carry the Finbarrian spirit forward.</p></div><div className="timeline">{milestones.map(([year, title, text], index) => <div className="timeline-item" key={year}><span className="timeline-year">{year}</span><div className="timeline-dot" /><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></section>

      <section className="admissions-section" id="admissions"><div className="admissions-inner"><div><span className="eyebrow gold-text"><span className="eyebrow-line" /> Your next chapter</span><h2>Give your son<br />a <em>foundation.</em></h2></div><div className="admissions-copy"><p>Admission is open for the 2027/2028 academic session. Candidates must meet the age requirement of 10 by September.</p><a className="button gold-button" href="mailto:info@stfinbarrscollege.org">Enquire about admission <ArrowUpRight size={17} /></a></div></div></section>

      <section className="faq-section section-pad"><div className="section-kicker"><span>04</span><span>QUESTIONS, ANSWERED</span></div><div className="faq-layout"><h2>Here to<br /><em>help.</em></h2><div>{['What kind of school is St. Finbarr’s College?', 'How do I apply for admission?', 'Where is the school located?'].map((question, index) => <div className="faq-item" key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown size={19} className={openFaq === index ? 'rotate' : ''} /></button>{openFaq === index && <p>{index === 0 ? 'St. Finbarr’s College is a Catholic boys’ school owned by the Catholic Archdiocese of Lagos, providing a rounded education in academics, discipline and faith.' : index === 1 ? 'Admission information and the current session requirements are available from our admissions team. Use the enquiry link above to begin.' : 'We are located in Akoka, Yaba, Lagos. Contact our office for directions and visiting information.'}</p>}</div>)}</div></div></section>

    </main>
  )
}
