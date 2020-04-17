import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

const ThemeProvider = ({ children }) => (
    <MuiThemeProvider theme={ theme }>
        <StylesProvider injectFirst>
            <CssBaseline />
            { children }
        </StylesProvider>
    </MuiThemeProvider>
);

ThemeProvider.propTypes = {
    children: PropTypes.node,
};

export default ThemeProvider;
