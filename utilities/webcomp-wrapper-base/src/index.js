const createMicroFrontendElement = ({
    useShadowRoot = true,
    connectMicroFrontend,
    disconnectMicroFrontend
}) => class extends HTMLElement {
    shadowRoot = this.attachShadow({ mode: 'open' });

    connectedCallback() {
        const root = useShadowRoot ? this.shadowRoot : this;
        connectMicroFrontend(root);
    }

    disconnectedCallback() {
        const root = useShadowRoot ? this.shadowRoot : this;
        disconnectMicroFrontend(root);
    }
};

module.exports = {
    createMicroFrontendElement
};