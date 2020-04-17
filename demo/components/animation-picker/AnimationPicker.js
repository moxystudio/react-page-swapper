import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import classNames from 'classnames';
import { Paper, Button } from '@material-ui/core';
import styles from './AnimationPicker.module.css';

const AnimationPicker = ({ nextHref, followScroll }) => {
    const [animate, setAnimate] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    const scrollTimeoutIdRef = useRef();

    useEffect(() => {
        if (!followScroll) {
            return;
        }

        const handleScroll = () => {
            clearTimeout(scrollTimeoutIdRef.current);
            scrollTimeoutIdRef.current = setTimeout(() => {
                setScrollTop(document.scrollingElement.scrollTop);
            }, 200);
        };

        setScrollTop(document.scrollingElement.scrollTop);
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            clearTimeout(scrollTimeoutIdRef.current);
            window.removeEventListener('scroll', handleScroll, { passive: true });
        };
    }, [followScroll]);

    useEffect(() => {
        const setAnimateTimeoutId = setTimeout(() => setAnimate(true), 50);

        return () => {
            clearTimeout(setAnimateTimeoutId);
        };
    }, []);

    const style = { transform: `translate(-50%, calc(-50% + ${scrollTop}px))` };

    return (
        <Paper
            elevation={ 3 }
            className={ classNames(styles.animationPicker, { [styles.animate]: animate }) }
            style={ style }>
            <Link href={ `${nextHref}?animation=slideLeft` } passHref scroll={ false }>
                <Button variant="contained" disableRipple className={ styles.button }>Slide left</Button>
            </Link>
            <Link href={ `${nextHref}?animation=slideRight` } passHref scroll={ false }>
                <Button variant="contained" disableRipple className={ styles.button }>Slide right</Button>
            </Link>
            <Link href={ `${nextHref}?animation=glideLeft` } passHref scroll={ false }>
                <Button variant="contained" disableRipple className={ styles.button }>Glide left</Button>
            </Link>
            <Link href={ `${nextHref}?animation=glideRight` } passHref scroll={ false }>
                <Button variant="contained" disableRipple className={ styles.button }>Glide right</Button>
            </Link>
            <Link href={ `${nextHref}?animation=fade` } passHref scroll={ false }>
                <Button variant="contained" disableRipple className={ styles.button }>Fade</Button>
            </Link>
        </Paper>
    );
};

AnimationPicker.propTypes = {
    nextHref: PropTypes.string.isRequired,
    followScroll: PropTypes.bool,
};

export default AnimationPicker;
