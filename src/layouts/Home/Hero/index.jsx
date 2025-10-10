import { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from "styled-components";
import { About } from './About';
import { zoomOut } from '../../../components/animations';

export const Hero = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <Wrapper>
      <Wallpaper isLoaded={isMounted}/>
      <Content>
        <About/>
        <Empty/>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: none;
  color: #fff;
  text-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  min-height: 65vh;

  position: relative;
  overflow: hidden;
`

const Content = styled.div`
  padding: 3rem 1rem;

  margin-left: auto;
  margin-right: auto;
  max-width: 1024px;

  @media (min-width: 640px) {
      padding: 4rem 1.5rem;
  }

  @media (min-width: 1024px) {
      padding: 6rem 2rem;
  }
`

const Wallpaper = styled.div`
  background-image: linear-gradient(to bottom, rgba(20, 20, 20, 0.65), rgba(20, 20, 20, 1)), url('/images/waranont.webp');
  background-position: center;
  background-size: cover;
  opacity: 0;
  pointer-events: none;
  user-select: none;

  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;

  opacity: ${props => props.isLoaded ? '1' : '0'};
  animation-delay: ${props => props.isLoaded ? '1s' : '0'};
  animation: ${zoomOut} 1s ease-out 1s both;
`

const Empty = styled.div`
  width: 20rem;
  flex-shrink: 0;
  flex-grow: 0
`