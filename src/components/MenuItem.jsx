import React, { useState, useEffect, useRef, useContext } from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { store } from '../store/store';
import useDeviceDetection from '../hooks/useDeviceDetection';

const Wrapper = styled(motion.li)`
`;

const MenuItem = ({ item, slug, setHoveredFilter }) => {
  const { state, dispatch } = useContext(store);
  const { isMobile, isDesktop } = useDeviceDetection();
  // console.log("🚀 ~ file: MenuItem.jsx ~ line 11 ~ MenuItem ~ state", state.activeMenuItem)

  return (
    <Wrapper
      // onHoverStart={() => {
      //   dispatch({
      //     type: 'SET_ACTIVE_MENU_ITEM',
      //     payload: slug,
      //   });
      // }}
      // onHoverEnd={() => {
      //   dispatch({
      //     type: 'SET_ACTIVE_MENU_ITEM',
      //     payload: null,
      //   });
      // }}
      onMouseEnter={() => !isMobile && setHoveredFilter(slug)}
    >
      {item}
    </Wrapper>
  )
}

export default MenuItem
