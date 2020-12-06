import React from "react";
import {
    RenderControlConfig,
    RenderRefControlConfig,
} from "./control.css.utilities.props";

function getTextInputChangeHandler(
    parentChangeHandler: (value: string) => void
): (e: React.ChangeEvent<HTMLInputElement>) => void {
    let timer: null | NodeJS.Timer = null;

    const handleCheck = (newValue: string) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            parentChangeHandler(newValue);
        }, 500);
    };

    return (e: React.ChangeEvent<HTMLInputElement>) => {
        handleCheck(e.currentTarget.value);
    };
}

export function renderDefault(config: RenderControlConfig): React.ReactNode {
    return (
        <input type={"text"} onChange={getTextInputChangeHandler(config.handleChange)} />
    );
}

function getCheckboxInputChangeHandler(
    parentChangeHandler: (value: string) => void,
    value: string
): (e: React.ChangeEvent<HTMLInputElement>) => void {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
        parentChangeHandler(e.currentTarget.checked ? value : "");
    };
}

export function renderZeroOrOne(config: RenderRefControlConfig): React.ReactNode {
    return (
        <React.Fragment>
            <label>{config.ref.ref}</label>
            <input
                type={"checkbox"}
                onChange={getCheckboxInputChangeHandler(
                    config.handleChange,
                    config.ref.ref as string
                )}
            />
        </React.Fragment>
    );
}
