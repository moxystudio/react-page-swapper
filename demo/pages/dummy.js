import React from 'react';
import classNames from 'classnames';
import { Typography } from '@material-ui/core';
import styles from './dummy.module.css';

const Dummy = () => (
    <div className={ styles.dummy }>
        <section className={ classNames(styles.section, styles.section1) }>
            <Typography paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit tincidunt risus, eget tempor libero. Vestibulum tincidunt tortor ac nulla finibus, nec mollis nisl tempor. Vivamus lacus diam, euismod ut tincidunt commodo, scelerisque vel lorem. Nam sit amet sodales dui. Proin fringilla tellus eu posuere auctor. Cras interdum tempus dolor, ut faucibus neque tristique nec. Sed est odio, iaculis ac elementum vitae, sodales at est. Aliquam sed consectetur ipsum. Nam consequat est non porta finibus. Aliquam arcu nunc, euismod ut consequat vitae, tristique ac mi. Ut accumsan felis id elit commodo fermentum.</Typography>
        </section>
        <section className={ classNames(styles.section, styles.section2) }>
            <Typography paragraph>Morbi a maximus quam. In nec porta tortor, sit amet tincidunt ex. Vivamus vel justo vel massa sollicitudin maximus. Phasellus tempor congue pretium. Sed facilisis, urna sed tristique suscipit, justo justo rutrum tortor, mattis rhoncus dui sem sit amet dui. Aliquam eu luctus nunc. Donec aliquet consectetur orci, sed viverra lorem tincidunt quis. Nullam lobortis imperdiet velit nec dapibus. Nam eu elit et est eleifend venenatis vitae a purus. Cras quis mi interdum, pretium ipsum nec, convallis nunc. Fusce viverra, ligula at sollicitudin imperdiet, nibh purus laoreet sapien, id suscipit mi purus eu mauris. Pellentesque pellentesque urna sapien, id tincidunt odio rutrum ac. Pellentesque facilisis placerat purus, non eleifend sapien ultricies ut.</Typography>
        </section>
        <section className={ classNames(styles.section, styles.section3) }>
            <Typography paragraph>Quisque quis ex justo. Quisque egestas lectus quis enim aliquet eleifend. Curabitur aliquet ornare commodo. Sed tincidunt odio neque. Cras porta tempus nisl ut vehicula. Maecenas vel blandit felis. Pellentesque quis dui accumsan, scelerisque quam vel, scelerisque elit. Sed sodales leo nunc, ac elementum nulla consectetur at. In id dui at lorem sagittis aliquet. Nullam eu lectus ac diam ullamcorper pulvinar. Mauris lacinia ut augue vitae efficitur. Mauris magna mauris, varius at nulla at, pretium molestie sem. Etiam semper dolor ipsum, ac suscipit leo vulputate et. Aliquam enim dolor, pulvinar nec fermentum eget, pulvinar eget erat.</Typography>
        </section>
        <section className={ classNames(styles.section, styles.section4) }>
            <Typography paragraph>Aenean enim lacus, ullamcorper eu commodo in, consectetur in sem. Proin semper urna diam, ut egestas ipsum convallis dictum. Maecenas quis massa vel tellus posuere porttitor luctus vitae risus. Proin turpis mauris, facilisis eu commodo ac, molestie eu odio. Nam at consectetur nibh. Etiam vitae facilisis ante, a fringilla orci. Duis leo tortor, dictum vel tincidunt vel, pharetra sit amet odio. Quisque tempus congue tincidunt. Donec in turpis consectetur, pellentesque odio ut, viverra ante. Pellentesque id metus elementum, maximus nibh a, egestas nisl. Pellentesque ligula mi, viverra id felis eget, dictum feugiat nulla.</Typography>
        </section>
        <section className={ classNames(styles.section, styles.section5) }>
            <Typography paragraph>Donec mollis quam id justo cursus, eget ultrices mauris eleifend. Vivamus euismod eros magna, eu rutrum diam placerat quis. Fusce feugiat, orci quis sodales fringilla, nisl nibh volutpat metus, sed volutpat leo nisl sed est. Fusce eleifend ante in commodo sodales. Nullam suscipit consectetur leo, sit amet hendrerit nulla lobortis a. Phasellus pretium ante eget sem porta, consectetur bibendum turpis congue. Vestibulum enim nisi, convallis ut magna at, feugiat dignissim sem. Duis congue ipsum non risus maximus sagittis. Maecenas neque est, vestibulum ac tincidunt et, dignissim nec mauris. Aenean fringilla massa sit amet sapien viverra, ac facilisis dui elementum. Suspendisse vitae scelerisque mauris. Mauris sagittis eros ut tincidunt feugiat. Ut a diam dolor.</Typography>
        </section>
    </div>
);

export default Dummy;
