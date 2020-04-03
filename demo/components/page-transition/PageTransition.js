import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import styles from './PageTransition.module.css';

const animationsTimeout = {
    fade: 650,
    slideLeft: 650,
    slideRight: 650,
    slideUpScale: 650,
    slideDownScale: 650,
};

const PageTransition = ({ node, animation, style, in: inProp, onEntered, onExited }) => (
    <div className={ styles.container }>
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
            timeout={ animationsTimeout[animation] ?? 1 }>
            <div className={ styles[animation] } style={ style }>
                { node }
            </div>
        </CSSTransition>
    </div>
);

PageTransition.propTypes = {
    node: PropTypes.element.isRequired,
    animation: PropTypes.oneOf(['none', 'slideLeft', 'slideRight', 'slideUpScale', 'slideDownScale', 'fade']),
    style: PropTypes.object,
    in: PropTypes.bool,
    onEntered: PropTypes.func,
    onExited: PropTypes.func,
};

export default PageTransition;
