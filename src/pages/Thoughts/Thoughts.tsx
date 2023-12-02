import { h } from 'preact'
import "./Thoughts.css"

const Thoughts: preact.FunctionalComponent = () => {
    // Initial component by "h"
    const element = h("div", null, "Welcome to Thoughts page!");

    return (
        <div className="thoughts">
            {/* Your component TSX */}
            {element}
        </div>
    )
}

export default Thoughts;