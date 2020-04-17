import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { AnimationPicker } from '../components';
import styles from './page3.module.css';

const Page3 = ({ transitioning }) => (
    <div className={ styles.page3 }>
        <AnimationPicker nextHref="/" followScroll={ !transitioning } />

        <Typography paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit tincidunt risus, eget tempor libero. Vestibulum tincidunt tortor ac nulla finibus, nec mollis nisl tempor. Vivamus lacus diam, euismod ut tincidunt commodo, scelerisque vel lorem. Nam sit amet sodales dui. Proin fringilla tellus eu posuere auctor. Cras interdum tempus dolor, ut faucibus neque tristique nec. Sed est odio, iaculis ac elementum vitae, sodales at est. Aliquam sed consectetur ipsum. Nam consequat est non porta finibus. Aliquam arcu nunc, euismod ut consequat vitae, tristique ac mi. Ut accumsan felis id elit commodo fermentum.</Typography>
    </div>
);

Page3.propTypes = {
    transitioning: PropTypes.bool,
};

export default Page3;
