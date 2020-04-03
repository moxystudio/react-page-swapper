import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import PageSwapper from '@moxy/react-page-swapper';
import ThemeProvider from '../components/theme-provider';
import { PageTransition, AnimationPicker } from '../components';
import './_app.css';

const App = ({ Component, pageProps }) => {
    const router = useRouter();

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');

        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <ThemeProvider>
            <PageSwapper
                node={ <Component { ...pageProps } /> }
                animation={ router.query.animation ?? 'none' }>
                { (props) => <PageTransition { ...props } /> }
            </PageSwapper>

            <AnimationPicker nextHref={ router.pathname === '/' ? '/dummy' : '/' } />
        </ThemeProvider>
    );
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};

export default App;
