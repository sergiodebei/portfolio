import React from 'react';
import styled from 'styled-components';
import useDeviceDetection from '../hooks/useDeviceDetection';

// Component 
import Case from '../components/case';

// Assets
import projects from '../../static/projects';

const Wrapper = styled.div`
  margin-top: 52rem;
  padding-bottom: 2rem;
  @media (${({ theme }) => theme.respondTo.desktop}) {
    margin-top: 58rem;
    padding-bottom: 8rem;
  }
`;

const Cases = ({ hoveredItem, setHoveredItem, setImgVisible, setImgSource }) => {
  // const { isMobile } = useDeviceDetection();

  return (
    <Wrapper>
      {projects.map((item, i) => (
        <Case
          key={i}
          item={item}
          hoveredItem={hoveredItem}
          setHoveredItem={setHoveredItem}
          setImgSource={setImgSource}
          setImgVisible={setImgVisible}
          isLast={projects.length - 1 === i}
        />
      ))}
    </Wrapper>
  )
}

export default Cases
