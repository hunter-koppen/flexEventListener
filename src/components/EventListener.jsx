import { createElement, useEffect } from "react";

export function EventListenerComponent({ onMessage, allowedOrigins, messageToSend }) {
    useEffect(() => {
        const handleMessage = async event => {
            if (event.origin === allowedOrigins) {
                await onMessage(event);
                if (event.source && messageToSend && messageToSend.value) {
                    event.source.postMessage(messageToSend.value, event.origin);
                }
            }
        };

        window.addEventListener("message", handleMessage);

        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, [onMessage, allowedOrigins, messageToSend]);

    return null;
}
