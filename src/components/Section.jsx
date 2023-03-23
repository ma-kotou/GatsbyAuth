import React from "react"
import { Container } from "@chakra-ui/react"

const Section = (props, children) => {
  return (
    <Container
      as={'section'}
      mt={'104px'}
      {...props}
      >
        {children.children}
      </Container>
  )
}

export default Section
