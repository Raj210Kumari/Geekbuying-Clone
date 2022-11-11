import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    useDisclosure,
    Box
  } from '@chakra-ui/react'
  import styles from "./Navbar.module.css"
  import {Link} from "react-router-dom"
  function ModalComponent({title , text}) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <>
       
        <Button onMouseEnter={onOpen} backgroundColor="#318ffb"  color="black"  bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' >{title}</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay  />
          <ModalContent >
            {/* <ModalHeader>Modal Title</ModalHeader> */}
            {/* <select name="" id=""   >
            <option value="">English</option>
            <option value="">English</option>
            <option value="">English</option>
            </select> */}
           

            <ModalCloseButton  />
            <ModalBody >
               <Text textAlign="center" >{text}</Text>
               <br />
              
              <Box display="flex" justifyContent="space-around" >
              <Button w="170px" bg="#0066FF" color="white" >Join</Button>
             <Link to='/login' ><Button w="170px" color="#0066FF" border="0.5px solid #0066FF" >Sign In</Button></Link>
              </Box>
               
            </ModalBody>
  
            <ModalFooter >
              {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button> */}
              {/* <Button variant='ghost'>Secondary Action</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
       
      </>
    )
  }
  
  export default ModalComponent