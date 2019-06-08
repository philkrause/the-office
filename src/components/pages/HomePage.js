import React from 'react'
import Header from '../Header'
import mscott from '../images/michscott.png'
import dwight from '../images/dwight.jpg'

export default function HomePage() {

  return (
    <>
      <Header />
      <section className='m-state'>
        <img src={mscott} />
        <div className='m-state-info'>
          <h2> MISSION STATEMENT</h2>
          <p>
            Dunder Mifflin, Inc. is committed to providing its customers quality office and information technology products, furniture, printing values and the experience required for making informed buyer decisions.
            We crusade to create a stable working environment and corporate spirit and to give unlimited opportunity to women, and to afford ordinary folk the chance to buy the same things as rich people. We are also committed to nurturing and promulgating wholesome American values.
        </p>
        </div>
      </section>
      <section className='d-state'>
        <img src={dwight} />
        <div className='d-state-info'>
          <h2> Dwight Schrute</h2>
          <p>
            “Would I ever leave this company? Look, I’m all about loyalty.
            In fact, I feel like part of what I’m being paid for here is my loyalty.
            But if there were somewhere else that valued loyalty more highly…
              I’m going wherever they value loyalty the most.”
        </p>
        </div>
      </section>
    </>
  )
}