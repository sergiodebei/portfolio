import React from 'react';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

const Wrapper = styled.div`
  padding: 0rem 1.4rem;
  margin-bottom: 0;
  border-bottom: 1px solid ${({ theme }) => transparentize(1, theme.black)};
  @media (${({ theme }) => theme.respondTo.desktop}) {
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
      @media (${theme.respondTo.desktop}) {
        padding: 1.7rem 3rem;
        margin-bottom: 1.7rem;
      }
    `}
`;

const Details = styled.div`
  color: inherit;
  ${({ theme }) => theme.transition('color', '0.3')};
  display: flex;
  align-items: baseline;
  h2{
    font-size: 4.2rem;
    @media (${({ theme }) => theme.respondTo.desktop}) {
      font-size: 12rem;
    }
  }
  p{
    display: none;
    @media (${({ theme }) => theme.respondTo.desktop}) {
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

const StyledA = styled.a`
  margin-top: 1.1rem;
  font-size: 1.4rem;
  line-height: 1.25;
  color: ${({ theme }) => theme.white};
  display: none;
  ${({ theme, active }) =>
    active &&
    css`
      display: block;
    `}
  @media (${({ theme }) => theme.respondTo.desktop}) {
    display: block;
    margin-top: 0;
    font-size: 2.4rem;
    opacity: 0;
    ${({ theme }) => theme.transition('opacity', '0.3')};
    ${({ theme, active }) =>
    active &&
    css`
      opacity: 1;
    `}
  }
`;

const Case = ({ title, year, link, hoveredItem, setHoveredItem }) => {
  return (
    <Wrapper
      onMouseEnter={() => setHoveredItem(title)}
      onMouseLeave={() => setHoveredItem(null)}
      active={hoveredItem == title ? 1 : 0}
    >
      <Details
        active={hoveredItem == title ? 1 : 0}
        inactive={hoveredItem != null ? 1 : 0}
      >
        <h2>{title}</h2>
        <p>{year}</p>
      </Details>
      <div>
        <StyledA
          href={link} target="_blank"
          active={hoveredItem == title ? 1 : 0}
        >(VIEW WEBSITE)</StyledA>
      </div>
    </Wrapper>
  )
}

export default Case
