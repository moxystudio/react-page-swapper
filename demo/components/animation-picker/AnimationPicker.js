import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Paper, Button } from '@material-ui/core';
import styles from './AnimationPicker.module.css';

const AnimationPicker = ({ nextHref }) => (
    <Paper className={ styles.animationPicker } elevation={ 3 }>
        <Link href={ `${nextHref}?animation=slideLeft` } passHref>
            <Button variant="contained" className={ styles.button }>Slide left</Button>
        </Link>
        <Link href={ `${nextHref}?animation=slideRight` } passHref>
            <Button variant="contained" className={ styles.button }>Slide right</Button>
        </Link>
        <Link href={ `${nextHref}?animation=slideUpScale` } passHref>
            <Button variant="contained" className={ styles.button }>Slide up & scale</Button>
        </Link>
        <Link href={ `${nextHref}?animation=slideDownScale` } passHref>
            <Button variant="contained" className={ styles.button }>Slide down & scale</Button>
        </Link>
        <Link href={ `${nextHref}?animation=fade` } passHref>
            <Button variant="contained" className={ styles.button }>Fade</Button>
        </Link>
    </Paper>
);

AnimationPicker.propTypes = {
    nextHref: PropTypes.string.isRequired,
};

export default AnimationPicker;
