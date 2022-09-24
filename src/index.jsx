
/* ---------- Service Worker Registration --------- */

window.addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js');
    }
});

/* ---------- App Install Handle --------- */

let deferredInstallPrompt;
window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredInstallPrompt = e;
});

/* ---------- React Application --------- */

import React from "react";
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('react-root');
const root = createRoot(container);
root.render(<App />);