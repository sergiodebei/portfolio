import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  cursor: pointer;
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
    width: 6.8rem;
    height: 6.8rem;
  }
`;


const Close = ({ setIsHovering, hoveredFilter, setHoveredFilter }) => {

  const handleClick = () => {
    setIsHovering(false);
    setHoveredFilter(null);
  };


  return (
    <>
    {hoveredFilter != null && (
    <Wrapper 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.15 } }}
      exit={{opacity: 0}}
      onClick={() => handleClick()}
    >
    </Wrapper>
    )}
    </>
  )
}

export default Close
