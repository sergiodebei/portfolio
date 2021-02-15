import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

//Components
import Paragraph from '../typography/Paragraph'

const Wrapper = styled(motion.div)`
    padding: 2.4rem;
    @media (${({ theme }) => theme.respondTo.desktop}) {
        padding: 4rem;
    }
`;

const Contact = () => {
  return (
    <Wrapper>
      <Paragraph>
        You find me on <a href="www.linkedin.com/in/sergiodebei" target="_blank">LinkedIn</a>, <a href="https://www.instagram.com/sergiodebei/" target="_blank">Instagram</a> or just send me an <a href="mailto:sergiodebei84@gmail.com">e-mail</a>
      </Paragraph>
    </Wrapper>
  )
}

export default Contact
