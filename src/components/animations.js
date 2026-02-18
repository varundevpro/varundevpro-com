import { keyframes } from "styled-components"

export const zoomOut = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.05);
  }

  100% {
      opacity: 1;
      transform: scale(1);
  }
`

export const slideUp = keyframes`
0% {
    opacity: 0;
    -webkit-transform: translateY(1rem);
    transform: translateY(1rem);
}

100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
}
`

export const slideDown = keyframes`
0% {
    opacity: 0;
    -webkit-transform: translateY(-1rem);
    transform: translateY(-1rem);
}

100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
}
`

export const bounceIn = keyframes`
0% {
    opacity: 0;
    -webkit-transform: scale(.5);
    transform: scale(.5);
}

100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}`

export const fillUp = keyframes`
0% {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
}
100% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
}
`