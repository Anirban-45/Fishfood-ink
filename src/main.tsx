import { render } from 'preact';
import { App } from './app.tsx';
import { MantineProvider } from "@mantine/core"
import './index.css';

const rootElement = document.getElementById('app');

if (rootElement) {
    render(
        <MantineProvider>
            <App /> 
        </MantineProvider>,
        rootElement
    )
}