import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styling/GlobalStyle';
import theme from '../styling/theme';

// Components 

import Header from '../components/Header';
// import ShareImg from '../../static/images/share-image.jpg';

const Layout = ({ children, backgroundColor, volume, setVolume }) => {
    return (
        <ThemeProvider theme={{ ...theme, backgroundColor }}>
            <>
                <GlobalStyle />
                <Helmet title="">
                    <meta
                        name="description"
                        content=""
                    />
                    <meta property="og:title" content="" />
                    <meta
                        property="og:description"
                        content=""
                    />
                    {/* <meta name="image" content={ShareImg} /> */}
                    {/* <meta property="og:image" content={ShareImg} /> */}
                </Helmet>
                <Header volume={volume} />
                <main>{children}</main>
            </>
        </ThemeProvider>
    );
};

export default Layout;
