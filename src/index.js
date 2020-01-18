import React from 'react';
import { render } from 'react-dom';
import App from './app';
import AppProviders from './providers';
import theme from './styles/theme';

const root = document.createElement('div');
root.style.display = 'flex';
root.style.flexDirection = 'column';
root.style.alignItems = 'stretch';
root.style.justifyContent = 'flex-start';
root.style.height = '100%';
root.style.width = '100%';
document.body.appendChild(root);

render(
  <AppProviders>
    <App />
  </AppProviders>,
  root
);
