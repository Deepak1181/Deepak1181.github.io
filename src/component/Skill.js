import { Box, Center, Grid,Heading,Image,Text } from '@chakra-ui/react'
import React from 'react'

import chakra from "./images/chakra.png"
import css from "./images/css.png"
import github from "./images/github.webp"
import javascript from "./images/javascript.png"
import netlify from "./images/netlify.webp"
import nextjs from "./images/nextjs.webp"
import nodejs from "./images/node js.webp"
import react from "./images/react.png"
import redux from "./images/redux.png"
import scode from "./images/scode.webp"
import html from "./images/html.png"
import typescript from "./images/Atypescript.png"
import vercel from "./images/vercel.webp"

import "./skill.css";


export default function Skill() {
  return (
    <div >
      <Center id="skill" p="20" >
          {/* <Text fontSize="5xl"></Text> */}
          <Heading as="b" color="rgb(206,147,216)" >
          Professional Skill Sets
    </Heading>
        </Center>
<Box  border="0px solid white" width={"60%"} margin="auto" >

        <Grid p="10" templateColumns={{ base: 'repeat(2,1fr)', md: 'repeat(3,1fr)', lg: 'repeat(4,1fr)' }} gap="5"  >

     <Box className='boxes'  >
     <Image width={"65%"} src={chakra}/>
      <h1>chakra</h1>
     </Box>

      <div className='boxes'  >
      <Image width={"65%"} src={css}/>
      <h1>css</h1>
      </div>

      
      <div className='boxes'>  
          <Image width={"65%"} src={html}/>
        <h1>HTML</h1>
        </div>
      <div className='boxes'>  
          <Image width={"65%"} src={typescript}/>
        <h1>TypeScript</h1>
        </div>
     
      <div className='boxes'>  
          <Image width={"65%"} src={react}/>
        <h1>React</h1>
        </div>
      <div className='boxes'>  
          <Image  width={"65%"} src={redux}/>
        <h1>Redux</h1>
        </div>
     
      <div className='boxes'>  
          <Image  width={"65%"} src={nodejs}/>
        <h1>Node js</h1>
        </div>
      <div className='boxes'>  
          <Image  width={"65%"} src={javascript}/>
        <h1>Java script</h1>
        </div>
        </Grid>
        </Box>

        <Center>
        <Heading as="b" color="rgb(206,147,216)" padding="10">
         Tools
    </Heading>
        </Center>

        <Box  border="0px solid black" width={"60%"} margin="auto"  >

<Grid  templateColumns={{ base: 'repeat(2,2fr)', md: 'repeat(3,2fr)', lg: 'repeat(4,2fr)' }}   >


<div className='tool' >  

 <img hight={"75px"} width={"75px"} src={vercel}/>
<h1>vercel</h1>
</div>
<div className='tool'>  
  <img hight={"75px"} width={"75px"} src={github}/>
<h1>Github</h1>
</div>

<div className='tool'>  
  <img hight={"75px"} width={"75px"} src={scode}/>
<h1>VS Code</h1>
</div>
<div className='tool'>  
  <img hight={"75px"} width={"75px"} src={netlify}/>
<h1>Netlify</h1>
</div>

</Grid>
</Box>



        </div>
  )
}
