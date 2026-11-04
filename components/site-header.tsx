'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, ChevronDown, Menu, Search, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { SiteLogo } from './site-logo'

const primaryLinks = [
  { href: '/story', label: 'Our story' },
  { href: '/#formation', label: 'Formation' },
  { href: '/academics', label: 'Academics' },
  { href: '/student-life', label: 'Student life' },
  { href: '/boarding', label: 'Boarding' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/contact', label: 'Contact' },
]

const moreLinks = [
  { href: '/alumni', label: 'Alumni' },
  { href: '/faq', label: 'FAQ' },
  { href: '/news', label: 'News & events' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/downloads', label: 'Downloads' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const moreRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setMobileOpen(false)
        setSearchOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const isHome = pathname === '/'
  const solid = !isHome || scrolled
  const isActive = (href: string) => href !== '/#formation' && pathname === href

  return (
    <header className={`site-header ${solid ? 'site-header-solid' : ''}`}>
      <Link href="/" className="brand" aria-label="St. Finbarr's College home">
        <SiteLogo className="crest-logo" />
        <span>St. Finbarr&apos;s<br /><em>College</em></span>
      </Link>

      <nav className="desktop-nav" aria-label="Main navigation">
        {primaryLinks.map((link) => (
          <Link className={isActive(link.href) ? 'active' : ''} href={link.href} key={link.href}>{link.label}</Link>
        ))}
        <div className="more-nav" ref={moreRef}>
          <button
            type="button"
            className="more-trigger"
            aria-expanded={menuOpen}
            aria-haspopup="menu"
            onClick={() => setMenuOpen((open) => !open)}
            onKeyDown={(event) => {
              if (event.key === 'ArrowDown') {
                event.preventDefault()
                setMenuOpen(true)
                requestAnimationFrame(() => moreRef.current?.querySelector<HTMLAnchorElement>('[role="menuitem"]')?.focus())
              }
            }}
          >
            More <ChevronDown size={15} />
          </button>
          {menuOpen && (
            <div
              className="more-menu"
              role="menu"
              onKeyDown={(event) => {
                const items = Array.from(event.currentTarget.querySelectorAll<HTMLAnchorElement>('[role="menuitem"]'))
                const current = items.indexOf(document.activeElement as HTMLAnchorElement)
                if (event.key === 'ArrowDown') {
                  event.preventDefault()
                  items[(current + 1) % items.length]?.focus()
                } else if (event.key === 'ArrowUp') {
                  event.preventDefault()
                  items[(current - 1 + items.length) % items.length]?.focus()
                }
              }}
            >
              {moreLinks.map((link) => (
                <Link role="menuitem" className={isActive(link.href) ? 'active' : ''} href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      <div className="header-actions">
        <button className="icon-button" type="button" aria-label="Search" onClick={() => setSearchOpen((open) => !open)}><Search size={19} /></button>
        <Link className="header-cta" href="/admissions">Apply now <ArrowUpRight size={16} /></Link>
        <button className="menu-button" type="button" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {searchOpen && (
        <div className="search-panel">
          <Search size={18} />
          <input autoFocus placeholder="Search St. Finbarr&apos;s College" aria-label="Search the website" />
          <button type="button" aria-label="Close search" onClick={() => setSearchOpen(false)}><X size={18} /></button>
        </div>
      )}

      {mobileOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <button className="mobile-nav-close" type="button" aria-label="Close menu" onClick={() => setMobileOpen(false)}><X size={22} /></button>
          {[...primaryLinks, ...moreLinks].map((link) => (
            <Link className={isActive(link.href) ? 'active' : ''} href={link.href} key={link.href} onClick={() => setMobileOpen(false)}>{link.label}</Link>
          ))}
          <Link className="mobile-apply" href="/admissions" onClick={() => setMobileOpen(false)}>Apply now <ArrowUpRight size={16} /></Link>
        </nav>
      )}
    </header>
  )
}
