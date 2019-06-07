/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.less';
import logoURL from '#images/github-logo.png';

export default function Navigation() {
  return (
    <nav className={styles.container}>
      <ul>
        <li><Link to="/getting-started">Getting Started</Link></li>
        <li><Link to="/install">Install</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><a href="https://github.com/highlightjs/highlight.js"><img src={logoURL} alt="github-logo" /></a></li>
      </ul>
    </nav>
  );
}
