// import { h } from "preact";
import "./Showcase.css";
import Im1 from "../../assets/Images/Im1.png";
import Im2 from "../../assets/Images/Im2.jpg";
import Im3 from "../../assets/Images/Im3.jpg";
import Im4 from "../../assets/Images/Im4.jpg";
import { route } from "preact-router";

interface ShowcaseTilePropsType {
    title: string;
    subtitle: string;
    image: any;
    url: string;
}
const ShowcaseTile = ({ title, subtitle, image, url }: ShowcaseTilePropsType) => {
    const navigate = (path: any) => {
        route(`/${path}`, true);
    };

    return (
        <div className="column is-one-half" onClick={() => navigate(url)}>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-5by6">
                        <img
                            src={image}
                            alt="Placeholder image"
                            className={image ? "tile-image" : ""}
                        />
                    </figure>
                </div>
            </div>
            <div className="card-content" style={{ padding: "1rem .15rem" }}>
                <div className="media length-caster">
                    <div 
                        className="media-content is-flex is-flex-direction-column" 
                        style={{ gap: "6px" }}
                    >  
                        <p className="title is-5">{title}</p> 
                        <p className="subtitle is-6 ">{subtitle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Showcase: preact.FunctionalComponent = () => {
    // Initial component by "h"
    // const element = h("div", null, "Welcome to Showcase page!");

    return (
        <div className="showcase">
            <div className="section">
                <div className="tile is-ancestor columns is-variable is-6"> 
                    <ShowcaseTile
                        title="The Art of being Mused"
                        subtitle="A Museum full of items that has a lot of stories & attachments written all over them"
                        image={Im1}
                        url=""
                    />
                    <ShowcaseTile
                        title="Conch-head Manuscript"
                        subtitle="Subtitle 2"
                        image={Im2}
                        url="thoughts"
                    />
                </div>

                <div className="tile is-ancestor columns is-variable is-6">
                    <ShowcaseTile
                        title="Asunder"
                        subtitle="Subtitle 3"
                        image={Im3}
                        url="/"
                    />
                    <ShowcaseTile
                        title="If putting dots were a crime"
                        subtitle="Subtitle 4"
                        image={Im4}
                        url="/"
                    />
                </div>
            </div>
        </div>
    );
};

export default Showcase;
