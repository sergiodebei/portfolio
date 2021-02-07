import React, { useState } from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
// import useDeviceDetection from '../hooks/useDeviceDetection';

// Component 
import Case from '../components/case';

const Wrapper = styled.div`
  margin-top: 52rem;
  color: ${({ theme }) => theme.black};
  ${({ theme }) => theme.transition('color', '0.3')}
  @media (${({ theme }) => theme.respondTo.desktop}) {
    margin-top: 58rem;
  }
  &:hover{
    color: ${({ theme }) => transparentize(0.66, theme.white)}
  }

`;

const Cases = () => {
  // const { isMobile } = useDeviceDetection();
  // const [isHovering, setIsHovering] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <Wrapper
    // onMouseEnter={() => !isMobile && setIsHovering(true)}
    // onMouseLeave={() => !isMobile && setIsHovering(false)}
    >
      <Case
        title='Eye Film Museum'
        year='2021'
        link='https://www.eyefilm.nl/'
        imageSrc=''
        hoveredItem={hoveredItem}
        setHoveredItem={setHoveredItem}
      />
      <Case
        title='Two Chefs Brewing'
        year='2020'
        link='https://www.eyefilm.nl/'
        imageSrc=''
        hoveredItem={hoveredItem}
        setHoveredItem={setHoveredItem}
      />
      <Case
        title='Amsterdam Dance Event'
        year='2020'
        link='https://www.eyefilm.nl/'
        imageSrc=''
        hoveredItem={hoveredItem}
        setHoveredItem={setHoveredItem}
      />
    </Wrapper>
  )
}

export default Cases
