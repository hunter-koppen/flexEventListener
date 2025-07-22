import { createElement } from "react";

import { EventListenerComponent } from "./components/EventListener";
import "./ui/FlexEventListener.css";

export function FlexEventListener({ allowedOrigins, messageReceived, onMessageReceived, messageToSend }) {
    const handleMessage = event => {
        return new Promise(resolve => {
            if (messageReceived) {
                messageReceived.setValue(event.data);
            }
            if (onMessageReceived && onMessageReceived.canExecute) {
                onMessageReceived.execute();
                const interval = setInterval(() => {
                    if (onMessageReceived.isExecuting === false) {
                        clearInterval(interval);
                        resolve();
                    }
                }, 100);
            } else {
                resolve();
            }
        });
    };

    return (
        <EventListenerComponent
            allowedOrigins={allowedOrigins ? allowedOrigins.value : ""}
            onMessage={handleMessage}
            messageToSend={messageToSend}
        />
    );
}
