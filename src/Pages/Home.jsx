import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  VStack,
  Text,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Flex justifyContent={"space-between"} p={3} alignItems={"center"}>
        <Image
          src="React_ChatBot/logo.jpeg"
          borderRadius={"4xl"}
          width={"150px"}
          alt="logo-picture"
        />

        <Stack direction={"row"} gap={4} paddingRight={3}>
          <Link to={'/signup'}>
            <Button _hover={{ bg:("blue.400") }} bg={'blackAlpha.700'} color={'whiteAlpha.900'}>
              SignUp
            </Button>
          </Link>
          <Link to="/login">
            <Button _hover={{ bg:("blue.400") }} bg={'blackAlpha.700'} color={'whiteAlpha.900'}>
              Login
            </Button>
          </Link>
        </Stack>
      </Flex>
      <Box color={"whiteAlpha.900"} textAlign={"center"}>
        <VStack p={5} m={6}>
          <Flex justifyContent={'center'} alignItems={'center'}>
          
          <Heading size="4xl" marginBottom={4} marginRight={3}>
            Welcome to React ChatBot!
          </Heading>
          <Image src="React_ChatBot/chatlogo.png" border={'none'} borderRadius={'2rem'} width={'35px'}/>

          </Flex>
          <Text fontSize='2xl' marginBottom={2}>
            🚀 <b>Your Personal AI Assistant for Instant Conversations</b>
          </Text>
          <Text marginBottom={2}>
            💬 <b>Fast & Smart Responses</b> – Get instant replies to your
            queries. <br />
            🔐 <b>Secure & Private</b> – Powered by Firebase Authentication.{" "}
            <br />
            🌙 <b>Light & Dark Mode</b> – Customize your experience
            effortlessly.
          </Text>
          <Text fontWeight="bold" marginBottom={2}>
            👉 Sign Up now to start chatting!
          </Text>
        </VStack>
        <Link to={'/signup'}>
          <Button
            _hover={{ bg:("blue.400") }}
            bg={"teal.400"}
          >
            SignUp
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default Home;
