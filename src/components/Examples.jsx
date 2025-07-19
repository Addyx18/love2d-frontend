import balatro from "../assets/balatro.png";
import movedie from "../assets/moveordie.png";
import ohmygiraffe from "../assets/oh-my-giraffe.png";
import gravitycircuit from "../assets/gravitycircuit.png";
import moonring from "../assets/moonring.png";
import arco from "../assets/arco.png";
function Examples() {
  return (
    <>
      <section id="examples">
        <h2>Examples</h2>
        <p>
          It’s pretty easy to get started with LÖVE, just check out these code
          snippets.
        </p>
        <section>
          <dl>
            <dt>Drawing text</dt>
            <dd>
              <code className="hljs lua">
                <span className="hljs-function">
                  <span className="hljs-keyword">function</span>
                  &nbsp;
                  <span className="hljs-title">love.draw</span>
                  <span className="hljs-params">()</span>
                </span>
                <br />
                <span className="hljs-indent"></span>
                love.graphics.
                <span className="hljs-built_in">print</span>(
                <span class="hljs-string">"Hello World!"</span>,
                <span class="hljs-number">400</span>,
                <span class="hljs-number">300</span>
                )
                <br />
                <span className="hljs-keyword">end</span>
              </code>
            </dd>
            <dt>Drawing and image</dt>
            <dd>
              <code className="hljs-lua">
                <span className="hljs-function">
                  <span className="hljs-keyword">function</span>
                  &nbsp;
                  <span className="hljs-title">love.load</span>
                  <span className="hljs-params">()</span>
                </span>
                <br />
                <span className="hljs-indent"></span>
                love.graphics.newImage(
                <span className="hljs-string">"whale.png"</span>)
                <br />
                <span className="hljs-keyword">end</span>
                <br />
                <span className="hljs-function">
                  <span className="hljs-keyword">function</span>
                  &nbsp;
                  <span className="hljs-title">love.draw</span>
                  <span className="hljs-params">()</span>
                </span>
                <br />
                <span className="hljs-indent"></span>
                love.graphics.draw(whale,
                <span className="hljs-number">300</span>
                ,&nbsp;
                <span className="hljs-number">200</span>)
                <br />
                <span className="hljs-keyword">end</span>
              </code>
            </dd>
            <dt>Playing a sound</dt>
            <dd>
              <code className="hljs-lua">
                <span className="hljs-function">
                  <span className="hljs-keyword">function</span>
                  &nbsp;
                  <span className="hljs-title">love.load</span>
                  <span className="hljs-params">()</span>
                </span>
                <br />
                <span className="hljs-indent"></span>
                sound = love.audio.newSource(
                <span className="hljs-string">"music.ogg"</span>,&nbsp;
                <span className="hljs-string">"stream"</span>)
                <br />
                <span className="hljs-indent"></span>
                love.audio.play(sound)
                <br />
                <span className="hljs-keyword">end</span>
              </code>
            </dd>
          </dl>
        </section>
        <p>
          Check out some more tutorials on <a href="#">the wiki</a>
        </p>

        <section id="games">
          <h2>Games</h2>
          <p>
            LÖVE has been used for commercial projects, game jams, prototyping,
            and everything in between. Here are a few examples.
          </p>
          <ul>
            <li>
              <a href="#">
                <img src={balatro} alt="Balatro" title="Balatro" />
              </a>
            </li>

            <li>
              <a href="#">
                <img src={movedie} alt="movedie" title="movedie" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={arco} alt="arco" title="arco" />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src={gravitycircuit}
                  alt="gravitycircuit"
                  title="gravitycircuit"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={moonring} alt="moonring" title="moonring" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={ohmygiraffe} alt="ohmygiraffe" title="ohmygiraffe}" />
              </a>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
}
export default Examples;
