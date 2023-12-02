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
            <Contact path="/contact" />
        </Router>
    ) 
}

export default Routes;