import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  pointer-events: none;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectImage = ({ visible, src }) => {
  return (
    <div>
      {visible && src && src != null && <Wrapper>
        <img src={require(`../../static/images/${src}`)} />
      </Wrapper>}
    </div>
  )
}

export default ProjectImage
