import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from '../components/navbar/Navbar'
import Content from '../components/content/Content'
import About from '../components/about/About'
import Service from '../components/services/Service'
import Projects from '../components/projects/Project'
import Skill from '../components/skills/Skill'
import Contact from '../components/contact/Contact'

const Home = () => {
  return (
    <Container>
        <Navbar/>
        <Content/>
        <About/>
        <Service/>
        <Projects/>
        <Skill/>  
        <Contact/>
    </Container>
  )
}

export default Home