import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"
import { val } from "./variable"


export default function NavBar() {

  const { isOpen,onToggle } = useDisclosure();

  let greetingMessage = ""
  if (isLoggedIn()) {
    greetingMessage = `Hello ${getUser().name}`
  } else {
    greetingMessage = "You are not logged in"
  }


  return (
    <Header>
        <Lo
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
    </Header>
  )
}

const Header = styled.header`
  height: ${val.s80};
  display: flex;
  justify-content: space-between;
  background: #fff;
`
