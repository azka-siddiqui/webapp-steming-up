import {
  FormControl,
  Text,
  SimpleGrid,
  Input,
  Img,
  VStack,
  Select,
  StackDivider,
  Textarea,
  Button,
  Spinner,
  Box,
  Checkbox,
} from '@chakra-ui/react'
import { Formik, Form } from 'formik';
import Head from "next/head";
import { useState } from 'react';
import { HeadingWithDesc } from '../components/HeadingWithDesc';


export const NewForm = (props) => {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [submissionType, setSubmissionType] = useState('submissionType');
  const [areaOfFocus, setAreaofFocus] = useState('areaOfFocus');

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

  const headerStyle = {
    fontSize: '30px', 
    color: 'white',
    textAlign: "center", 
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  };

  const paragraphStyle = {
    fontSize: '20px', 
    textAlign: "center",
    color: "white", 
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  };

  return (
    <Box 
    id="form" 
    >
      <div>
        <header style={headerStyle}>Innovation Form</header>
        <p style={{ ...paragraphStyle, marginBottom: '30px' }}>Fill out this form to submit an idea for a sustainability initiative in your community!</p>
      </div>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} mx="auto" textAlign="center" justifyContent="center" alignItems="center">
        <Box mx="auto" w="100%">
          {!isSubmitted && (
            <Formik
              initialValues={{
                name: 'Sasuke',
                submissionType: 'submissionType',
                areaOfFocus: 'areaOfFocus',
                potentialImpact: '',
                message: '',
                agreeToTerms: false,
              }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <VStack divider={<StackDivider borderColor='gray.200' />} spacing={4} align='stretch'>
                  <FormControl isRequired borderRadius="20" color="black">
                    <Input
                        id='name'
                        name="name"
                        placeholder='Name'
                        color="black"
                        style={{ backgroundColor: 'white' }} 
                    />
                    </FormControl>

                    <FormControl isRequired borderRadius="20" color="gray.900">
                    <Input
                        id='email'
                        name="email"
                        type="email"
                        placeholder='Email'
                        color="black"
                        style={{ backgroundColor: 'white' }}
                    />
                    </FormControl>

                    <FormControl isRequired borderRadius="20" color="gray.900">
                    <Select
                        id='submissionType'
                        name="submissionType"
                        value={submissionType}
                        onChange={(e) => setSubmissionType(e.target.value)} 
                        color="Gainsboro"
                        style={{ backgroundColor: 'white', color: 'grey' }}
                    >
                        <option value="SubmissionType">Submission Type</option>
                        <option value="text">Text</option>
                        <option value="video">Video</option>
                    </Select>
                    </FormControl>

                    <FormControl isRequired borderRadius="20" color="gray.900">
                    <Select
                        id='areaOfFocus'
                        name="areaOfFocus"
                        value={areaOfFocus}
                        onChange={(e) => setAreaofFocus(e.target.value)} 
                        color="Gainsboro"
                        style={{ backgroundColor: 'white', color: 'Grey' }}
                    >
                        <option value="areaOfFocus">Area Of Focus</option>
                        <option value="transportation">Transportation and Energy</option>
                        <option value="greenBuildings">Green Buildings</option>
                        <option value="waterconservation">Water Conservation</option>
                    </Select>
                    </FormControl>

                    <FormControl isRequired borderRadius="20" color="gray.900">
                      <Textarea id="potentialImpact" name="potentialImpact" placeholder='Potential Impact' rows="5" color="black"
                        style={{ backgroundColor: 'white' }} />
                    </FormControl>

                    <FormControl isRequired borderRadius="20" color="gray.900">
                      <Textarea id="message" name="message" placeholder='Describe Your Idea (max 250 words)' rows="5" color="black"
                        style={{ backgroundColor: 'white' }}  />
                    </FormControl>

                    <FormControl isRequired borderRadius="20" color="gray.900">
                      <Checkbox id="agreeToTerms" name="agreeToTerms" color = "white" textAlign = "left">I agree to the terms and conditions</Checkbox>
                    </FormControl>
                  </VStack>
                  <Text bg='red.100' mt='4' p='1' rounded='lg' d='none' id='error'>
                    There was an error, please refresh the page and try again!
                  </Text>
                </Form>
              )}
            </Formik>
          )}

          {isSubmitted && (
            <Text bg='blue.light' color='white' p='1' rounded='lg' fontSize="xl">
              We have received your message! We will get back to you as soon as possible!
            </Text>
          )}
        </Box>

        <Box mx="auto" d={{ base: 'none', md: 'block' }}>
                    <Img src="/formPhoto.png" alt="pic" maxH="450px" />
                </Box>

      <Button
        color="white"
        bg={"#212D71"}
        border-color = "white"
        border-radius = "5px"
        as="a"
        _hover={{ bg: "blue.dark" }}
        px={6}
        target="_blank"
        mb = "-20px"
        mt = "-70px"
        marginLeft = "10px"
      >
        {isLoading && <Spinner mr='2' />}
        Submit
      </Button>

      </SimpleGrid>
    </Box>
  );
};
