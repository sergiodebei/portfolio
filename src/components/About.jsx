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

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    > {
        width: 100%;
        &:first-child {
            margin-top: 2rem;
        }
        &:last-child {
          margin-top: 10rem;
        }
    }
    @media (${({ theme }) => theme.respondTo.desktop}) {
      justify-content: space-between;
      > div {
        width: 43%;
        &:first-child{
          margin-top: 0;
        }
        &:last-child {
          margin-top: 0rem;
        }
      }
    }
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
  }
`;

const About = () => {
  return (
    <Wrapper>
      <Content>
        <Paragraph>
          Sergio de Bei is developer based in Amsterdam, NL. He’s currently working at Bravoure.
        </Paragraph>
        <ImageWrapper>
          <img src={require(`../../static/images/sergiodebei.png`)} />
        </ImageWrapper>
      </Content>
    </Wrapper>
  )
}

export default About
