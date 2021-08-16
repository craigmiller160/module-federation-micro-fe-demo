export const createWebComponent = ({
    connectComponent,
    disconnectComponent
}) => class extends HTMLElement {

    connectedCallback() {
        connectComponent(this);
    }

    disconnectedCallback() {
        disconnectComponent(this);
    }
};