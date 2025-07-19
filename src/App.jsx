import "./App.css";
import Download from "./components/Download";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Examples from "./components/Examples";
function App() {
  return (
    <main id="root">
      <h1>Love</h1>
      <Navbar />
      <section id="intro">
        <p>
          Hi there! LÖVE is an *awesome* framework you can use to make 2D games
          in Lua. It's free, open-source, and works on Windows, macOS, Linux,
          Android and iOS.
        </p>
      </section>
      <Download />
      <Features />
      <Examples />
    </main>
  );
}

export default App;
