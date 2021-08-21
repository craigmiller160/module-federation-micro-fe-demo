<template>
  <GlobalRouterConnector />
  <Content />
</template>

<script>
import Content from './Content';
import { GlobalRouterConnector } from '@mfdemo/global-router-vue-router';
import { useRouter } from 'vue-router';
export default {
  name: "App",
  components: { Content, GlobalRouterConnector },
  setup() {
    const router = useRouter()
    console.log('App Router', router); // TODO delete this
  }
}
</script>

<style scoped>

</style>