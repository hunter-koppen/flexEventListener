import { createElement, useEffect } from "react";

export function EventListenerComponent({ onMessage, allowedOrigins }) {
    
    useEffect(() => {
        const handleMessage = event => {
            if (event.origin === allowedOrigins) {
                onMessage(event.data);
            }
        };

        window.addEventListener("message", handleMessage);
    }, [onMessage, allowedOrigins]);

    return null;
}
