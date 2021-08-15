const createMicroFrontendElement = ({
    connectMicroFrontend,
    disconnectMicroFrontend
}) => class extends HTMLElement {
    shadowRoot = this.attachShadow({ mode: 'open' });

    connectedCallback() {
        connectMicroFrontend(this.shadowRoot);
    }

    disconnectedCallback() {
        disconnectMicroFrontend(this.shadowRoot);
    }
};

export default createMicroFrontendElement;