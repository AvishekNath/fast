import { RenderControlConfig } from "./control.css.utilities.props";
import React from "react";
import { CSSRef } from "./control.css-ref";
import {
    CSSPropertyRef,
    CSSPropertySyntax,
} from "@microsoft/fast-tooling/dist/data-utilities/mapping.mdn-data";

export interface RenderPropertyControlConfig extends RenderControlConfig {
    property: string;
    syntax: CSSPropertySyntax | CSSPropertyRef;
}

export function renderPropertyControl(
    config: RenderPropertyControlConfig
): React.ReactNode {
    switch (config.property) {
        default:
            return (
                <CSSRef
                    mapsToProperty={config.property}
                    syntax={config.syntax}
                    onChange={config.handleChange}
                />
            );
    }
}
