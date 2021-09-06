<script>
    import { Router } from 'svelte-navigator';
    import Content from './Content.svelte';
    import { GlobalRouterConnector } from '@mfdemo/global-router-svelte-navigator/src';
</script>

<Router>
    <GlobalRouterConnector />
    <Content />
</Router>
