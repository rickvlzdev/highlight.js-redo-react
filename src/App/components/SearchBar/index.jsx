/* eslint-disable import/no-unresolved */
import React from 'react';
import styles from './styles.less';
import logoURL from '#images/magnifying-glass.png';

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <span><img src={logoURL} alt="magnifying glass" /></span>
      <input />
    </div>
  );
}
