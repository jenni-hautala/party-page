import { createRoot } from 'react-dom/client';
import React from 'react';

// Render your React component instead
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<h1>Hello, world</h1>);
