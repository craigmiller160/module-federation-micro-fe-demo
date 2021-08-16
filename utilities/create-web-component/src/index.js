export const createWebComponent = ({
    connectMicroFrontend,
    disconnectMicroFrontend
}) => class extends HTMLElement {

    connectedCallback() {
        connectMicroFrontend(this);
    }

    disconnectedCallback() {
        disconnectMicroFrontend(this);
    }
};