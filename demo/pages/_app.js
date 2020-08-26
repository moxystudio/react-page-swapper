import './_global.css';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Head from 'next/head';
import PageSwapper from '@moxy/react-page-swapper';
import { RouterScrollProvider, useRouterScroll } from '@moxy/next-router-scroll';
import ThemeProvider from '../components/theme-provider';
import { PageTransition } from '../components';
import styles from './_app.module.css';

const AppInner = ({ Component, pageProps }) => {
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');

        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    const router = useRouter();
    const { updateScroll } = useRouterScroll();

    return (
        <>
            <Head>
                <title>@moxy/react-page-swapper demo</title>
            </Head>

            <PageSwapper
                className={ styles.pageSwapper }
                updateScroll={ updateScroll }
                node={ <Component { ...pageProps } /> }
                animation={ router.query.animation ?? 'none' }>
                { (props) => <PageTransition { ...props } /> }
            </PageSwapper>
        </>
    );
};

AppInner.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};

const App = (props) => (
    <ThemeProvider>
        <RouterScrollProvider>
            <AppInner { ...props } />
        </RouterScrollProvider>
    </ThemeProvider>
);

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};

export default App;
