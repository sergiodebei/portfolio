import React, { useState, useEffect, useContext } from 'react';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { store } from '../store/store';
import { motion, AnimatePresence } from 'framer-motion';

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
  /* display: none; */
  /* display: inline-block;
  transform: translateY(-100%);
  ${({ theme, active }) =>
    active &&
    css`
      transform: translateY(0%);
    `} */
  @media (${({ theme }) => theme.respondTo.tablet}) {
    display: block;
    margin-top: 0;
    font-size: 2.4rem;
    opacity: 0;
    ${({ theme }) => theme.transition('opacity', '0.3')};
    ${({ active }) =>
    active &&
    css`
      opacity: 1;
    `}
  }
`;

const Case = ({ item, hoveredItem, setHoveredItem, setImgVisible, setImgSource, isLast }) => {
  // const { state, dispatch } = useContext(store);

  return (
    <Wrapper
      onHoverStart={() => {
        setHoveredItem(item.title);
        setImgVisible(true);
        setImgSource(item.img);
      }}
      onHoverEnd={() => {
        setHoveredItem(null);
        setImgVisible(false);
        setImgSource(null)
      }}
      onTapStart={() => {
        setHoveredItem(item.title);
        setImgVisible(true);
        setImgSource(item.img);
      }}
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
          <AnimatePresence key={item.title}>
            {hoveredItem === item.title &&
              <StyledA
                href={item.url} target="_blank"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    opacity: { ease: 'easeInOut', duration: 1.2 },
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    opacity: { duration: 0.15 },
                  },
                }}
              // active={hoveredItem === item.title ? 1 : 0}
              >
                (VIEW WEBSITE)
              </StyledA>
            }
          </AnimatePresence>
        </LinkWrapper>
      </div>
    </Wrapper>
  )
}

export default Case
