import { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from "styled-components";
import { bounceIn, fillUp, slideDown, slideUp } from '../../../components/animations';

export const About = () => {


  return (
    <Wrapper>
      <Heading>Hi, I’m Varun</Heading>
      <JobTitle>Product Developer</JobTitle>
      <Underline />
      <DescContainer>
        <p>
          I am a full-stack developer and designer helping startups and tech
          businesses build accessible and scalable products.
        </p>
      </DescContainer>
      <ButtonContainer>
        <LinkButton href="#contact">Get in touch</LinkButton>
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 50ch;

  @media (min-width: 768px) {
    flex-grow: 1;
    flex-shrink: 1; 
  }
`

const Heading = styled.h1`
  margin-bottom: 0.5rem;
  animation: ${slideDown} 1s cubic-bezier(0, 0.5, 0, 1) 0.1s both;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 300;
  line-height: 1.5;
`

const JobTitle = styled.p`
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgb(253, 224, 71);
  animation: ${slideUp} 1s cubic-bezier(0, 0.5, 0, 1) 0.2s both;
`

const Underline = styled.hr`
  background-color: #ff470f;
  background-image: linear-gradient(to right, #973bfb, #00d0f8);
  background-image: linear-gradient(to right, #ff470f, #ffe479);
  border: none;
  content: '';
  height: 1px;
  margin: 0;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  transform-origin: center left;
  width: 4rem;
  animation: ${fillUp} 1s cubic-bezier(0, 0.5, 0, 1) 0.3s both;
`

const DescContainer = styled.div`
  animation: ${slideUp} 1s cubic-bezier(0, 0.5, 0, 1) 0.4s both;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 300;
  line-height: 1.625;

  @media (min-width: 768px) {
      font-size: 1.5rem;
      line-height: 2rem;
  }
`

const ButtonContainer = styled.div`
  animation: ${bounceIn} 1s cubic-bezier(0,.5,0,1) .6s both;
  margin-top: 1.25rem;
  display: inline-block;
  vertical-align: top;
`

const LinkButton = styled.a`
  border-radius: 0.375rem;
  background-color: rgb(249, 234, 68);
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 0.05em;
  color: rgb(0, 0, 7);

  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  display: inline-block;
  padding: 1.25em 2em;
  text-shadow: none;
  user-select: none;
  vertical-align: top;
  white-space: nowrap;

  transition-property: box-shadow, transform;
  will-change: box-shadow, transform;
  transform-origin: center;
  transition-duration: 100ms;

  &:hover {
    box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.2);
    transform: scale(1.02) translateY(-4px);
  }

  &:active {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
    transform: scale(0.98) translateY(-2px);
  }
`