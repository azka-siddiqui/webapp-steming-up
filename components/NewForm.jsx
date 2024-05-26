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
import { useState } from 'react';

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
    fontWeight: "600",
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
        <header style={headerStyle}>Scanner Tool</header>
        <p style={{ ...paragraphStyle, marginBottom: '30px' }}>
         Use this scanner to scan your plant and determine if it is an invasive species. <br/><br/>
         Before we submit your report, we would like to get some additional information to aid in preventing future growth.
           <br/>
        </p>
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
                        id='type of property'
                        name="type of property"
                        placeholder='Region'
                        color="black"
                        style={{ backgroundColor: 'white' }} 
                    />
                    </FormControl>

                    <FormControl isRequired borderRadius="20" color="gray.900">
                    <Input
                        id='email'
                        name="email"
                        type="email"
                        placeholder='Number of Plants'
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
                        <option value="typeA">Type of Property</option>
                        <option value="typeB">Private Property</option>
                        <option value="typeC">City Park</option>
                        <option value="typeD">City Woodlands</option>
                        <option value="typeE">Unsure</option>
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
                        <option value="areaOfFocus">Growth Rate of Plant</option>
                        <option value="transportation">Rapid</option>
                        <option value="greenBuildings">Moderate</option>
                        <option value="waterconservation">Slow</option>
                        <option value="other"> Other</option>
                    </Select>
                    </FormControl>

                    <FormControl isRequired borderRadius="20" color="gray.900">
                      <Textarea id="potentialImpact" name="potentialImpact" placeholder='Additional Information' rows="2" color="black"
                        style={{ backgroundColor: 'white' }} />
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
        bg={"#32a852"}
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
