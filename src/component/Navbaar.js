import { Box,Heading,Spacer,ButtonGroup,Button,Flex } from "@chakra-ui/react"
import { useState } from "react"
import deepak from "./images/Deepak.png"
import "./index.css";
import "./Home.css"
export default function Navbar(){
  const [click,setClick]=useState(false)

   
    return <>
    <Box  h='80px' bg={"rgb(38,38,38)"} sx={{ position: '-webkit-sticky', /* Safari */ position: 'sticky', top: '0', }} >
<Flex  minWidth='max-content' alignItems='center' gap='2'  >
  <Box p='2'>
    {/* <Heading size='md' pl={10} color={'black'} >Deepak</Heading> */}
    <img hight={"125px"} width={"115px"} src={deepak}/>
  </Box>
  <Spacer />
  <ButtonGroup  mt={1} mr='80px' gap='2' className={click ? "nav-menu active":"nav-menu"}
 >
  <a href="#home" ><Button   bg='rgb(206,147,216)'>Home</Button></a>
   
    <a href="#about" ><Button  bg='rgb(206,147,216)'>About</Button></a>
   
    <a href='#skill'><Button bg='rgb(206,147,216)'>Skill</Button></a>
    
    <a href='#project' ><Button  bg='rgb(206,147,216)'>  Projects</Button></a>
    <a href="#contact" > <Button bg='rgb(206,147,216)'>Contact</Button></a>
    <a href="#resume" > <Button bg='rgb(206,147,216)' ><a href="https://github.com/dkp041297/Resume/raw/main/Deepak%20Resume.pdf" download>  Resume</a></Button></a>
   
   
    
  </ButtonGroup>
</Flex>
</Box>
</>
}