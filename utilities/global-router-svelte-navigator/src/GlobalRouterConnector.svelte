<script>
    import { useLocation, useNavigate } from 'svelte-navigator';
    import { onDestroy } from 'svelte';

    const EVENT_NAME = 'microFrontendGlobalRouter';

    let currentPathname = '';
    let dispatching = false;

    const location = useLocation();
    const navigate = useNavigate();

    const globalRouterListener = (event) => {
        if (!dispatching) {
            currentPathname = event.detail.pathname;
            navigate(event.detail.pathname);
        } else {
            dispatching = false;
        }
    };
    window.addEventListener(EVENT_NAME, globalRouterListener, true);

    const locationUnsubscribe = location.subscribe((locationDetails) => {
        if (currentPathname !== locationDetails.pathname) {
            const event = new CustomEvent(EVENT_NAME, {
                detail: {
                    pathname: locationDetails.pathname
                }
            });
            dispatching = true;
            window.dispatchEvent(event);
        }
        currentPathname = locationDetails.pathname;
    });

    onDestroy(() => {
        locationUnsubscribe();
        window.removeEventListener(EVENT_NAME, globalRouterListener, true);
    });

</script>

<span></span>
