import Routes from "./routers/routes.navigator";
import Layout from "./components/layout/Layout";
import '@mantine/core/styles.css';
import 'bulma/css/bulma.min.css';
import './app.scss';
export function App() {

    return (
        <div className="rootcontainer">
            <Layout>
                {/* Your other components */}
                <Routes />
            </Layout>
        </div>
    );
}
