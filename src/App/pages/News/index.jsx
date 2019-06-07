import React from 'react';
import styles from './styles.less';

export default function News() {
  return (
    <div className={styles.container}>
      <article>
        <h1>Latest News</h1>
        <div className={styles.news}>
          <div className={styles.item}>
            <span>2019-02-26</span>
            <p>
              Version 9.15.6 New languages: none. New styles: none. Improvements: - Move
              dependencies to be devDependencies. - Fixed security issues in dev dependencies.
            </p>
          </div>
          <div className={styles.item}>
            <span>2019-02-25</span>
            <p>
              Version 9.15.5 New languages: none. New styles: none. Improvements:
              <span role="img" aria-label="fire">🔥</span>
              Hot fix: updated build tool.
            </p>
          </div>
          <div className={styles.item}>
            <span>2019-02-25</span>
            <p>
              Version 9.15.2 New languages: none. New styles: none. Improvements:
              <span role="img" aria-label="fire">🔥</span>
              Hot fix that
              was preventing highlight.js from installing.
            </p>
          </div>
          <div className={styles.item}>
            <span>2019-02-24</span>
            <div className={styles.group}>
              <p>Version 9.15.1</p>
              <p>New languages: none.</p>
              <p>New styles: none.</p>
              <p>Improvements:</p>
              <ul>
                <li>
                Pony: Fixed keywords without spaces at line ends, highlighting of iso
                in class definitions, and function heads without bodies in traits and interfaces.
                Removed FUNCTION and CLASS modes until they are found to be needed and to provide
                some of the fixes.
                </li>
                <li>
                Support external language files in minified version of highlight.js (#1888)
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.item}>
            <span>2019-01-31</span>
            <p>Version 9.14.2</p>
            <p>
            New languages: none. New styles: none. Improvements: - Gauss fixed to stop global
            namespace pollution Scott Hyndman. - fix(Tcl): removed apostrophe string delimiters
            (don&apos;t exist)
            </p>
          </div>
          <div className={styles.item}>
            <span>2019-01-29</span>
            <p>Version 9.14.1</p>
            <p>
            New languages: none. New styles: none. Improvements: - Pony: language improvements
            (#1958)
            </p>
          </div>
          <div className={styles.item}>
            <span>2018-10-16</span>
            <div className={styles.group}>
              <p>Version 9.13.1</p>
              <p>Improvements:</p>
              <ul>
                <li>
                C# function declarations no longer include trailing whitespace, by JeremyTCD
                </li>
                <li>Added new and missing keywords to AngelScript, by Melissa Geels</li>
                <li>TypeScript decorator factories highlighting fix, by Antoine Boisier-Michaud</li>
                <li>Added support for multiline strings to Swift, by Alejandro Isaza</li>
                <li>Fixed issue that was causing some minifiers to fail.</li>
                <li>Fixed autoDetection to accept language aliases.</li>
              </ul>
            </div>
          </div>
          <div className={styles.item}>
            <span>2018-10-12</span>
            <div className={styles.group}>
              <p>Version 9.13.0</p>
              <p>New Languages:</p>
              <ul>
                <li>
                  <em>ArcGIS Arcade</em>
                  &nbsp;by&nbsp;
                  <a href="https://github.com/jf990">John Foster</a>
                </li>
                <li>
                  <em>AngelScript</em>
                  &nbsp;by&nbsp;
                  <a href="https://github.com/codecat">Melissa Geels</a>
                </li>
                <li>
                  <em>GML</em>
                  &nbsp;by&nbsp;
                  <a href="https://github.com/meseta">meseta</a>
                </li>
                <li>
                  <em>isbl</em>
                  &nbsp;built-in language DIRECTUM and Conterra by&nbsp;
                  <a href="https://github.com/MedvedTMN">Dmitriy Tarasov</a>
                </li>
                <li>
                  <em>PostgreSQL</em>
                  &nbsp;SQL dialect and PL/pgSQL language by&nbsp;
                  <a href="https://github.com/egor-rogov">Egor Rogov</a>
                </li>
                <li>
                  <em>ReasonML</em>
                  &nbsp;by&nbsp;
                  <a href="https://github.com/gmmorris">Gidi Meir Morris</a>
                </li>
                <li>
                  <em>SAS</em>
                  &nbsp;by&nbsp;
                  <a href="https://github.com/mcaceresb">Mauricio Caceres Bravo</a>
                </li>
                <li>
                  <em>Plaintext</em>
                  &nbdp;by&nbsp;
                  <a href="https://github.com/egor-rogov">Egor Rogov</a>
                </li>
                <li>
                  <em>.properties</em>
                  &nbsp;by&nbsp;
                  <a href="https://github.com/bostko">bostko</a>
                  &nbsp;and&nbsp;
                  <a href="https://github.com/egor-rogov">Egor Rogov</a>
                </li>
              </ul>
              <p>New styles:</p>
              <ul>
                <li>
                  <em>a11y-dark theme</em>
                  &nbsp;by&nbsp;
                  <a href="https://github.com/ericwbailey">Eric Bailey</a>
                </li>
                <li>
                  <em>a11y-light theme</em>
                  &nbsp;by&nbsp;
                  <a href="https://github.com/ericwbailey">Eric Bailey</a>
                </li>
                <li>
                  <em>An Old Hope</em>
                  &nbsp;by&nbsp;
                  <a href="https://github.com/gusbemacbe">Gustavo Costa</a>
                </li>
                <li>
                  <em>Atom One Dark Reasonable</em>
                  &nbsp;by&nbsp;
                  <a href="https://github.com/gmmorris">Gidi Meir Morris</a>
                </li>
                <li>
                  <em>isbl editor dark</em>
                  &nbsp;by&nbsp;
                  <a href="https://github.com/MedvedTMN">Dmitriy Tarasov</a>
                </li>
                <li>
                  <em>isbl editor light</em>
                  &nbsp;by&nbsdp;
                  <a href="https://github.com/MedvedTMN">Dmitriy Tarasov</a>
                </li>
                <li>
                  <em>Lightfair</em>
                  &nbsp;by&nbsp;
                  <a href="https://github.com/TristianK3604">Tristian Kelly</a>
                </li>
                <li>
                  <a href="https://github.com/arcticicestudio/nord-highlightjs">
                    <em>Nord</em>
                  </a>
                  &nbsp;by&nbsp;
                  <a href="https://github.com/arcticicestudio">Arctic Ice Studio</a>
                </li>
                <li>
                  <em>
                    <a href="https://github.com/ahmadawais/Shades-of-Purple-HighlightJS">
                      <span role="img" aria-label="">🦄</span>
                    &nbsp;Shades of Purple
                    </a>
                  </em>
                  &nbsp;by&nbsp;
                  <a href="https://github.com/ahmadawais">Ahmad Awais</a>
                </li>
              </ul>
              <p>Inprovements:</p>
              <ul>
                <li>
                  New attribute&nbsp;
                  <code>endSameAsBegin</code>
                  &nbsp;for nested constructs with variable names by&nbsp;
                  <a href="https://github.com/egor-rogov">Egor Rogov</a>
                </li>
                <li>
                  <em>Python</em>
                  &nbsp;highlighting of escaped quotes fixed by&nbsp;
                  <a href="https://github.com/Harmon758">Harmon</a>
                </li>
                <li>
                  <em>PHP</em>
                  :&nbsp;Added alias for php7, by&nbsp;
                  <a href="https://github.com/vijaycs85">Vijaya Chandran Mani</a>
                </li>
                <li>
                  <em>C++</em>
                  &nbsp;string handling, by&nbsp;
                  <a href="https://github.com/davidben">David Benjamin</a>
                </li>
                <li>
                  <em>Swift</em>
                  &nbsp;Add&nbsp;
                  <code>@objcMembers</code>
                  &nbsp;to&nbsp;
                  <code>@attributes</code>
                  &nbsp;, by&nbsp;
                  <a href="https://github.com/berkcebi">Berk Çebi</a>
                </li>
                <li>
                  Infrastructural changes by&nbsp;
                  <a href="https://github.com/marcoscaceres">Marcos Cáceres</a>
                </li>
                <li>
                  Fixed metachars highighting for&nbsp;
                  <em>NSIS</em>
                  &nbsp;by&nbsp;
                  <a href="https://github.com/idleberg">Jan T. Sott</a>
                </li>
                <li>
                  <em>Yaml</em>
                  &nbsp;highlight local tags as types by&nbsp;
                  <a href="https://github.com/leoetlino">Léo Lam</a>
                </li>
                <li>
                  Improved highlighting for&nbsp;
                  <em>Elixir</em>
                  &nbsp;by&nbsp;
                  <a href="https://github.com/pkaminski">Piotr Kaminski</a>
                </li>
                <li>
                  New attribute&nbsp;
                  <code>disableAutodetect</code>
                  &nbsp;for preventing autodetection by&nbsp;
                  <a href="https://github.com/egor-rogov">Egor Rogov</a>
                </li>
                <li>
                  <em>Matlab</em>
                  :&nbsp;transpose operators and double quote strings, by&nbsp;
                  <a href="https://github.com/JohnC32">JohnC32</a>
                  &nbsp;and&nbsp;
                  <a href="https://github.com/egor-rogov">Egor Rogov</a>
                </li>
                <li>
                  Various documentation typos and improvemets by&nbsp;
                  <a href="https://github.com/jimmywarting">Jimmy Wärting</a>
                  ,&nbsp;
                  <a href="https://github.com/lutz-100worte">Lutz Büch</a>
                  ,&nbsp;
                  <a href="https://github.com/bcleland">bcleland</a>
                </li>
                <li>
                  <em>Cmake</em>
                  &nbsp;updated with new keywords and commands by&nbsp;
                  <a href="https://github.com/Bagira80">Deniz Bahadir</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.item}>
            <span>2017-05-30</span>
            <div className={styles.group}>
              <p>Version 9.12.0</p>
              <p>New language:</p>
              <ul>
                <li>
                  <em>MikroTik</em>
                  &nbsp;RouterOS Scripting language by&nbsp;
                  <a href="https://github.com/DiVAN1x">Ivan Dementev</a>
                </li>
              </ul>
              <p>New style:</p>
              <ul>
                <li>
                  <em>VisualStudio 2015 Dark</em>
                  &nbsp;by&nbsp;
                  <a href="https://github.com/Nicolas01">Nicolas LLOBERA</a>
                </li>
              </ul>
              <p>Improvements:</p>
              <ul>
                <li>
                  <em>Crystal</em>
                  &nbsp;updated with new keywords and syntaxes by&nbsp;
                  <a href="https://github.com/MakeNowJust">Tsuyusato Kitsune</a>
                </li>
                <li>
                  <em>Julia</em>
                  &nbsp;updated to the modern definitions by&nbsp;
                  <a href="https://github.com/ararslan">Alex Arslan</a>
                </li>
                <li>
                  <em>julia-repl</em>
                  &nbsp;added by&nbsp;
                  <a href="https://github.com/mortenpi">Morten Piibeleht</a>
                </li>
                <li>
                  <a href="https://github.com/4ppl">Stanislav Belov</a>
                  &nbsp;wrote a new definition for&nbsp;
                  <em>1C</em>
                  , replacing the one thathas not been updated for more than 8 years.
                  The new version supports syntax for versions 7.7 and 8.
                </li>
                <li>
                  <a href="https://github.com/Nicolas01">Nicolas LLOBERA</a>
                  &nbsp;improved C# definition fixing edge cases with function
                  titles detection and added highlighting of&nbsp;
                  <code>[Attributes]</code>
                  .
                </li>
                <li>
                  <a href="https://github.com/nnnik">nnnik</a>
                  &nbsp;provided a few correctness fixes for&nbsp;
                  <em>Autohotkey</em>
                </li>
                <li>
                  <a href="https://github.com/maacl">Martin Clausen</a>
                  &nbsp;made annotation collections in&nbsp;
                  <em>Clojure</em>
                  &nbsp;to look consistently with other kinds.
                </li>
                <li>
                  <a href="https://github.com/Azoy">Alejandro Alonso</a>
                  &nbsp;updated&nbps;
                  <em>Swift</em>
                  &nbsp;keywords.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.item}>
            <span>2017-04-19</span>
            <div className={styles.group}>
              <p>Version 9.11.0</p>
              <p>New languages:</p>
              <ul>
                <li>
                  <em>Shell</em>
                  &nbsp;by&nbsp;
                  <a href="https://github.com/MakeNowJust">Tsuyusato Kitsune</a>
                </li>
                <li>
                  <em>jboss-cli</em>
                  &nbsp;by&nbsp;
                  <a href="https://github.com/rparree">Raphaël Parrëe</a>
                </li>
              </ul>
              <p>Improvements:</p>
              <ul>
                <li>
                  <a href="https://github.com/joel-porquet">Joël Porquet</a>
                  &nbsp;has&nbsp;
                  <a href="https://github.com/isagalaev/highlight.js/commit/5b3e0e68bfaae282faff6697d6a490567fa9d44b">
                  greatly improved the definition of&nbsp;
                    <em>makefile</em>
                  </a>
                  .
                </li>
                <li>
                  <em>C++</em>
                  &nbsp;class titles are now highlighted as in other languages with classes.
                </li>
                <li>
                  <a href="https://github.com/jordi-petit">Jordi Petit</a>
                  &nbsp;added rarely used&nbsp;
                  <code>or</code>
                  ,&nbsp;
                  <code>and</code>
                  &nbsp;and&nbsp;
                  <code>not</code>
                  &nbsp;keywords to
                  &nbsp;
                  <em>C++</em>
                  .
                </li>
                <li>
                  <a href="https://github.com/NuclearCookie">Pieter Vantorre</a>
                  &nbsp;fixed highlighting of negative floating point values.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
