import { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { useMediaQuery } from 'beautiful-react-hooks';

const useDeviceDetection = () => {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  let mobile, tablet, desktop;

  if (typeof window !== 'undefined') {
    mobile = useMediaQuery(`(${theme.respondTo.mobile})`);
    tablet = useMediaQuery(`(${theme.respondTo.tablet})`);
    desktop = useMediaQuery(`(${theme.respondTo.desktop})`);
  }

  useEffect(() => {
    mobile ? setIsMobile(true) : setIsMobile(false);
    tablet ? setIsTablet(true) : setIsTablet(false);
    desktop ? setIsDesktop(true) : setIsDesktop(false);
  }, [mobile, tablet, desktop]);

  return { isMobile, isTablet, isDesktop };
};

export default useDeviceDetection;
