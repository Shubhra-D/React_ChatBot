import { auth, provider } from "../Firebase/firebaseConfig";
import { useAuth } from "../Context/AuthProvider";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  //get login from AuthContext
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      login();
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
    navigate('/chatbot')
  };
  //google Login
  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      await signInWithPopup(auth, provider);
      login();
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
    navigate('/chatbot')
  };

  return (
    <Flex height={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Box
        marginTop={4}
        borderRadius={"1.2rem"}
        p={4}
        bg={"whiteAlpha.900"}
        width={"60%"}
      >
        <VStack p={4} marginTop={3}>
          <Image
            src="React_ChatBot/logo.jpeg"
            alt="logo"
            border={"none"}
            borderRadius={"2rem"}
            width={"10rem"}
            marginBottom={3}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            borderColor={'gray.400'}
            bg={'gray.300'}
            marginBottom={2}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            borderColor={'gray.400'}
            bg={'gray.300'}
            marginBottom={2}
          />
          {error && <Text color={"red.400"}>{error}</Text>}
          <Button onClick={handleLogin} bg={'blackAlpha.900'} color={'whiteAlpha.900'}>Login</Button>
          <Text color={"grey"}>Or</Text>
          <Button onClick={handleGoogleLogin} bg={'blackAlpha.900'} color={'whiteAlpha.900'}>
            <Flex justifyContent={"space-around"} alignItems={"center"}>
              <FcGoogle />
              Sign-In
            </Flex>
          </Button>
          <Text marginTop={"2"} color={"grey"} marginBottom={-2}>
            Don't have an account <Link to={"/signup"}>Sign-Up</Link>
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Login;
