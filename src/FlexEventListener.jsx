import { createElement } from "react";

import { EventListenerComponent } from "./components/EventListener";

export function FlexEventListener({ allowedOrigins, messageReceived, onMessageReceived, messageToSend, readyToSend }) {
    return (
        <EventListenerComponent
            allowedOrigins={allowedOrigins?.value || "*"}
            onMessageReceived={onMessageReceived}
            messageReceived={messageReceived}
            readyToSend={readyToSend}
            messageToSend={messageToSend}
        />
    );
}
