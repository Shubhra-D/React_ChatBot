import { auth, provider } from "../Firebase/firebaseConfig";
import { useAuth } from "../Context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { Box, Flex, Image, Input, VStack ,Button ,Text} from "@chakra-ui/react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setError("Password not Matched");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredentials.user, { displayName: username });
      login();
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
    navigate('/chatbot')
  };
  //Google Login
  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await signInWithPopup(auth, provider);
      if (!result.user.displayName) {
        await updateProfile(result.user, { displayName: username });
      }
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
        width={"50%"}
      >
        <VStack p={4} marginTop={3}>
          <Image
            src="React_ChatBot/chatlogo.png"
            alt="logo"
            border={"none"}
            borderRadius={"2rem"}
            width={"6rem"}
          />
          <Input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            borderColor={'gray.400'}
            bg={'gray.300'}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            borderColor={'gray.400'}
            bg={'gray.300'}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            borderColor={'gray.400'}
            bg={'gray.300'}
          />
          <Input
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            borderColor={'gray.400'}
            bg={'gray.300'}
          />
          {error && <Text color={"red.400"}>{error}</Text>}
          
          <Button onClick={handleSignUp} marginTop={4} bg={'blackAlpha.900'} color={'whiteAlpha.900'}>Sign-Up</Button>
          <Text color={"grey"}>Or</Text>
          <Button onClick={handleGoogleLogin} bg={'blackAlpha.900'} color={'whiteAlpha.900'}>
            <Flex justifyContent={"space-around"} alignItems={"center"}>
              <FcGoogle />
              Sign-In
            </Flex>
          </Button>
          <Text marginTop={"2"} color={"grey"}>
            Already have an account <Link to={"/login"} color={'blue.700'}>Login</Link>
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Signup;
