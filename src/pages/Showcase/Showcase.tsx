import { h } from 'preact'
import "./Showcase.css"

const Showcase: preact.FunctionalComponent = () => {
    // Initial component by "h"
    const element = h("div", null, "Welcome to Showcase page!");

    return (
        <div className="showcase">
            {/* Your component TSX */}
            {element}
        </div>
    )
}

export default Showcase;
