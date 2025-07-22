import { createElement } from "react";

import { EventListenerComponent } from "./components/EventListener";
import "./ui/FlexEventListener.css";

export function FlexEventListener({ allowedOrigins, messageReceived, onMessageReceived }) {

    const handleMessageReceived = message => {
        if (messageReceived) {
            messageReceived.setValue(message);
        }
        if (onMessageReceived) {
            onMessageReceived.execute(message);
        }
    };

    return <EventListenerComponent allowedOrigins={allowedOrigins} onMessage={handleMessageReceived} />;
}
