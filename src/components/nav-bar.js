import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  } from "@chakra-ui/react"

  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from "@chakra-ui/icons";



export default function NavBar() {

  const { isOpen,onToggle } = useDisclosure();

  let greetingMessage = ""
  if (isLoggedIn()) {
    greetingMessage = `Hello ${getUser().name}`
  } else {
    greetingMessage = "You are not logged in"
  }


  return (
    <Box as='header'>
      <Flex
        bg={useColorModeValue('white','gray.800')}
        color={useColorModeValue('gray.600',' white')}
        minH={'60px'}
        py={{ base: 2}}
        px={{ base: 4}}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200','gray.900')}
        align={'center'}
        >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
              />
        </Flex>
        <Flex flex={{ base:1 }} justify={{ base: 'center', md: 'start' }}>
          <span>{greetingMessage}</span>
        </Flex>
      <nav>
        <Link to="/">Home</Link>
        {` `}
        <Link to="/app/profile">Profile</Link>
        {` `}
        {isLoggedIn() ? (
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'/'}
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/app/login`))
            }}>
            Log Out
          </Button>
        ) : null}
      </nav>
      </Flex>
    </Box>
  )
}
