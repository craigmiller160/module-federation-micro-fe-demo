export const createWebComponent = ({
    connectComponent,
    disconnectComponent
}) => class extends HTMLElement {
    connectResult = null;

    connectedCallback() {
        this.connectResult = connectComponent(this);
    }

    disconnectedCallback() {
        disconnectComponent(this, this.connectResult);
    }
};