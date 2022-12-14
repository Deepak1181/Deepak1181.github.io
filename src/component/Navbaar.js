import { Box,Heading,Spacer,ButtonGroup,Button,Flex } from "@chakra-ui/react"
import deepak from "./images/Deepak.png"
export default function Navbar(){

   
    return <>
    <Box h='100px' bg={"rgb(38,38,38)"} sx={{ position: '-webkit-sticky', /* Safari */ position: 'sticky', top: '0', }} >
<Flex  minWidth='max-content' alignItems='center' gap='2'  >
  <Box p='2'>
    {/* <Heading size='md' pl={10} color={'black'} >Deepak</Heading> */}
    <img hight={"125px"} width={"115px"} src={deepak}/>
  </Box>
  <Spacer />
  <ButtonGroup  mt={7} mr='100px' gap='2'>
  <a href="#home" ><Button  variant='outline' colorScheme='rgb(206,147,216)'>Home</Button></a>
   
    <a href="#about" ><Button  variant='outline' colorScheme='rgb(206,147,216)'>About</Button></a>
   
    <a href='#skill'><Button  variant='outline' colorScheme='rgb(206,147,216)'>Skill</Button></a>
    
    <a href='#project' ><Button   variant='outline' colorScheme='rgb(206,147,216)'>  Projects</Button></a>
    <a href="#contact" > <Button  variant='outline' colorScheme='rgb(206,147,216)'>Contact</Button></a>
   
   
    
  </ButtonGroup>
</Flex>
</Box>
</>
}