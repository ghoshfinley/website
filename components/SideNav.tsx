'use client'
import { useEffect, useState } from 'react'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function SideNav() {
  const [active, setActive] = useState('')
  const [onHero, setOnHero] = useState(true)

  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY
      const vh = window.innerHeight

      setOnHero(scrollY < vh * 0.6)

      // near bottom of page → force last section active
      const nearBottom = scrollY + vh >= document.documentElement.scrollHeight - 50
      if (nearBottom) {
        setActive(sections[sections.length - 1].id)
        return
      }

      // active = last section whose top edge has crossed 40% down the viewport
      const threshold = scrollY + vh * 0.4
      let current = ''
      for (const { id } of sections) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= threshold) current = id
      }
      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden md:flex items-start gap-3"
      style={{
        opacity: onHero ? 0 : 1,
        pointerEvents: onHero ? 'none' : 'auto',
        transition: 'opacity 700ms ease',
      }}
    >
      <div className="flex flex-col gap-2.5 py-2.5">
        {sections.map(({ id, label }) => (
          <div key={id} className="h-5 flex items-center justify-end">
            <span
              className="text-xs tracking-widest uppercase whitespace-nowrap"
              style={{
                color: 'rgb(156,163,175)',
                opacity: active === id ? 1 : 0,
                transition: 'opacity 700ms ease',
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      <div
        className="flex flex-col gap-2.5 rounded-2xl py-2.5 px-3"
        style={{ background: 'rgba(255,255,255,0.07)' }}
      >
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="flex items-center justify-center h-5 w-5 cursor-pointer"
            aria-label={`Go to ${label}`}
          >
            <span
              className="block rounded-full"
              style={{
                width: '6px',
                height: '6px',
                background: active === id ? '#22d3ee' : 'rgba(255,255,255,0.22)',
                transition: 'background-color 700ms ease',
              }}
            />
          </button>
        ))}
      </div>
    </nav>
  )
}
