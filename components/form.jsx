import {
  FormControl,
  Text,
  SimpleGrid,
  Input,
  Img,
  VStack,
  StackDivider,
  Textarea,
  Button,
  Spinner,
  Box,
} from '@chakra-ui/react'
import { Formik, Form } from 'formik';
import { useState } from 'react';


export const Form = (props) => {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
      event.preventDefault();
      setIsLoading(true);
      let name = document.getElementById('name').value;
      let email = document.getElementById('email').value;
      let message = document.getElementById('message').value;
      let subject = document.getElementById('subject').value;

      const resp = await fetch('/api/sendEmail', {
          method: 'POST',
          body: JSON.stringify({
              name,
              email,
              message,
              subject
          }),
      });
      const data = await resp.json()
      if (data.accepted) {
          setIsSubmitted(true);
      }
      else {
          try {
              document.getElementById('error').style.display = 'block';
          }
          catch (e) {
              console.log(e);
          }

      }
      setIsLoading(false);

  };

  return (
      <>
          <HeadingWithDesc desc="Any additional questions? Fill out this form!">
              Contact Us
          </HeadingWithDesc>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} mx="auto" textAlign="center" justifyContent="center" alignItems="center">
              <Box mx="auto" w="100%">
                  {!isSubmitted && <Formik
                      initialValues={{ name: 'Sasuke' }}
                      onSubmit={(values, actions) => {
                          setTimeout(() => {
                              alert(JSON.stringify(values, null, 2))
                              actions.setSubmitting(false)
                          }, 1000)
                      }}
                  >
                      <Form onSubmit={handleSubmit}>
                          <VStack
                              divider={<StackDivider borderColor='gray.200' />}
                              spacing={4}
                              align='stretch'
                          >
                              <FormControl isRequired borderRadius="20" color="gray.900">
                                  <Input id='name' placeholder='Name' color="gray.900" />
                              </FormControl>

                              <FormControl isRequired borderRadius="20" color="gray.900">
                                  <Input id='email' type="email" placeholder='Email' color="gray.900" />
                              </FormControl>


                              <FormControl isRequired borderRadius="20" color="gray.900">
                                  <Input id='subject' placeholder='Subject' color="gray.900" />
                              </FormControl>
                              <FormControl isRequired borderRadius="20" color="gray.900">
                                  <Textarea placeholder='Message' rows="5" id="message" />
                              </FormControl>

                              <Button color="white" bg="blue.light" _hover={{ bg: "blue.dark" }} type="submit">
                                  {isLoading && <Spinner mr='2' />}
                                  Submit</Button>
                          </VStack>
                          <Text bg='red.100' mt='4' p='1' rounded='lg' d='none' id='error'>There was an error, please refresh the page and try again!</Text>
                      </Form>
                  </Formik>}

                  {isSubmitted && <Text bg='blue.light' color='white' p='1' rounded='lg' fontSize="xl">We have received for your message! We will get back to you as soon as possible!</Text>}
              </Box>

              <Box mx="auto" d={{ base: 'none', md: 'block' }}>
                  <Img src="/logo_no_small.png" alt="pic" maxH="450px" />
              </Box>
          </SimpleGrid >

      </>

  )
}