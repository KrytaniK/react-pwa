
/* ---------- Service Worker Registration --------- */

window.addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js');
    }
});

/* ---------- React Application --------- */

import React from "react";
import { createRoot } from 'react-dom/client';

import { C_Counter } from "./Components";

const container = document.getElementById('react-root');
const root = createRoot(container);
root.render(
    <>
        The site has been open for
        <C_Counter />
        seconds
    </>
);