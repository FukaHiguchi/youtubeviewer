import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { createRoot } from 'react-dom/client';

const rootEl = document.getElementById('root');

ReactDOM.render(
    <h1>Hello </h1>,
    rootEl,
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <h1>Hello</h1>
);
