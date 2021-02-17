import { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { useMediaQuery } from 'react-responsive';

let mobile, tablet, desktop, desktopL, desktopXL;
const useDeviceDetection = () => {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isDesktopL, setIsDesktopL] = useState(false);
  const [isDesktopXL, setIsDesktopXL] = useState(false);

  // if (typeof window !== 'undefined') {
  mobile = useMediaQuery({ query: `(${theme.respondTo.mobile})` });
  tablet = useMediaQuery({ query: `(${theme.respondTo.tablet})` });
  desktop = useMediaQuery({ query: `(${theme.respondTo.desktop})` });
  desktopL = useMediaQuery({ query: `(${theme.respondTo.desktopL})` });
  desktopXL = useMediaQuery({ query: `(${theme.respondTo.desktopXL})` });
  // }

  useEffect(() => {
    mobile ? setIsMobile(true) : setIsMobile(false);
    tablet ? setIsTablet(true) : setIsTablet(false);
    desktop ? setIsDesktop(true) : setIsDesktop(false);
    desktopL ? setIsDesktopL(true) : setIsDesktopL(false);
    desktopXL ? setIsDesktopXL(true) : setIsDesktopXL(false);
  }, [mobile, tablet, desktop, desktopL, desktopXL]);

  return { isMobile, isTablet, isDesktop, isDesktopL, isDesktopXL };
};

export default useDeviceDetection;
