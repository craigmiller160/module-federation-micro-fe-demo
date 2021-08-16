import ReactDOM from 'react-dom';
import { createWebComponent } from '@mfdemo/create-web-component';

export const createWebComponentReact = (name, ReactComp) => {
    const WebComponent = createWebComponent({
        connectComponent: (root) => ReactDOM.render(<ReactComp />, root),
        disconnectComponent: (root) => ReactDOM.unmountComponentAtNode(root)
    });
    customElements.define(name, WebComponent);
};