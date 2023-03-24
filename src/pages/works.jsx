import React from 'react'
import Layout from '../components/Layout'
import Website from "../components/Website"
import AppDesign from "../components/AppDesign"
import Seo from "../components/seo"
import Section from '../components/Section';

const Works = () => {
  return(
    <Layout>
      <Section>
      <Website/>
      </Section>
      <Section>
      <AppArchive/>
      </Section>
    </Layout>
  )
}

export const Head = () => {
  return (
    <Seo/>
  )
}

export default Works
