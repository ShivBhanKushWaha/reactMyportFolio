import React from 'react'
import './body.css'
import About from './about'
import Contact from './contact'
import Project from './project'
import Skills  from './skills'
import Work from './work'
const Body = () => {
  return (
    <div className='body'>
      <section id='about'>
        <About/>
      </section>
      <section id='project'>
        <Project/>
      </section>
      <section id='skills'>
        <Skills/>
      </section>
      <section id='work'>
        <Work/>
      </section>
      <section id='contact'>
        <Contact/>
      </section>
    </div>
  )
}

export default Body