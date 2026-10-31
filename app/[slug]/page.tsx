import Link from "next/link"

const pages: Record<string, { eyebrow: string; title: string; intro: string; items: string[] }> = {
  academics: {
    eyebrow: "Learning",
    title: "Academic excellence, built for the whole person.",
    intro: "From rigorous academics to technical and vocational formation, Finbarrian learning develops curiosity, competence, and character.",
    items: ["Curriculum & departments", "Technical and vocational subjects", "Academic calendar", "Examinations and achievements"],
  },
  "student-life": {
    eyebrow: "Student life",
    title: "A school life with rhythm, spirit and purpose.",
    intro: "Football, debate, culture, clubs, excursions and the daily work of becoming a man of integrity.",
    items: ["Clubs and societies", "Football and inter-house sports", "Debate and cultural activities", "School events and excursions"],
  },
  boarding: {
    eyebrow: "Boarding house",
    title: "A place to grow in independence.",
    intro: "Our boarding experience brings structure, care and community to every part of a student’s day.",
    items: ["Facilities and hostel life", "Student welfare", "Daily routine and healthcare", "House rules and weekend activities"],
  },
  alumni: {
    eyebrow: "Old boys",
    title: "The Finbarrian brotherhood continues.",
    intro: "SFC alumni carry the school’s values into leadership, service, sport and professional life across the world.",
    items: ["About SFCOBA", "Distinguished alumni", "Success stories", "Reunions, mentorship and giving"],
  },
  faq: {
    eyebrow: "Need to know",
    title: "Answers for the Finbarrian journey.",
    intro: "Find clear answers to common questions about admissions, academics, boarding and school life.",
    items: ["Admissions", "Academics", "Boarding", "General information"],
  },
  news: {
    eyebrow: "News & events",
    title: "Life at SFC, as it happens.",
    intro: "Stories, announcements, competitions, awards and the moments that make up the school year.",
    items: ["Latest news", "Upcoming events", "Awards and competitions", "Announcements"],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "A visual record of Finbarrian life.",
    intro: "Explore the places, people and traditions that make Saint Finbarr’s College distinctive.",
    items: ["Campus", "Holy Mass", "Graduation", "Sports and football", "Cultural day", "Boarding house"],
  },
  downloads: {
    eyebrow: "Downloads",
    title: "Documents for families and students.",
    intro: "Access the forms, handbooks, calendars and timetables you need throughout the school year.",
    items: ["Admission forms", "School calendar", "Parent handbook", "Student handbook", "Examination timetables"],
  },
}

export default async function SectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = pages[slug] ?? pages.academics

  return (
    <main className="inner-page">
      <header className="inner-nav">
        <Link href="/" className="wordmark">SFC</Link>
        <Link href="/" className="back-link">Back home <span aria-hidden="true">←</span></Link>
      </header>
      <section className="inner-hero">
        <p className="eyebrow"><span />{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p className="inner-intro">{page.intro}</p>
      </section>
      <section className="inner-content">
        <p className="section-label">Explore this section</p>
        <div className="section-list">
          {page.items.map((item, index) => (
            <div className="section-row" key={item}>
              <span className="row-number">0{index + 1}</span>
              <h2>{item}</h2>
              <span className="row-arrow" aria-hidden="true">↗</span>
            </div>
          ))}
        </div>
        <Link href="/contact" className="text-link">Ask the school a question <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  )
}
