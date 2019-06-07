/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.less';
import Media from '#components/Media';
import SearchBar from '#components/SearchBar';
import Navigation from '#components/Navigation';
import logoURL from '#images/highlighter.png';

export default function Header() {
  return (
    <Media query="(max-width: 768px)">
      {lowerNav => (
        <header className={styles.container}>
          <div className={styles.upperHeader}>
            <Link to="/">
              <div className={styles.logo}>
                <img src={logoURL} alt="logo" />
                <span>highlight.js</span>
              </div>
            </Link>
            <div className={styles.rightItems}>
              {!lowerNav
                ? <Navigation />
                : null
              }
              <SearchBar />
            </div>
          </div>
          {lowerNav
            ? (
              <div className={styles.lowerHeader}>
                <Navigation />
              </div>
            )
            : null
          }
        </header>
      )}
    </Media>
  );
}
