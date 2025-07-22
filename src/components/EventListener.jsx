import { useEffect, useState } from "react";

export function EventListenerComponent({
    messageReceived,
    onMessageReceived,
    messageToSend,
    readyToSend,
    allowedOrigins
}) {
    const [lastEvent, setLastEvent] = useState(null);
    useEffect(() => {
        const handleMessage = event => {
            if (event.origin === allowedOrigins || allowedOrigins === "*") {
                if (messageReceived) {
                    messageReceived.setValue(event.data);
                }
                setLastEvent(event);
                if (onMessageReceived && onMessageReceived.canExecute) {
                    onMessageReceived.execute();
                }
            }
        };

        window.addEventListener("message", handleMessage);

        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, [allowedOrigins, messageReceived, onMessageReceived]);

    useEffect(() => {
        if (readyToSend && readyToSend.value && lastEvent && messageToSend && messageToSend.value) {
            if (lastEvent.source) {
                lastEvent.source.postMessage(messageToSend.value, lastEvent.origin);
            }
            readyToSend.setValue(false);
        }
    }, [readyToSend, readyToSend?.value, lastEvent, messageToSend]);

    return null;
}
