import React from "react";
import {useViewportSize} from "./hooks/useViewportSize";

export function ViewportSizeHook() {

    const { height, width } = useViewportSize();

    return (
        <>
            Width: {width}, height: {height}
        </>
    )
}