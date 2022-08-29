import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClientProvider} from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { queryClient } from './services/queryClient';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

