import React, { useState, useEffect, useContext } from 'react';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { store } from '../store/store';
import { motion, AnimatePresence } from 'framer-motion';
import useDeviceDetection from '../hooks/useDeviceDetection';

const Wrapper = styled(motion.div)`
  cursor: pointer;
  padding: 0rem 1.4rem;
  margin-bottom: 0;
  border-bottom: 1px solid ${({ theme }) => transparentize(1, theme.black)};
  @media (${({ theme }) => theme.respondTo.tablet}) {
    padding: 0 3rem;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    cursor: pointer;
  }
  ${({ theme }) => theme.transition('padding', '0.3')};
  ${({ theme }) => theme.transition('border-bottom', '0.3')};
  ${({ theme }) => theme.transition('margin-bottom', '0.3')};
  /* color: ${({ theme, active }) => active && theme.white}; */
  ${({ theme, active }) =>
    active &&
    css`
      padding: 2rem 1.4rem;
      border-bottom: 1px solid ${({ theme }) => transparentize(0.8, theme.white)};
      margin-bottom: 2rem;
      @media (${theme.respondTo.tablet}) {
        padding: 1.7rem 3rem;
        margin-bottom: 1.7rem;
      }
    `}
  ${({ isLast }) =>
    isLast &&
    css`
      border-bottom: 1px solid transparent;
    `}
`;

const Details = styled.div`
  color: inherit;
  ${({ theme }) => theme.transition('color', '0.3')};
  display: flex;
  align-items: baseline;
  h2{
    font-size: 4.2rem;
    @media (${({ theme }) => theme.respondTo.tablet}) {
      font-size: 12rem;
    }
  }
  p{
    display: none;
    @media (${({ theme }) => theme.respondTo.tablet}) {
      display: block;
      margin-left: 3.3rem;
    }
  }
  ${({ theme, inactive }) =>
    inactive &&
    css`
      color: ${({ theme }) => transparentize(0.66, theme.white)};
    `}
  ${({ theme, active }) =>
    active &&
    css`
      color: ${theme.white};
    `}
`;

const LinkWrapper = styled.div`
  overflow: hidden;
`;

const StyledA = styled(motion.a)`
  margin-top: 1.1rem;
  font-size: 1.4rem;
  line-height: 1.25;
  color: ${({ theme }) => theme.white};
  pointer-events: ${({ active }) => active ? 'all' : 'none' };
  @media (${({ theme }) => theme.respondTo.tablet}) {
    display: block;
    margin-top: 0;
    font-size: 2.4rem;
  }
`;

const Case = ({ item, hoveredItem, setHoveredItem, setImgVisible, setImgSource, isLast, setIsHovering }) => {
  const { isMobile, isDesktop } = useDeviceDetection();

  const activeItem = (item) => {
    setHoveredItem(item.title);
    setImgVisible(true);
    setImgSource(item.img);
    setIsHovering(true);
  };

  return (
    <Wrapper
      onMouseEnter={() => isDesktop && activeItem(item)}
      onClick={() => isMobile && activeItem(item)}
      active={hoveredItem === item.title ? 1 : 0}
      isLast={isLast}
    >
      <Details
        active={hoveredItem === item.title ? 1 : 0}
        inactive={hoveredItem != null ? 1 : 0}
      >
        <h2>{item.title}</h2>
        <p>{item.year}</p>
      </Details>
      <div>
        <LinkWrapper>
            {hoveredItem === item.title &&
              <StyledA
                href={item.url} target="_blank" rel="nofollow"
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    y: { ease: 'easeInOut', duration: 0.8 },
                  },
                }}
                exit={{
                  y: 100,
                  opacity: 0,
                  transition: {
                    y: { duration: 0.1 },
                  },
                }}
              active={hoveredItem === item.title ? 1 : 0}
              >
                (VIEW WEBSITE)
              </StyledA>
            }
        </LinkWrapper>
      </div>
    </Wrapper>
  )
}

export default Case
