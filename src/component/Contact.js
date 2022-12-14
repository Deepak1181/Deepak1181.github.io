import {
    Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import {  Heading } from "@chakra-ui/react";
import React from "react";

import email from "./images/email.png";
import phone from "./images/phone.png";
import send from "./images/send.png";

export default function Contact() {
  return (
<>
    <Box id="contact" padding="1rem" bg="rgb(38,38,38)" >
    <br />
    <Heading as="b" color="rgb(206,147,216)">
      Reach Out To Me
    </Heading>
    <br />
    <br />
    <br />
    <Flex justifyContent="center" gap="5" flexWrap="wrap">
      <Box
        color="white"
        background="black"
        py="3"
        px="4"
        borderRadius="0.5rem"
      >
        <Flex justifyContent="center" alignItems="center" gap="2">
          <img src={email} alt={email} width="32px" height="32px" />
          <Text>dkp041297@gmail.com</Text>
        </Flex>
      </Box>
      <Box
        color="white"
        background="black"
        py="3"
        px="4"
        borderRadius="0.5rem"
      >
        <Flex justifyContent="center" alignItems="center" gap="2">
          <img src={phone} alt={phone} width="32px" height="32px" />
          <Text>+91-8368373471</Text>
        </Flex>
      </Box>
    </Flex>
    <br />
    <br />
    {/* form to send message */}
   
  </Box>
    <FormControl  margin="auto" bg="rgb(38,38,38)">
      <Input w="60%" background="white" type="text" placeholder="Your Name" mb="4" />
      <Input   w="60%" background="white" type="email" placeholder="Your Email Addresss" mb="4" />
      <Textarea  w="60%" background="white" placeholder="Type your message..." size="lg" mb="4" />
       <br/>
      <Button bg="white" color="black" _hover={{"color":"white", "background":"black"}}>
        <Flex gap="2" alignItems="center">
          <Box>
            <Image src={send} w="24px" h="24px"/>
          </Box>
          <Text>Send</Text>
        </Flex>
      </Button>
    </FormControl>
    </>
  );
}