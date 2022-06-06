import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from '~/style/GlobalStyle';

import App from '~/routings/App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <>
        <GlobalStyle/>
        <App/>
    </>
);