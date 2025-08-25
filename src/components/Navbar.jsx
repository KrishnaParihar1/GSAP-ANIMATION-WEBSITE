import React from 'react'
import { navLinks } from './constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {
  useGSAP(() => {
    gsap.fromTo(
      'nav',
      { backgroundColor: 'transparent', backdropFilter: 'blur(0px)' },
      {
        backgroundColor: '#00000050',
        backdropFilter: 'blur(10px)',
        duration: 0.5,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: 'body', // whole page
          start: 'top top', // when top of page hits top
          end: '+=200', // scroll distance to finish anim
          scrub: true, // smooth transition both directions
        },
      }
    )
  })

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-5 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>Velvet Pour</p>
        </a>

        <ul className="flex gap-6 mr-20">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
