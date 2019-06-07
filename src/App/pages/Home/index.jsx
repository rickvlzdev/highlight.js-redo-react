import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.less';
import logoURL from '#images/marker.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.callToAction}>
        <div className={styles.title}>
          <h1>
            <img src={logoURL} alt="site logo" />
            <span>highlight.js</span>
          </h1>
          <span>Syntax Highlighting for the Web</span>
        </div>
        <div className={styles.startButton}>
          <Link to="/getting-started"><span>GET STARTED</span></Link>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.item}>
          <p>185 languages and 89 styles</p>
        </div>
        <div className={styles.item}>
          <p>automatic language detection</p>
        </div>
        <div className={styles.item}>
          <p>multi-language code highlighting</p>
        </div>
        <div className={styles.item}>
          <p>available for node.js</p>
        </div>
        <div className={styles.item}>
          <p>works with any markup</p>
        </div>
        <div className={styles.item}>
          <p>compatible with any JS framework</p>
        </div>
      </div>
    </div>
  );
}
