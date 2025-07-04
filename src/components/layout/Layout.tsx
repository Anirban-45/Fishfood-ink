import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import bgImageUrl from "../../assets/Images/Background.png";

const Layout: preact.FunctionalComponent = ({ children }) => {

    // const bgImageUrl = "../../assets/Images/Background.png";
    return (
        <div>
            {/* Your other components */}
            <Header />
            <main
                style={{
                    minHeight: "500px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundImage: `url(${bgImageUrl})`,
                    backgroundSize: "cover",
                }}
            >
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
