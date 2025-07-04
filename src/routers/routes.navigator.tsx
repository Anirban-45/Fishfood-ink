import { Router } from 'preact-router';
import Home from '../pages/Home/Home';
import Thoughts from '../pages/Thoughts/Thoughts';
import Showcase from '../pages/Showcase/Showcase';
import Contact from '../pages/Contact/Contact';

const Routes: preact.FunctionalComponent = () => {

    return (
        <Router>
            <Home path="/" />
            <Thoughts path="/thoughts" />
            <Showcase path="/showcase" />
            {/* Showcase page routes */}
            {/* <Muse path="/showcase/the-art-of-being-mused" />
            <Conch path="/showcase/conch-head-manuscript" />
            <Asunder path="/showcase/asunder" />
            <Dots path="/showcase/if-putting-dots-were-a-crime" /> */}
            <Contact path="/contact" />
        </Router>
    ) 
}

export default Routes;