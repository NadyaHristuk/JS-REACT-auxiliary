import React, { Component } from 'react';
import styles from './App.module.css';

class App extends Component {
  render() {
    console.log(styles);
    return (
      <div className={styles.App}>
        <header className={styles['App-header']}>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={styles["App-link"]}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button className={`${styles.button} ${styles['button--big']}`}>Click me</button>
        </header>
      </div>
    );
  }
}

export default App;
