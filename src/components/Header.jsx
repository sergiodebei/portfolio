import React, { useState, useEffect, useRef, useContext } from 'react'
import styled from 'styled-components';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { store } from '../store/store';
import useDeviceDetection from '../hooks/useDeviceDetection';

//Components 
import MenuItem from './MenuItem';
import Close from './Close';
import About from './About';
import Contact from './Contact';
import Image from './Image'

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
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredFilter, setHoveredFilter] = useState(null);
  const { isMobile, isDesktop } = useDeviceDetection();
  const menuItem = useRef(null);

  const aboutIsActive = hoveredFilter === 'about';
  const contactIsActive = hoveredFilter === 'contact';


  useEffect(() => {
    setLeft(menuItem?.current?.getBoundingClientRect().left - 40);
  }, [left, menuItem]);

  useEffect(() => {
    if (isHovering === true) return;
    const timeout = setTimeout(() => setHoveredFilter(null), 500);
    return () => clearTimeout(timeout);
  }, [isHovering]);

  return (
    <Wrapper
      onMouseEnter={() => isDesktop && setIsHovering(true)}
      onMouseLeave={() => isDesktop && setIsHovering(false)}
    >
      <NavWrapper>
        <Nav>
          <ul>
            <MenuItem
              item={'Sergio De Bei'}
              slug={'about'}
              setHoveredFilter={setHoveredFilter}
            />
            <MenuItem
              item={'Contact'}
              slug={'contact'}
              setHoveredFilter={setHoveredFilter}
            // ref={menuItem}
            />
            {/* <li ref={menuItem}>
              Contact
            </li> */}
          </ul>
          <Close />
        </Nav>
      </NavWrapper>
      {/* <AnimateSharedLayout> */}
      <div>
        <About
          active={aboutIsActive}
        />
        <Contact
          left={left}
          active={contactIsActive}
        />
      </div>
      {/* </AnimateSharedLayout> */}
    </Wrapper>
  )
}

export default Header;