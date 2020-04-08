import './_global.css';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Head from 'next/head';
import PageSwapper from '@moxy/react-page-swapper';
import ThemeProvider from '../components/theme-provider';
import { PageTransition } from '../components';
import styles from './_app.module.css';

const App = ({ Component, pageProps }) => {
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');

        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    useEffect(() => {
        history.scrollRestoration = 'manual';
    });

    const router = useRouter();

    return (
        <>
            <Head>
                <title>@moxy/react-page-swapper demo</title>
            </Head>

            <ThemeProvider>
                <PageSwapper
                    className={ styles.pageSwapper }
                    node={ <Component { ...pageProps } /> }
                    animation={ router.query.animation ?? 'none' }>
                    { (props) => <PageTransition { ...props } /> }
                </PageSwapper>
            </ThemeProvider>
        </>
    );
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};

export default App;
