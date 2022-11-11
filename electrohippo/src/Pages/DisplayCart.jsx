import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Box,
    useDisclosure,
    Img,
    Text
  } from '@chakra-ui/react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

var cartData = JSON.parse(localStorage.getItem("cartdata")) || [];


function DisplayCart() {
  const [mapD , setMapD] = useState(cartData)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    
    const handleDelete = (id) =>{
      let deleteItem = mapD.filter((elem) =>{
        return elem.id !== id
      })
      setMapD(deleteItem)
    }
    

    return (
      <>
        <Button ref={btnRef} colorScheme='lightblue' onClick={onOpen}>
          Cart
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Your Cart</DrawerHeader>
  
            <DrawerBody>
              <Box>
            {mapD.map((elem)=>(
              <Box> 
              <Box display="flex" boxShadow='xl' >
                <Box><Img src={elem.url} alt="pro_img" width="150px" height="100px" /></Box>
                <Box>
                <Text fontSize="small" lineHeight="20px" >{elem.name}</Text>
                  <Text fontSize="small" fontWeight="bold" lineHeight="20px" > {`₹${elem.price}`}</Text>
                </Box>
          
              </Box>
              <Box display="flex" justifyContent="space-between" >
               <Link to="/payment" ><Button>Buy now</Button> </Link>  
                 <Button   textalign="center"
                  ml={2}
                  backgroundColor="#d81414"
                  color="white"
                  width="90px" onClick={()=> handleDelete(elem.id)} >Delete</Button>
                </Box>
              </Box> 
            ))}   
             </Box>
             
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default DisplayCart