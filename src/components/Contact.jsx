import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { store } from '../store/store';

//Components
import Paragraph from '../typography/Paragraph'
import MenuDropdown from './MenuDropdown';

const Wrapper = styled(motion.div)`
    padding: 2.4rem;
    @media (${({ theme }) => theme.respondTo.desktop}) {
        padding: 4rem;
    }
    a {
      color: inherit;
      text-decoration: none;
      position: relative;
      &:after{
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        opacity: 1;
        background-color: ${({ theme }) => theme.black};
        ${({ theme }) => theme.transition('opacity', '0.3')};
      }
      &:hover{
        &:after{
          opacity: 0;
        }
      }
    }
`;

const Contact = ({ left, active }) => {
  // const { state, dispatch } = useContext(store);

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
              <div
              // style={{ paddingLeft: left }}
              >
                <Paragraph>
                  You find me on <a href="www.linkedin.com/in/sergiodebei" target="_blank" rel="noreferrer">LinkedIn</a>, <a href="https://www.instagram.com/sergiodebei/" target="_blank" rel="noreferrer">Instagram</a> or just send me an <a href="mailto:sergiodebei84@gmail.com">e-mail</a>
                </Paragraph>
              </div>
            </Wrapper>
          </div>
        </MenuDropdown>
      )}
    </div>
  )
}

export default Contact
