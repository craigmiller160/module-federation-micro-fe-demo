import React from 'react';
import ReactDOM from 'react-dom';
import { createMicroFrontendElement } from '@mfdemo/webcomp-wrapper-base';

export const wrapAndRegisterWebComponent = (name, ReactComp) => {
    const WebComponent = createMicroFrontendElement({
        connectMicroFrontend: (root) => ReactDOM.render(<ReactComp />, root),
        disconnectMicroFrontend: (root) => ReactDOM.unmountComponentAtNode(root)
    });
    customElements.define(name, WebComponent);
};