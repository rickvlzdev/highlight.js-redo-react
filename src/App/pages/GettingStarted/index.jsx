import React from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight';
import styles from './styles.less';

export default function GettingStarted() {
  return (
    <div className={styles.container}>
      <article>
        <h1>How to use highlight.js</h1>
        <h2>Getting Started</h2>
        <p>
        The bare minimum for using highlight.js on a web page is linking to the
        library along with one of the styles and calling&nbsp;
          <em>
            <a
              href="http://highlightjs.readthedocs.io/en/latest/api.html#inithighlightingonload"
            >
              initHighlightingOnLoad
            </a>
          </em>
        :
        </p>
        <Highlight>
          {
`<link rel="stylesheet" href="/path/to/styles/default.css">
<script src="/path/to/highlight.pack.js"></script>
<script>hljs.initHighlightingOnLoad();</script>`
          }
        </Highlight>
        <p>
        This will find and highlight code inside of&nbsp;
          <em>&lt;pre&gt;&lt;code&gt;</em>
        &nbsp;tags; it tries to detect the language automatically. If automatic detection
        doesn’t work for you, you can specify the language in the&nbsp;
          <em>class</em>
        &nbsp;attribute:
        </p>
        <Highlight>
          {
'<pre><code class="html">...</code></pre>'
          }
        </Highlight>
        <p>
        The list of supported language classes is available in the&nbsp;
          <em>
            <a href="http://highlightjs.readthedocs.io/en/latest/css-classes-reference.html">
            class reference
            </a>
          </em>
          . Classes can also be prefixed with either&nbsp;
          <em>language-</em>
          &nbsp;or&nbsp;
          <em>lang-</em>
          &nbsp;.
        </p>
        <p>
        To make arbitrary text look like code, but without highlighting, use the&nbsp;
          <em>plaintext</em>
        &nbsp;class:
        </p>
        <Highlight>
          {
'<pre><code class="plaintext">...</code></pre>'
          }
        </Highlight>
        <p>
        To disable highlighting altogether use the&nbsp;
          <em>nohighlight</em>
        &nbsp;class:
        </p>
        <Highlight>
          {
'<pre><code class="nohighlighting">...</code></pre>'
          }
        </Highlight>
        <h2>Custom Initialization</h2>
        <p>
        When you need a bit more control over the initialization of
        highlight.js, you can use the&nbsp;
          <em>
            <a href="http://highlightjs.readthedocs.io/en/latest/api.html#highlightblock-block">
              highlightBlock
            </a>
          </em>
        &nbsp;and&nbsp;
          <em>
            <a href="http://highlightjs.readthedocs.io/en/latest/api.html#configure-options">
              configure
            </a>
          </em>
        &nbsp;functions. This
        allows you to control what to highlight and when.
        </p>
        <p>
        Here’s an equivalent way to calling&nbsp;
          <em>
            <a href="http://highlightjs.readthedocs.io/en/latest/api.html#inithighlightingonload">
              initHighlightingOnLoad
            </a>
          </em>
        &nbsp;using vanilla JS:
        </p>
        <Highlight>
          {
`document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
});`
          }
        </Highlight>
        <p>
        You can use any tags instead of&nbsp;
          {'<pre><code>'}
        &nbsp;to mark up your code. If you don&apos;t use a container that preserves line breaks
        you will need to configure highlight.js to use the&nbsp;
          {'<br>'}
        &nbsp;tag:
        </p>
        <Highlight>
          {
`hljs.configure({useBR: true});

document.querySelectorAll('div.code').forEach((block) => {
  hljs.highlightBlock(block);
});`
          }
        </Highlight>
        <p>
        For other options refer to the documentation for&nbsp;
          <em>
            <a href="http://highlightjs.readthedocs.io/en/latest/api.html#configure-options">
              configure
            </a>
          </em>
        .
        </p>
        <h2>Web Workers</h2>
        <p>
        You can run highlighting inside a web worker to avoid freezing the browser window
        while dealing with very big chunks of code.
        </p>
        <p>
        In your main script:
        </p>
        <Highlight>
          {
`addEventListener('load', () => {
  const code = document.querySelector('#code');
  const worker = new Worker('worker.js');
  worker.onmessage = (event) => { code.innerHTML = event.data; }
  worker.postMessage(code.textContent);
});`
          }
        </Highlight>
        <p>In worker.js:</p>
        <Highlight>
          {
`onmessage = (event) => {
  importScripts('<path>/highlight.pack.js');
  const result = self.hljs.highlightAuto(event.data);
  postMessage(result.value);
};`
          }
        </Highlight>
        <h2>Getting the Library</h2>
        <p>
        You can get highlight.js as a hosted, or custom-build, browser script or as a server
        module. Right out of the box the browser script supports both AMD and CommonJS, so if
        you wish you can use RequireJS or Browserify without having to build from source. The
        server module also works perfectly fine with Browserify, but there is the option to use
        a build specific to browsers rather than something meant for a server. Head over to
        the&nbsp;
          <Link to="/install">
            download page
          </Link>
        &nbsp; for all the options.
        </p>
        <p>
          <strong>Don&apos;t link to GitHub directly.</strong>
        &nbsp;The library is not supposed to work straight from the
        source, it requires building. If none of the pre-packaged options work for you refer to
        the&nbsp;
          <a href="http://highlightjs.readthedocs.io/en/latest/building-testing.html">
            building documentation
          </a>
        .
        </p>
        <p>
          <strong>The CDN-hosted package doesn&apos;t have all the languages.</strong>
        &nbsp;Otherwise it&apos;d be too big.
        If
        you don&apos;t see the language you need in the&nbps;
          <Link to="/install">
            &quot;Common&quot;
          </Link>
        &nbsp;section, it can be added
        manually:
        </p>
        <Highlight>
          {
`<script
 charset="UTF-8"
 src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/languages/go.min.js"></script>`
          }
        </Highlight>
        <p>
          <strong>On Almond.</strong>
        &nbsp;You need to use the optimizer to give the module a name. For example:
        </p>
        <Highlight>
          {
'r.js -o name=hljs paths.hljs=/path/to/highlight out=highlight.js'
          }
        </Highlight>
        <h3>CommonJS</h3>
        <p>You can import Highlight.js as a CommonJS-module:</p>
        <Highlight>
          {
'npm install highlight.js --save'
          }
        </Highlight>
        <p>In your application:</p>
        <Highlight>
          {'import hljs from \'highlight.js\';'}
        </Highlight>
        <p>
        The default import imports all languages! Therefore it is likely to be more efficient to
        import only the library and the languages you need:
        </p>
        <Highlight>
          {
`import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);`
          }
        </Highlight>
        <p>
        To set the syntax highlighting style, if your build tool processes CSS from your
        JavaScript entry point, you can import the stylesheet directly into your CommonJS-module:
        </p>
        <Highlight>
          {
`import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/github.css';`
          }
        </Highlight>
      </article>
    </div>
  );
}
