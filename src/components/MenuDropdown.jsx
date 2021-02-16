import styled from 'styled-components';
import { motion } from 'framer-motion';

const MenuDropdown = styled(motion.div)`
    position: absolute;
    top: calc(100%);
    left: 0;
    width: 100%;
    > div {
      background: white;
      /* padding: 3.6rem;
      border-radius: 4px; */
      /* box-shadow: 0px 7px 21px rgba(0, 0, 0, 0.15); */
    }
`;

export default MenuDropdown;
