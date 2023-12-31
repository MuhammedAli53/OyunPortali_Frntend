import React from 'react'
import PageHeader from '../components/common/page-header'
import Spacer from '../components/common/spacer'
import AboutPageBody from '../components/about-page/about-page-body'
import Welcome from '../components/about-page/welcome'

const AboutPage = () => {
  return (
    <>
      <PageHeader title="Biz kimiz?"/>
      <AboutPageBody />
      <Spacer />
      <Welcome />
      <Spacer />
    </>
  )
}

export default AboutPage