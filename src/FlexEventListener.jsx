import { createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/FlexEventListener.css";

export function FlexEventListener({ sampleText }) {
    return <HelloWorldSample sampleText={sampleText} />;
}
