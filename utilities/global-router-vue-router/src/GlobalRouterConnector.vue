<template>
  <span></span>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { onUnmounted, watch } from 'vue';

const EVENT_NAME = 'microFrontendGlobalRouter';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    let dispatching = false;
    let currentPathname = '';

    const globalRouterListener = (event) => {
      if (!dispatching) {
        currentPathname = event.detail.pathname;
        router.push(event.detail.pathname);
      } else {
        dispatching = false;
      }
    };

    const routeUnsubscribe = watch(route, (newValue, oldValue) => {
      if (currentPathname !== newValue.path) {
        const event = new CustomEvent(EVENT_NAME, {
          detail: {
            pathname: newValue.path
          }
        });
        dispatching = true;
        window.dispatchEvent(event);
      }
      currentPathname = newValue.path;
    });
    window.addEventListener(EVENT_NAME, globalRouterListener, true);

    onUnmounted(() => {
      routeUnsubscribe();
      window.removeEventListener(EVENT_NAME, globalRouterListener, true);
    });
  }
}
</script>

<style scoped>

</style>