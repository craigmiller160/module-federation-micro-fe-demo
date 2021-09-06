<script>
    import { Router } from 'svelte-navigator';
    import Content from './Content.svelte';
    import { GlobalRouterConnector } from '@mfdemo/global-router-svelte-navigator/src';

    // TODO primary=false might not be necessary
</script>

<Router primary={ false }>
    <GlobalRouterConnector />
    <Content />
</Router>
