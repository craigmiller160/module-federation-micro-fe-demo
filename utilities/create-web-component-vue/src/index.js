import { createWebComponent } from '@mfdemo/create-web-component';

export const createWebComponentVue = (name, vueComp) => {
    const WebComponent = createWebComponent({
        connectComponent: (root) => vueComp.mount(root),
        disconnectComponent: () => vueComp.unmount()
    });
    customElements.define(name, WebComponent);
};