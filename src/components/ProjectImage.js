import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Wrapper = styled(motion.div)`
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
    <AnimatePresence key={src}>
      {visible && src && src != null &&
        <Wrapper
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              opacity: { ease: 'easeInOut', duration: 0.3 },
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              opacity: { duration: 0.15 },
            },
          }}
        >
          <img src={require(`../../static/images/${src}`)} />
        </Wrapper>
      }
    </AnimatePresence>
  )
}

export default ProjectImage
