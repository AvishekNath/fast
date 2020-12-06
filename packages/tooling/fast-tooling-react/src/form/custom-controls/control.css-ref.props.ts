import {
    CSSPropertySyntax,
    CSSPropertyRef,
} from "@microsoft/fast-tooling/dist/data-utilities/mapping.mdn-data";

export interface CSSRefProps {
    mapsToProperty?: string;
    onChange: (value: string) => void;
    syntax: CSSPropertySyntax | CSSPropertyRef;
}

export interface CSSRefState {
    index: number;
    values: string[];
}
