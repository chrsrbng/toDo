import App from './app/modules/internal';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { createGlobalStyle } from "styled-components"

const UniversalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        color: #5a5a5a;
        font-family: Montserrat, sans-serif
    }
`

const container = document.getElementById('root');
createRoot(container as Element).render(
  <React.StrictMode>
    <UniversalStyle />
    <App />
  </React.StrictMode>
);
