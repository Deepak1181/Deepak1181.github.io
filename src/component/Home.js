import { Box, Center, Heading } from '@chakra-ui/react'
import React from 'react'
import Contact from './Contact'
import "./Home.css"
import { Navbaarsmall } from './Navbaarsmall'
import Project from './Project'
import Skill from './Skill'
import Type from './Type'
import GotoTop from './GotoTop'
export default function () {
  return (
    <div className='bg'>
      <GotoTop/>

      {/* <img style={{width:"100%"}} src="https://imgs.search.brave.com/NKZJdeX1UsKNo7KD8uu4HgCwoaHJg5GrPlm8zLPD4mM/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4z/MGZ1UGwzeDlLdk1C/MlpZVzBrN293SGFF/SyZwaWQ9QXBp"/> */}
    <Center style={{display:"flex",margin:"auto",flexWrap: "wrap-reverse",gap:"40px" }}  >
      <div className='home' id="home">
         <h1> Hello 👋,My name is Deepak  </h1>
         <h1> I am fullstack frontend Developer</h1>
         <p>I Love,</p>
         <Type/>
      </div>

    <Center width={["70%","60%","50%","40%"]}>
      <img style={{height:"250px",borderRadius:"50%"}} src="https://avatars.githubusercontent.com/u/95513828?v=4"/>
    </Center>

  
    </Center>

    <div className='whoI' id="about">
    <Heading as="b" id="font" color="rgb(206,147,216)"  padding="0.5rem"   >
         who Am I ?
    </Heading>
      <h1>Full Stack Web Developer skilled in MERN stack who focuses on writing clean, elegant and efficient code.
I'm a passionate learner who's always willing to learn and work across technologies and domains. I love to explore new technologies and leverage them to solve real-life problems</h1>
    </div>
    <Skill/>
    <Project/>
    <Contact/>
    </div>

  )
}

