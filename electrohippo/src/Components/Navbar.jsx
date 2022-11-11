import { Box, Container, Input,  Img, HStack, Flex, ButtonGroup, Spacer, Button, Icon } from "@chakra-ui/react";
import React from "react";
import {Link} from "react-router-dom"
import { HamburgerIcon } from '@chakra-ui/icons'
import ModalComponent from "./Modals";
import styles from "./Navbar.module.css";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import DisplayCart from "../Pages/DisplayCart";


function Navbar() {

  const{nameDis,isAuth} = useContext(AuthContext)
 console.log(isAuth , nameDis)
  return (
    <Box   backgroundColor="#318ffb" 
    w='100%'
    h='200px'
    >
      {/* 1st line_navbar */}
      <Flex minWidth='min-content' alignItems='center'  border="0.5px solid white" h={50}  >
  <Spacer />
  
  {/* <ModalComponent title="Save BIG with our app!" /> */}
  
  <Box className="dropdown"  
              color="black"
              padding="10px"
              borderLeftRadius="5px" width="auto"   >
  <h4 className="dropbtn" textAlign="center"  >Save BIG with our app!</h4>
  <Box className="dropdown-content">
  <a href="/">Qr code Scan</a>
 
  </Box>
</Box>

<Box className="dropdown"  
              color="black"
              padding="10px"
              borderLeftRadius="5px"  width="auto"  >
  <h4 className="dropbtn" textAlign="center"   >Language</h4>
  <Box className="dropdown-content">
  <Link href="#">English</Link>
              <Link href="#">Chinese</Link>
              <Link href="#">Persian</Link>
              <Link href="#">Russian</Link>
              <Link href="#">Portuguese</Link>
              <Link href="#">Turkish</Link>
              <Link href="#">Italian</Link>
              <Link href="#">French</Link>
              <Link href="#">Spanish</Link>
              <Link href="#">Korean</Link>
 
  </Box>
</Box>

 
  <Box className="dropdown"  
              color="black"
              padding="10px"
              borderLeftRadius="5px" width="auto"   >
  <h4 className="dropbtn" textAlign="center">Support Center</h4>
  <Box className="dropdown-content">
  <Link href="/">Live Chat</Link>
  <Link href="/">Ticket</Link>
  <Link href="/">Hepl Center</Link>
 
  </Box>
</Box>
  
 
 </Flex>
 

      {/* 2nd line_navbar */}

      <Flex padding="10px" gap={4} >
    <Box w='160px' h='10'  >
    <Link to="/" >
        <Img 
            src="https://sgi.offerscdn.net/i/zdcs-merchants/03flyhojcgHPKEvieJ2gF58.h200.w200.flpad.v320.bffffff.jpg" 
            alt="logo" 
            width="100px"
            height="100px"
            />
    </Link> 
    </Box>
  
    <Box w='270px' h='10' display="flex" >
 
          <Box className="dropdown" backgroundColor="white"
              color="black"
              padding="10px"
              borderLeftRadius="5px"    >
  <Button className="dropbtn" bg="white" mt={-2.1} h={1} textAlign="center" >All Categories</Button>
  <Box className="dropdown-content">
  {/* <Link to="">All Categories</Link>
  <Link to="">Smart Home & Garden</Link>
  <Link to="">Phones & Accessories</Link>
  <Link to="">Wearable devices</Link>
  <Link to="">Automobiles & Motorcycles</Link> */}
  </Box>
</Box>
          <Box>
            <Input
              placeholder="Search by keyword"
              w="590px"
              backgroundColor="white"
              color="white"
              padding="10px"
              borderRightRadius="5px"
              borderLeftRadius="none"
              // ml="5em"  // if logo will come then it will be fine
            ></Input>
          </Box> 
    </Box>
    <Spacer />
    <Box   color="white" >
    <Flex minWidth='max-content'maxWidth="max-content" alignItems='center' gap='2' >
  <Spacer />
  
  {/* <ModalComponent title="Ship to/INR" /> */}
  <Box className="dropdown"  
             
              padding="10px"
              borderLeftRadius="5px" width="auto"   >
  <h4 className="dropbtn" textAlign="center" color="white" >Ship to/INR</h4>
  <Box className="dropdown-content">
  <a href="/">Qr code Scan</a>
 
  </Box>
</Box>
  <ModalComponent title={isAuth===true? nameDis : "Sign In"} text="Welcome to Geekbuying" />
  
  <DisplayCart  />

   
 
</Flex>
    </Box>
  </Flex>
 
      {/* 3rd line_navbar */}
      <HStack className={styles.navThird}   color="white"  >
        <Box width="200px"  >
        <HamburgerIcon/>
         <ModalComponent title="Categories" />
        </Box>
         
        <Box width="750px"   display="flex" justifyContent="space-evenly" >
       <Link to="">New</Link>
        <Link to="">Bestselling</Link>
        <Link to="">Brand</Link>
        <Link to="">Clearance</Link>
        <Link to="">Deals</Link>
        <Link to="">Coupon</Link>
        <Link to="">App Only</Link>
       </Box>
         
      </HStack>
    </Box>
  );
}

export default Navbar;
