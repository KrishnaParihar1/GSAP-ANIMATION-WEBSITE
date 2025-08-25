import React from 'react'
import { cocktailLists, mockTailLists } from './constants/index.js'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Cocktails = () => {
  useGSAP(() => {
    const parallaxTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: '#cocktails',
      }
    })
  })
  return (
    <section id="cocktails" className="noisy h-[100vh]">
      <img
        src="/images/cocktail-left-leaf.png"
        alt="left decorative leaf"
        id="c-left-leaf"
        className="absolute left-0 bottom-0"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="right decorative leaf"
        id="c-right-leaf"
        className="absolute right-0 bottom-0"
      />

      <div className="list flex justify-between gap-16 max-w-6xl mx-auto px-6">
        <section className="popular">
          <h2 className="text-2xl font-semibold mb-4">Most popular cocktails</h2>
          <ul className="space-y-4">
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li
                key={name}
                className="flex justify-between items-start border-b pb-2"
              >
                <div className="mme-28">
                  <h3 className="text-lg font-medium">{name}</h3>
                  <p className="text-sm text-gray-500">
                    {country} | {detail}
                  </p>
                </div>
                <span className="font-semibold">- {price}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="loved">
          <h2 className="text-2xl font-semibold mb-4">Most loved mocktails</h2>
          <ul className="space-y-4">
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li
                key={name}
                className="flex justify-between items-start border-b pb-2"
              >
                <div className="me-28">
                  <h3 className="text-lg font-medium">{name}</h3>
                  <p className="text-sm text-gray-500">
                    {country} | {detail}
                  </p>
                </div>
                <span className="font-semibold">- {price}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  )
}

export default Cocktails
