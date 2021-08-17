import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { createWebComponentSvelte } from '@mfdemo/create-web-component-svelte';
import App from './components/App.svelte';

createWebComponentSvelte('svelte-child-1', App);