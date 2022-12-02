
import './index.css';
import { Image,Box, Button, ButtonGroup, Container, Flex, Heading, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue} from '@chakra-ui/react';



function Navbaar() {
 
 
 
 return <div>
<Box  >
  {/* navbar */}
<Box  bg='white' sx={{ position: '-webkit-sticky',  position: 'sticky', top: '0' }} >
<Flex border={'1px solid red'} minWidth='max-content' alignItems='center' gap='2'  >

  <Box p='2'>
    <Heading size='md' color={'black'} >Deepak</Heading>
  </Box>
  <Spacer />
  <ButtonGroup  mr='100px' gap='2'>
    <Button   variant='outline' colorScheme='red'>About</Button>
    <Button   variant='outline' colorScheme='teal'>home</Button>
    <Button  variant='outline' colorScheme='teal'>Skills</Button>
    <Button  variant='outline' colorScheme='teal'>Projects</Button>
    <Button  variant='outline' colorScheme='teal'>Contact</Button>
    <Button  variant='outline' colorScheme='teal'>Resume</Button>
  </ButtonGroup>

</Flex>
</Box>


      
 </Box> 


   </div>
}

export default Navbaar;
