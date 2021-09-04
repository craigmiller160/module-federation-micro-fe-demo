<script>
    import { useLocation, useNavigate } from 'svelte-navigator';
    import { onDestroy } from 'svelte';

    // TODO why is this not responding to the first event from another micro-frontend?

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

    window.addEventListener(EVENT_NAME, globalRouterListener, true);

    onDestroy(() => {
        locationUnsubscribe();
        window.removeEventListener(EVENT_NAME, globalRouterListener, true);
    });

</script>

<span></span>
