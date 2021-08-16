import { createWebComponent } from '@mfdemo/create-web-component';

export const createWebComponentSvelte = (name, SvelteComp) => {
    const WebComponent = createWebComponent({
        connectMicroFrontend
    });
    customElements.define(name, WebComponent);
};