import { CSSPropertyRef } from "@microsoft/fast-tooling/dist/data-utilities/mapping.mdn-data";

export interface RenderControlConfig {
    handleChange: (value: string) => void;
}

export interface RenderRefControlConfig extends RenderControlConfig {
    ref: CSSPropertyRef;
}
