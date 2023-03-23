import React from "react"
import { Container } from "@chakra-ui/react"

const Section = (children) => {
  return (
    <Container
      as={'section'}
      py={10}>
        {children}
      </Container>
  )
}

export default <Section></Section>
