# Module Federation Micro-Frontend Demo

A demo of a way to build a simple micro-frontend framework using Webpack 5 Module Federation.

## Dependency Sharing Impact on Bundle Size

Total Size Without Sharing: 7,766,949

Total Size With Sharing: 4,943,783

## Special Notes

1. Svelte has an issue with micro-frontends. The `svelte`, `svelte-navigator`, and potentially other packages too cannot exist with multiple applications on the same page. I do not understand why this is, but they must be excluded from dependency sharing. 

# TODO add polyfills for web components
