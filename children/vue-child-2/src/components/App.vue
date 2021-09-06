<template>
  <GlobalRouterConnector />
  <Content />
</template>

<script>
import Content from './Content';
// TODO why do I need to only import it from src here?
import { GlobalRouterConnector } from '@mfdemo/global-router-vue-router/src';
export default {
  name: "App",
  components: { Content, GlobalRouterConnector }
}
</script>

<style scoped>

</style>
