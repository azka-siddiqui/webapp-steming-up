import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    Spinner,
    ModalBody,
    ModalCloseButton,
    Button,
    chakra,
    FormControl,
    Text, FormHelperText,
    Input
} from '@chakra-ui/react'
// import useState
import { useState, useEffect } from 'react'
export const SignUpModal = () => {
    // const { isOpen, onOpen, onClose } = useDisclosure()
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        setTimeout(() => setShowModal(true), 1000);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmitted(true);
    }

    return (
        <>
            {showModal ? <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Text fontWeight='black'>
                            Download <chakra.span color='#32a852'>EcoScan</chakra.span> on the App Store!
                        </Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    {!submitted && (<>
                        <ModalBody>
                            <FormControl isRequired>
                                <Input id='email' placeholder='e.g. example@example.com' />
                                <FormHelperText ml='1'>Enter your email to receive regular updates.</FormHelperText>
                            </FormControl>
                        </ModalBody>

                        <ModalFooter justifyContent='start'>
                            <Button bg='#c9ac2c' mr={3} fontSize='md' color='white' _hover={{ bg: '#73631f' }} onClick={handleSubmit}>
                                {loading && <Spinner size='sm' mr={3} />}
                                Download
                            </Button>
                        </ModalFooter>
                    </>)}

                    {submitted && (<>

                        <ModalBody>
                            <Text>
                                Thanks for subscribing!
                            </Text>
                        </ModalBody>
                        <ModalFooter justifyContent='start'>
                            <Button colorScheme='blue' mr={3} fontSize='md' onClick={() => setShowModal(false)}>
                                Close
                            </Button>
                        </ModalFooter>
                    </>)}
                </ModalContent>
            </Modal> : null}

        </>
    )
}