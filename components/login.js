import {
    Box,
    Flex,
    Stack,
    Heading,
    Img,
    Text,
    Container,
    Input,
    Button,
    Alert,
    AlertIcon,
    AlertTitle,
    Spinner,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    FormControl,
    Icon,
  } from "@chakra-ui/react";
  import Head from "next/head";
  import { NavBar } from "@components/NavBar";
  
  import { Formik, Form } from "formik";
  import { useEffect, useState } from "react";
  
  const avatars = [
    {
      name: "Ryan Florence",
      url: "https://bit.ly/ryan-florence",
    },
    {
      name: "Segun Adebayo",
      url: "https://bit.ly/sage-adebayo",
    },
    {
      name: "Kent Dodds",
      url: "https://bit.ly/kent-c-dodds",
    },
    {
      name: "Prosper Otemuyiwa",
      url: "https://bit.ly/prosper-baba",
    },
    {
      name: "Christian Nwamba",
      url: "https://bit.ly/code-beast",
    },
  ];
  
  export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Wrong email or password!");
  
    useEffect(() => {
      if (localStorage.getItem("uniheart_login_state") === "true") {
        window.location = "/predict";
      }
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const message = urlParams.get("msg");
  
      if (message) {
        setError(true);
        setErrorMsg(message);
      }
    }, []);
  
    const handleLogin = async (event) => {
      event.preventDefault();
      document.getElementById("spinner").style.display = "block";
  
      setTimeout(async () => {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
        const data = await response.json();
  
        if (data.success) {
          window.location = "/predict";
          localStorage.setItem("uniheart_login_state", true);
          setError(false);
        } else {
          localStorage.setItem("uniheart_login_state", false);
          setError(true);
          setErrorMsg("Wrong email or password!");
        }
  
        document.getElementById("spinner").style.display = "none";
      }, 1000);
    };
  
    return (
      <>
        <Head>
          <title>Login - EcoScan</title>
        </Head>
        <NavBar active="login" />
        <Box position={"relative"}>
          <Container
            as={SimpleGrid}
            alignItems="center"
            maxW={"7xl"}
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 10, lg: 32 }}
            py={{ base: 10, sm: 20, lg: 32 }}
          >
            <Stack spacing={{ base: 10, md: 20 }}>
              <Heading
                lineHeight={1.1}
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="black"
                color="gray.700"
              >
                Doctors{" "}
                <Text as={"span"} color="red.400">
                  &
                </Text>{" "}
                People like You
              </Heading>
              <Stack direction={"row"} spacing={4} align={"center"}>
                <AvatarGroup>
                  {avatars.map((avatar) => (
                    <Avatar
                      key={avatar.name}
                      name={avatar.name}
                      src={avatar.url}
                      size="lg"
                      position={"relative"}
                      zIndex={2}
                      _before={{
                        content: '""',
                        width: "full",
                        height: "full",
                        rounded: "full",
                        transform: "scale(1.125)",
                        bg: "red.400",
                        position: "absolute",
                        zIndex: -1,
                        top: 0,
                        left: 0,
                      }}
                    />
                  ))}
                </AvatarGroup>
                <Text
                  fontFamily={"heading"}
                  fontSize={{ base: "4xl", md: "6xl" }}
                  color="gray.400"
                >
                  +
                </Text>
                <Flex
                  align={"center"}
                  justify={"center"}
                  fontSize={{ base: "sm", md: "lg" }}
                  bg={"red.400"}
                  fontWeight="bold"
                  p="4"
                  color={"white"}
                  rounded={"full"}
                  width={useBreakpointValue({ base: "44px", md: "60px" })}
                  height={useBreakpointValue({ base: "44px", md: "60px" })}
                  position={"relative"}
                  _before={{
                    content: '""',
                    width: "full",
                    height: "full",
                    rounded: "full",
                    transform: "scale(1.125)",
                    bgGradient: "linear(to-bl, orange.400,yellow.400)",
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                >
                  You
                </Flex>
              </Stack>
            </Stack>
            <Stack
              bg={"gray.50"}
              rounded={"xl"}
              p={{ base: 4, sm: 6, md: 8 }}
              spacing={{ base: 8 }}
              maxW={{ lg: "lg" }}
            >
              <Stack spacing={4}>
                {error && (
                  <Alert status="error" rounded="md">
                    <AlertIcon />
                    <AlertTitle>{errorMsg}</AlertTitle>
                  </Alert>
                )}
                <Box d="flex" alignItems="center">
                  <Heading
                    lineHeight={1.1}
                    fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                    d="inline"
                    fontWeight="black"
                    color="gray.700"
                  >
                    Login to
                  </Heading>
                  <Img
                    src="/logo.png"
                    d="inline"
                    ml="4"
                    alignSelf="center"
                    maxH="60px"
                  />
                </Box>
                <Box bg="red.100" rounded="md" p={3}>
                  Sample Login
                  <Box>
                    <Text fontWeight="bold" d="inline">
                      Email:
                    </Text>{" "}
                    john@doe.com
                  </Box>
                  <Box>
                    <Text fontWeight="bold" d="inline">
                      Password:
                    </Text>{" "}
                    hello123
                  </Box>
                </Box>
              </Stack>
              <Formik
                initialValues={{ name: "Sasuke" }}
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                  }, 1000);
                }}
              >
                <Form onSubmit={handleLogin}>
                  <Stack spacing={4}>
                    <FormControl isRequired borderRadius="20" color="gray.900">
                      <Input
                        placeholder="Email address"
                        // id='email'
                        type="email"
                        bg={"gray.100"}
                        border={0}
                        color={"gray.800"}
                        _placeholder={{
                          color: "gray.500",
                        }}
                        onInput={(e) => setEmail(e.target.value)}
                        isRequired
                      />
                    </FormControl>
                    <Input
                      placeholder="Password"
                      bg={"gray.100"}
                      // id='password'
                      type="password"
                      border={0}
                      color={"gray.800"}
                      onInput={(e) => setPassword(e.target.value)}
                      _placeholder={{
                        color: "gray.500",
                      }}
                    />
                  </Stack>
                  <Button
                    fontFamily={"heading"}
                    mt={8}
                    type="submit"
                    w={"full"}
                    bg="red.400"
                    fontWeight="bold"
                    color={"white"}
                    transition="all 0.3s"
                    // onClick={handleLogin}
                    _hover={{
                      bgGradient: "linear(to-r, red.400,pink.400)",
                      boxShadow: "xl",
                    }}
                  >
                    <Spinner style={{ display: "none" }} id="spinner" />
                    <Text ml="2">Login</Text>
                  </Button>
                </Form>
              </Formik>
            </Stack>
          </Container>
        </Box>
      </>
    );
  }