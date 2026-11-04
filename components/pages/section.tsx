import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const pages: Record<string, { eyebrow: string; title: string; intro: string; items: Array<{ title: string; description: string; placeholder?: boolean } | string> }> = {
  academics: {
    eyebrow: "Learning",
    title: "Academic excellence, built for the whole person.",
    intro: "From rigorous academics to technical and vocational formation, Finbarrian learning develops curiosity, competence, and character.",
    items: [
      { title: "Curriculum & departments", description: "Content placeholder — add the academic overview.", placeholder: true },
      { title: "Technical and vocational subjects", description: "Content placeholder — add available subjects.", placeholder: true },
      { title: "Academic calendar", description: "Content placeholder — add session dates.", placeholder: true },
      { title: "Examinations and achievements", description: "Content placeholder — add examination details.", placeholder: true },
    ],
  },
  "student-life": {
    eyebrow: "Student life",
    title: "A school life with rhythm, spirit and purpose.",
    intro: "Football, debate, culture, clubs, excursions and the daily work of becoming a man of integrity.",
    items: [
      { title: "Clubs and societies", description: "Content placeholder — add available clubs.", placeholder: true },
      { title: "Football and inter-house sports", description: "Content placeholder — add sports information.", placeholder: true },
      { title: "Debate and cultural activities", description: "Content placeholder — add cultural activities.", placeholder: true },
      { title: "School events and excursions", description: "Content placeholder — add event details.", placeholder: true },
    ],
  },
  boarding: {
    eyebrow: "Boarding house",
    title: "A place to grow in independence.",
    intro: "Our boarding experience brings structure, care and community to every part of a student’s day.",
    items: [
      { title: "Facilities and hostel life", description: "Content placeholder — add boarding facilities.", placeholder: true },
      { title: "Student welfare", description: "Content placeholder — add welfare information.", placeholder: true },
      { title: "Daily routine and healthcare", description: "Content placeholder — add the boarding routine.", placeholder: true },
      { title: "House rules and weekend activities", description: "Content placeholder — add house policies.", placeholder: true },
    ],
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
      <section className="inner-hero">
        <p className="eyebrow"><span />{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p className="inner-intro">{page.intro}</p>
      </section>
      <section className="inner-content section-explore-layout">
        <aside className="section-index">
          <p className="section-label">Explore this section</p>
          <p>{page.intro}</p>
        </aside>
        <div>
          <div className="section-list">
            {page.items.map((item, index) => {
              const title = typeof item === 'string' ? item : item.title
              const description = typeof item === 'string' ? 'Content placeholder — details to be added.' : item.description
              return (
                <article className="section-row" key={title}>
                  <span className="row-number">0{index + 1}</span>
                  <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                  </div>
                </article>
              )
            })}
          </div>
          <div className="section-contact-cta">
            <p>Need guidance with this section?</p>
            <Link href="/contact" className="text-link">Ask the school a question <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </main>
  )
}
