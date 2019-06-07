import React from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight';
import styles from './styles.less';

const languages = [
  'Apache', 'Bash', 'C#', 'C++', 'CSS', 'CoffeeScript', 'Diff', 'HTML, XML',
  'HTTP', 'Ini, TOML', 'JSON', 'Java', 'JavaScript', 'Makefile', 'Markdown',
  'Nginx', 'Objective-C', 'PHP', 'Perl', 'Properities', 'Python', 'Ruby',
  'SQL', 'Shell Session',
];

export default function Install() {
  function createListOfLangs(list) {
    return list.map(item => (
      <li key={item}>
        <label htmlFor={item}>
          <input type="checkbox" name={item} />
          &nbsp;
          {item}
        </label>
      </li>
    ));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert('Your download will begin shortly.');
  }
  return (
    <div className={styles.container}>
      <article>
        <h1>Getting highlight.js</h1>
        <h2>Hosted</h2>
        <p>
        A prebuilt version of highlight.js with 24 commonly used
        languages is hosted by following CDNs:
        </p>
        <h3>cdnjs</h3>
        <Highlight>
          {
`<link rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/default.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/highlight.min.js"></script>`
          }
        </Highlight>
        <h3>jsdelivr</h3>
        <Highlight>
          {
`<link rel="stylesheet"
      href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.15.6/build/styles/default.min.css">
<script src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.15.6/build/highlight.min.js"></script>`
          }
        </Highlight>
        <p>
        You can find the list of commonly used languages below
        in the custom download form.
        </p>
        <p>
        For other available styles look into the highlight.js&nbsp;
          <em>
            <a href="https://github.com/highlightjs/highlight.js/tree/master/src/styles">
              styles directory
            </a>
          </em>
        &nbsp;(and don&apos;t
        forget to add &quot;.min&quot; before &quot;.css&quot;).
        </p>
        <h2>Custom Package</h2>
        <p>You can download a custom bundle including only the languages you need. </p>
        <h3>Common</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.langList}>
            <ul>
              {createListOfLangs(languages)}
            </ul>
          </div>
          <input type="submit" value="Download" />
        </form>
        <h2>Node.js</h2>
        <p>
        Highlight.js can be used on the server through the&nbsp;
          <em>
            <a href="http://highlightjs.readthedocs.org/en/latest/api.html">
              API
            </a>
          </em>
        . The package with all
        supported languages is installable from&nbsp;
          <em>
            <a href="http://npmjs.org/">NPM</a>
          </em>
        :
        </p>
        <Highlight>
          {
            'npm install highlight.js'
          }
        </Highlight>
        <p>Alternatively, you can build it from the source:</p>
        <Highlight>
          {
            'node tools/build.js -t node'
          }
        </Highlight>
        <h2>Source</h2>
        <p>
          <em>
            <a href="https://github.com/highlightjs/highlight.js">
              Current source
            </a>
          </em>
        &nbsp;is available on GitHub.
        </p>
        <h2>How to use it</h2>
        <p>
        Refer to the&nbsp;
          <em>
            <Link to="/getting-started">
              usage document
            </Link>
          </em>
        .
        </p>
      </article>
    </div>
  );
}
