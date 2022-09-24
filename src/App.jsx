import React, { useState, useEffect } from "react";

import { C_Counter, C_Install_Button } from "./Components";

const App = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);

    console.log(deferredPrompt);

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', async (event) => {
            setDeferredPrompt(event);
        });

        return () => {
            window.removeEventListener('beforeinstallprompt', event => {
                setDeferredPrompt(event);
            });
        }
    });

    return <>
        <h1 style={{color: '#2AE1FC', margin: '0'}}>React PWA</h1>
        The site has been open for
        <C_Counter />
        seconds
        <C_Install_Button installPrompt={deferredPrompt}/>
    </>
}

export default App;