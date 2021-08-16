import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { App } from './components/App';
import { createWebComponentReact } from '@mfdemo/create-web-component-react';

createWebComponentReact('react-child-1', App);