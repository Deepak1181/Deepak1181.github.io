import { Box, Center,Grid,Text } from '@chakra-ui/react'
import React from 'react'
import  outlook from "./images/outlook.png"
import  Kindmeal from "./images/Kindmeal.png"
const Project = () => {
  return (
    <div>
 
 <Center>
       <Text fontSize="6xl"> Projects</Text>
        </Center>
        <Box  border="0px solid black" width={"60%"} margin="auto"  >

<Grid  templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(2,1fr)' }}   >


<div className='box' >  

 <img hight={"275px"} width={"275px"} src={Kindmeal}/>
<h1>vercel</h1>
</div>
<div className='box'>  
  <img hight={"275px"} width={"275px"} src={outlook}/>
<h1>Github</h1>
</div>


</Grid>
</Box>

    </div>
  )
}

export default Project