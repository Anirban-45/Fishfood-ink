// import { h } from 'preact'
import "./Home.css"
import { Container, Space } from '@mantine/core';
import {texts} from '../../data/data';

const Home: preact.FunctionalComponent = () => {
    // Initial component by "h"
    // const element = h("div", null, "Welcome to Homepage!");

    return (
        <div className="home">
            <Container size="md">
                <Space >
                    {texts.home.welcomeMessage}
                </Space>
                {texts.home.aboutMessage}
            </Container>
        </div>
    )
}

export default Home;
