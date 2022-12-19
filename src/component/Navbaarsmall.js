import {ChevronDownIcon,HamburgerIcon,CloseIcon,}from "@chakra-ui/icons"
import { Link,Flex,RadioGroup,Stack ,Radio,Button,Drawer,DrawerBody,DrawerOverlay,DrawerContent,} from "@chakra-ui/react"
import { useDisclosure,Box } from "@chakra-ui/react"
import React from "react"
import { useRef } from "react"
import deepak from "./images/Deepak.png"

export default function Navbaarsmall(){
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')
  const btnRef=useRef(null)

  return <Box display={'flex'} justifyContent='space-between' bg="rgb(38,38,38)" sx={{ position: '-webkit-sticky', /* Safari */ position: 'sticky', top: '0', }}  > 

<img hight={"125px"} width={"105px"} src={deepak}/>
<Button  colorScheme='blue' onClick={onOpen}    >
  <Box display={'flex'}  w='full' >
    
  <HamburgerIcon  width={'55px'} />
  </Box>
</Button>
<Drawer    width='10px'  finalFocusRef={btnRef}  placement={placement} onClose={onClose} isOpen={isOpen}>
  <DrawerOverlay />
  <DrawerContent>
    
    <DrawerBody>
    <Box ml='130px' mt='20px' >
  <button style={{marginLeft:"120px",marginTop:'-40px'}} onClick={onClose} ><CloseIcon/></button>
  </Box>
<Box display={'flex'} width={'80%'}  flexDirection="column" gap={10} justifyContent='center' alignItems={'center'} mt='50px' >
   
 
  <a href="#home" ><Button   varient='outline'  colorScheme='blackAlpha'   onClick={onClose} >Home</Button></a>
  <a href="#project" ><Button  varient='outline'   colorScheme='blackAlpha'  onClick={onClose} >Project</Button></a>
  <a href="#about" ><Button  varient='outline'  colorScheme='blackAlpha'   onClick={onClose} >About</Button></a>
  <a href="#skill" ><Button  varient='outline'   colorScheme='blackAlpha'  onClick={onClose} >Skill</Button></a>
  <a href="#contact" ><Button  varient='outline'  colorScheme='blackAlpha'   onClick={onClose} >Contact</Button></a>
  <a href="#resume" > <Button bg='rgb(206,147,216)' ><a href="https://github.com/dkp041297/Resume/raw/main/Deepak%20Resume.pdf" download>  Resume</a></Button></a>
</Box>
    </DrawerBody>
  </DrawerContent>
</Drawer>
</Box> 
}