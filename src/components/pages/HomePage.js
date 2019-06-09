import React from 'react'
import Header from '../Header'
import mscott from '../images/michscott.png'

export default function HomePage() {

  return (
    <>
      <Header />
      <section className='m-state'>
        <img src={mscott} />
        <div className='m-state-info'>
          <h2> Mission Statement</h2>
          <article>
            Dunder Mifflin, Inc. is committed to providing its customers quality office and information technology products, furniture, printing values and the experience required for making informed buyer decisions.
            We crusade to create a stable working environment and corporate spirit and to afford ordinary folk the chance to buy the same things as rich people. We are also committed to nurturing and promulgating wholesome American values.
        </article>
        </div>
      </section>

    </>
  )
}