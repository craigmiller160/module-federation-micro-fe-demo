import { createWebComponent } from '@mfdemo/create-web-component';

export const createWebComponentSvelte = (name, SvelteComp) => {
    const WebComponent = createWebComponent({
        connectComponent: (root) => new SvelteComp({
            target: root
        }),
        disconnectComponent: (root, connectResult) => connectResult.$destroy()
    });
    customElements.define(name, WebComponent);
};