import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

//Components 
import About from './About';
import Contact from './Contact';

const Wrapper = styled.header`
  position: fixed;
  top: 2rem;
  right: 1.4rem;
  left: 1.4rem;
  background: ${({ theme }) => theme.white};
  @media (${({ theme }) => theme.respondTo.desktop}) {
    top: 3.8rem;
    right: 3rem;
    left: 3rem;
    
  }
`;

const NavWrapper = styled.div`
  padding: 0 0.9rem;
  @media (${({ theme }) => theme.respondTo.desktop}) {
    padding: 0 1.5rem;
  }
`;

const Nav = styled.nav`
  ul{
    list-style: none;
    display: flex;
    li {
      text-transform: uppercase;
      padding: 1.8rem 1.5rem;
      cursor: pointer;
      font-size: 1.6rem;
      line-height: 1.2;
      @media (${({ theme }) => theme.respondTo.desktop}) {
        padding: 2.3rem 2.5rem 2.1rem;
        font-size: 2rem;
      }
    }
  }
`

const header = () => {
  return (
    <Wrapper>
      <NavWrapper>
        <Nav>
          <ul>
            <li>
              Sergio De Bei
            </li>
            <li>
              Contact
            </li>
          </ul>
        </Nav>
      </NavWrapper>
      <div>
        {/* <About /> */}
        <Contact />
      </div>
    </Wrapper>
  )
}

export default header
