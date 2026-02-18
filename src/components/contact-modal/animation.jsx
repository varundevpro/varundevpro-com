import React from 'react'
import Lottie from 'react-lottie'
import successData from './lotties/64787-success.json'
import errorData from './lotties/56132-error.json'
import loadingData from './lotties/25081-sending.json'
import styled from 'styled-components'

const defaultOptions = {
  loop: false,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

export const ContactSuccessAnimation = () => {
  const options = {
    ...defaultOptions,
    animationData: successData,
  }
  return (
    <Container>
      <Lottie options={options} height={200} width={200} />
    </Container>
  )
}

export const ContactErrorAnimation = () => {
  const options = {
    ...defaultOptions,
    animationData: errorData,
  }

  return (
    <Container>
      <Lottie options={options} height={180} width={180} />
    </Container>
  )
}

export const ContactLoadingAnimation = () => {
  const options = {
    ...defaultOptions,
    loop: true,
    animationData: loadingData,
  }

  return (
    <Container>
      <Lottie options={options} height={180} width={180} />
    </Container>
  )
}

export const ContactModalAnimation = ({ isLoading, isSuccess, isOpen }) => {
  if (!isOpen) {
    return <Container></Container>
  }
  if (isLoading) {
    return <ContactLoadingAnimation />
  }
  if (isSuccess) {
    return <ContactSuccessAnimation />
  }
  return <ContactErrorAnimation />
}

const Container = styled.div`
  margin: auto;
  height: 14rem;
  width: 14rem
`