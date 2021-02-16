import React, { useState, useEffect, useRef, useContext } from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { store } from '../store/store';

//Components 
import MenuItem from './MenuItem';
import Close from './Close';
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

const Header = () => {

  const [left, setLeft] = useState(0);
  const menuItem = useRef(null);

  useEffect(() => {
    setLeft(menuItem?.current?.getBoundingClientRect().left - 40);
  }, [left, menuItem]);

  return (
    <Wrapper>
      <NavWrapper>
        <Nav>
          <ul>
            <MenuItem
              item={'Sergio De Bei'}
              slug={'about'}
            />
            <MenuItem
              item={'Contact'}
              slug={'contact'}
            // ref={menuItem}
            />
            {/* <li ref={menuItem}>
              Contact
            </li> */}
          </ul>
          <Close />
        </Nav>
      </NavWrapper>
      <div>
        <About />
        <Contact left={left} />
      </div>
    </Wrapper>
  )
}

export default Header
