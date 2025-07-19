import paypal from "../assets/paypal.png";
export default function Footer() {
  return (
    <>
      <footer>
        <section>
          <div id="stuff">
            <h3>Stuff</h3>
            <ul>
              <li>
                <a href="https://twitter.com/obey_love">
                  @obey_love on Twitter
                </a>
              </li>
              <li>
                <a href="#germanunkol">Special effects edition</a>
              </li>
              <li>
                <a href="releases.xml">Release announcements feed</a>
              </li>
            </ul>
          </div>
          <div id="donate">
            <h3>Donate</h3>
            <p>World domination is ensured with your donation. Thank you!</p>
            <ul>
              <li>
                <a href="#">
                  <img src={paypal}></img>
                </a>
              </li>
            </ul>
          </div>
          <div id="moon"></div>
          <div id="contact">
            <h3>Contact</h3>
            <p>
              You can file a bug, ask a question in the forums, or contact rude
              for other stuff.
            </p>
          </div>
          <div id="documentation">
            <h3>Documentation</h3>
            <ul>
              <li>
                <a href="#">love</a>
              </li>
              <li>
                <a href="#">math</a>
              </li>
              <li>
                <a href="#">audio</a>
              </li>
              <li>
                <a href="#">mouse</a>
              </li>
              <li>
                <a href="#">data</a>
              </li>
              <li>
                <a href="#">physics</a>
              </li>
              <li>
                <a href="#">event</a>
              </li>
              <li>
                <a href="#">sound</a>
              </li>
              <li>
                <a href="#">filesystem</a>
              </li>
              <li>
                <a href="#">graphics</a>
              </li>
              <li>
                <a href="#">timer</a>
              </li>
              <li>
                <a href="#">image</a>
              </li>
              <li>
                <a href="#">touch</a>
              </li>
              <li>
                <a href="#">joystick</a>
              </li>
              <li>
                <a href="#">video</a>
              </li>
              <li>
                <a href="#">keyboard</a>
              </li>
              <li>
                <a href="#">window</a>
              </li>
            </ul>
          </div>
        </section>
      </footer>
    </>
  );
}
