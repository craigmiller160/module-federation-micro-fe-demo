import React from 'react';
import ReactDOM from 'react-dom';
import { createWebComponent } from '@mfdemo/create-web-component';

export const createWebComponentReact = (name, ReactComp) => {
    const WebComponent = createWebComponent({
        connectMicroFrontend: (root) => ReactDOM.render(<ReactComp />, root),
        disconnectMicroFrontend: (root) => ReactDOM.unmountComponentAtNode(root)
    });
    customElements.define(name, WebComponent);
};