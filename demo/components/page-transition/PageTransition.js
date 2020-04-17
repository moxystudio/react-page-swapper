import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import styles from './PageTransition.module.css';

const getTimeout = (animation) => {
    switch (animation) {
    case 'none':
        return 1;
    default:
        return 650;
    }
};

const getZIndex = (animation, inProp) => {
    switch (animation) {
    case 'glideLeft':
    case 'glideRight':
    case 'slideLeft':
    case 'slideRight':
    case 'fade':
        return !inProp ? -1 : undefined;
    default:
        return undefined;
    }
};

const PageTransition = ({ node, animation, transitioning, style, in: inProp, onEntered, onExited }) => (
    <CSSTransition
        in={ inProp }
        onEntered={ onEntered }
        onExited={ onExited }
        classNames={ {
            enter: styles.enter,
            enterActive: styles.enterActive,
            enterDone: styles.enterDone,
            exit: styles.exit,
            exitActive: styles.exitActive,
            exitDone: styles.exitDone,
        } }
        timeout={ getTimeout(animation) }>
        <div className={ styles[animation] } style={ { ...style, zIndex: getZIndex(animation, inProp) } }>
            { cloneElement(node, { transitioning }) }
        </div>
    </CSSTransition>
);

PageTransition.propTypes = {
    node: PropTypes.element.isRequired,
    animation: PropTypes.oneOf(['none', 'glideLeft', 'glideRight', 'slideLeft', 'slideRight', 'fade']),
    transitioning: PropTypes.bool,
    style: PropTypes.object,
    in: PropTypes.bool,
    onEntered: PropTypes.func,
    onExited: PropTypes.func,
};

PageTransition.defaultProps = {
    in: false,
    transitioning: false,
    animation: 'none',
};

export default PageTransition;
