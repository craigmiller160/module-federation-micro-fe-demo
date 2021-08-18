import { Content } from './Content';
import { BrowserRouter } from 'react-router-dom';
import { GlobalRouterConnector } from '@mfdemo/global-router-react-router';

export const App = () => (
    <BrowserRouter>
        <GlobalRouterConnector />
        <Content />
    </BrowserRouter>
);