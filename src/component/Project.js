import { Box, Center,Grid,Heading,Text } from '@chakra-ui/react'
import React from 'react'
import  outlook from "./images/outlook.png"
import  Kindmeal from "./images/Kindmeal.png"

const Project = () => {
  return (
    <div padding="1rem">
 
 <Center id="project"  padding="1rem">
 <Heading as="b" color="rgb(206,147,216)">
      Projects
    </Heading>
        </Center>
        <Box  border="1px solid black" width={"60%"} margin="auto"  padding="1rem"  >

<Grid  templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(2,1fr)' }}   >


<div className='box' marginBottom="55px" >  

 <img hight={"375px"} width={"375px"} src={Kindmeal}/>
<h1>
   A Restaurant coupon service provider where you can search the restaurants
 and grab the coupon
 </h1>
 <p>Collaborative project accomplished with a team of 4 developers executed in 5 days</p>
<p>Tech Stack HTML || CSS || JavaScript || JSON</p>
</div>
<div className='box'>  
  <img hight={"375px"} width={"375px"} src={outlook}/>
<h1>Outlook India is most vibrant current affairs and news magazine launched in 1995. It is an insightful, thought-provoking, compelling, in-depth business magazine that delivers a fresh perspective, coupled with a holistic approach.</h1>
<p>Collaborative project accomplished with a team of 3 developers executed in 5 days</p>
<p>Tech Stack HTML || CSS || JavaScript || JSON</p>
</div>


</Grid>
</Box>

    </div>
  )
}

export default Project