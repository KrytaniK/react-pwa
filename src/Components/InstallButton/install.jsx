import React, {useState, useEffect} from "react";

import './install.css';

const C_Install_Button = ({ installPrompt }) => {
    
    const [show, setShow] = useState(true);

    const handlePrompt = async (e) => {
        if (!installPrompt) return;

        e.preventDefault();

        installPrompt.prompt();

        const { outcome } = await installPrompt.userChoice;

        if (outcome === 'accepted') {
            setShow(false);
        }
    }

    return (installPrompt && show) && <button
        id="appInstall"
        onClick={handlePrompt}
    >
        Install App
    </button>
};

export default C_Install_Button;