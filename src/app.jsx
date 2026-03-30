import { h, Component } from 'preact';
import { DotScrollbar, Header1 } from './components';
import { About, Contact, Home, Landing, NotFound, Projects, Skills } from './pages';
import Router from "preact-router"
import { ScrollToTop, useStartupHooks, } from './hooks';
import { useEffect } from 'preact/hooks';




const App = () => {
  const { startupProcesses } = useStartupHooks();

  useEffect(async () => {
    startupProcesses();
  }, []);


  return (
    <div class="selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden w-full mesh-gradient antialiased">

      <ScrollToTop />
      <DotScrollbar />

      {/* <!-- TopAppBar --> */}
      <Header1 />

      <Router>
        <Landing path="/" >
          <Home />
        </Landing>

        <Landing path="/projects" >
          <Projects />
        </Landing>

        <Landing path="/skills" >
          <Skills />
        </Landing>

        <Landing path="/about" >
          <About />
        </Landing>

        <Landing path="/contact" >
          <Contact />
        </Landing>



        <NotFound default />

      </Router>

    </div>
  );
};

export default App;