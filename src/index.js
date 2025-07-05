import React from 'react';
import { createRoot } from 'react-dom/client';
import ThemeProvider from './ThemeProvider';
import App from './App';
import './index.css'; // 如果你有全局样式

const container = document.getElementById('root');
const root = createRoot(container);
  root.render(
   <ThemeProvider>
     <App />
   </ThemeProvider>
 );
