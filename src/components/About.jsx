import React, { useState, useEffect, useRef, useContext } from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { store } from '../store/store';

//Components
import Paragraph from '../typography/Paragraph'
import MenuDropdown from './MenuDropdown';
import Image from './Image';

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

const About = ({ active }) => {
  const { state, dispatch } = useContext(store);

  return (
    <div>
      {active && (
        <MenuDropdown
          initial={{ height: 0 }}
          animate={{ height: active ? 'auto' : 0 }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.75 }}
          layoutId={'MenuDropdown'}
        >
          <div>
            <Wrapper
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.15 } }}
            >
              <Content>
                <Paragraph>
                  Sergio de Bei is developer based in Amsterdam, NL. He’s currently working at Bravoure.
                </Paragraph>
                <ImageWrapper>
                  <img src={require(`../../static/images/sergiodebei.png`)} />
                  {/* <Image src={require(`../../static/images/sergiodebei.png`)} alt={'Sergio de Bei'} /> */}
                </ImageWrapper>
              </Content>
            </Wrapper>
          </div>
        </MenuDropdown>
      )}
    </div>
  )
}

export default About
