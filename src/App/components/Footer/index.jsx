/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import styles from './styles.less';
import logoURL from '#images/marker-grey.png';
import lightLogoURL from '#images/highlighter.png';

export default function Footer() {
  const [hightlight, setHighlight] = useState(false);

  return (
    <footer className={styles.container}>
      <div className={styles.logo}>
        <h2><a href="/" onMouseOver={() => { setHighlight(true); }} onMouseOut={() => { setHighlight(false); }}><img src={hightlight ? lightLogoURL : logoURL} alt="site logo" /></a></h2>
      </div>
      <div className={styles.group}>
        <div className={styles.license}>
          <div>
            <h2>License</h2>
            <p>
              Highlight.js is released under the BSD License. See&nbsp;
              <a href="https://github.com/highlightjs/highlight.js/blob/master/LICENSE">LICENSE</a>
              &nbsp;file for details.
            </p>
          </div>
        </div>
        <div className={styles.links}>
          <div>
            <h2>Links</h2>
            <p>
              The official site for the library is at&nbsp;
              <a href="https://highlightjs.org/.">https://highlightjs.org/.</a>
              <br />
              Further in-depth documentation for the API and other topics is at&nbsp;
              <a href="https://highlightjs.readthedocs.io/en/latest/">http://highlightjs.readthedocs.io/.</a>
              <br />
              Authors and contributors are listed in the&nbsp;
              <a href="https://github.com/highlightjs/highlight.js/blob/master/AUTHORS.en.txt">AUTHORS.en.txt</a>
              &nbsp;file.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
