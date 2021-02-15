const theme = {
    // Colours
    white: '#ffffff',
    black: '#000000',
    grey: '#eaeaea',

    backgroundColor: '#eaeaea',

    // Fonts
    // fontSize: '2rem',
    fontFamily:
        '"HaasGrotDisp", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontFamilyHeading:
        '"Parnaso", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',

    // Sizing
    maxContainerWidth: '1380px',

    // Breakpoints
    respondTo: {
        desktopExtraBig: `min-width: 1600px`,
        desktopSuperBig: `min-width: 1400px`,
        desktopBig: `min-width: 1280px`,
        desktop: `min-width: 1024px`,
        tablet: `min-width: 481px`,
        mobile: `max-width: 480px`,
    },

    //mixin
    transition: (property, duration) =>
        `transition: ${property} ${duration}s cubic-bezier(0.165, 0.84, 0.44, 1)`,
};

export default theme;
