import { useAuth } from "../Context/AuthProvider";
import { Box, Button, Flex, HStack, Image, Input, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ChatPage = () => {
  const [message, setMessage] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const {logout,user} = useAuth();
  const navigate = useNavigate()
  
  const handleLogout = ()=>{
    logout();
    navigate('/')

  }
  const handleSendMessage = ()=>{
    if(!input.trim()) return;
        
    const userMessage = {text:input ,sender:"user"};
    setMessage([...message,userMessage])
    setInput("");
    setLoading(true);

    //bot response
    setTimeout(()=>{
        const botMessage = {text:"Hello ! How Can I help you Today?" , sender:"bot"} ;
        setMessage((prev)=>[...prev,botMessage]);
        setLoading(false);

    },1000)
  };

  const handleKeyPress = (e)=>{
     if(e.key === "Enter"){
        handleSendMessage();
     }
  }


  return (
    <Flex
      direction="column"
      h={"100vh"}
      p={4}
      bg={"gray.800"}
      color={"whiteAlpha.800"}
    >
      <Flex justifyContent={'space-between'} alignItems={'center'} p={2}>
        <Image src="React_ChatBot/chatlogo.png" alt="logo" width={'5rem'}/>
        <HStack>
          <Text>Welcome {user?.username}!</Text>
          <Button onClick={handleLogout} leftIcon={<FaSignOutAlt/>}>Logout</Button>
        </HStack>

      </Flex>
      <VStack flex={1} gap={4} overflow={"auto"} align={"stretch"} p={4}>
        {message.map((msg, index) => {
          <Box
            key={index}
            alignSelf={
              msg.sender === "user"
                ? "20px 20px 0px 20px"
                : "20px 20px 20px 0px"
            }
            maxW={"75%"}
          >
            <Text>{msg.text}</Text>
          </Box>;
        })}
        {loading && (
          <Text fontSize={"sm"} color={"gray.400"}>
            Bot is Typing ....
          </Text>
        )}
      </VStack>
      <Flex p={3} bg={"gray.800"} borderRadius={"md"}>
        <Input
          flex={1}
          placeholder="Ask Questions"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          bg={"gray.700"}
          border={"none"}
          _focus={{ outline: "none" }}
        />
        <Button icon={<FaPaperPlane/>}
           bg={'blue.50'}
           
           onClick={handleSendMessage}
           isLoading={loading}
        />
      </Flex>
    </Flex>
  );
};

export default ChatPage;
