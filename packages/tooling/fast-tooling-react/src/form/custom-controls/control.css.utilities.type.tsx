import { Type } from "@microsoft/fast-tooling/dist/css-data.types";
import { renderDefault } from "./control.css.utilities";
import { RenderControlConfig } from "./control.css.utilities.props";
import React from "react";

export interface RenderTypeControlConfig extends RenderControlConfig {
    type: Type;
}

export function renderTypeControl(config: RenderTypeControlConfig): React.ReactNode {
    switch (config.type) {
        case "<an-plus-b>":
        case "<angle-percentage>":
        case "<angle>":
        case "<basic-shape>":
        case "<blend-mode>":
        case "<color>":
        case "<custom-ident>":
        case "<dimension>":
        case "<display-box>":
        case "<display-inside>":
        case "<display-internal>":
        case "<display-legacy>":
        case "<display-listitem>":
        case "<display-outside>":
        case "<filter-function>":
        case "<flex>":
        case "<frequency-percentage>":
        case "<frequency>":
        case "<gradient>":
        case "<ident>":
        case "<image>":
        case "<integer>":
        case "<length-percentage>":
        case "<length>":
        case "<number>":
        case "<percentage>":
        case "<position>":
        case "<ratio>":
        case "<resolution>":
        case "<shape>":
        case "<string>":
        case "<time-percentage>":
        case "<time>":
        case "<timing-function>":
        case "<transform-function>":
        case "<url>":
        default:
            return renderDefault(config);
    }
}
