import React, {useState, useEffect} from "react";
import {
  Main,
  About,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  //Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
import { motion } from "framer-motion";

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
            document.getElementById('portal')?.classList.add('light-mode');
        } else {
            setMode('dark');
            document.getElementById('portal')?.classList.remove('light-mode');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700} className="fade-in">
            <Main/>
            <Project/>
            <Expertise/>
            {/* <Timeline/> */}
            <About/>
            <Contact/>
        </FadeIn>
        {/* <Footer /> */}
    </div>
    );
}

export default App;