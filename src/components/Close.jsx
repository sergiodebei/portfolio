import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 5.5rem;
  height: 5.5rem;
  &:before, &:after {
    position: absolute;
    content: '';
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 17px;
    width: 1px;
    background-color: #000;
  }
  &:before {
      transform: translate(-50%, -50%) rotate(45deg);
  }
  &:after {
      transform: translate(-50%, -50%) rotate(-45deg);
  }
  @media (${({ theme }) => theme.respondTo.desktop}) {
    display: none;
  }
`;


const Close = () => {
  return (
    <Wrapper>
    </Wrapper>
  )
}

export default Close
