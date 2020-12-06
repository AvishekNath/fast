import React from "react";
import styles, { CSSControlClassNameContract } from "./control.css.style";
import { CSSControlProps, CSSControlState } from "./control.css.props";
import manageJss, { ManagedJSSProps } from "@microsoft/fast-jss-manager-react";
import { ManagedClasses } from "@microsoft/fast-components-class-name-contracts-base";
import { classNames } from "@microsoft/fast-web-utilities";
import { properties } from "@microsoft/fast-tooling/dist/css-data";
import {
    CSSProperty,
    CSSPropertiesDictionary,
} from "@microsoft/fast-tooling/dist/data-utilities/mapping.mdn-data";
import { CSSRef } from "./control.css-ref";

/**
 * Custom form control definition
 */
class CSSControl extends React.Component<
    CSSControlProps & ManagedClasses<CSSControlClassNameContract>,
    CSSControlState
> {
    constructor(props: CSSControlProps & ManagedClasses<CSSControlClassNameContract>) {
        super(props);

        this.state = {};
    }

    public render(): React.ReactNode {
        return (
            <div className={classNames(this.props.managedClasses.css)}>
                {this.renderCSSProperties()}
            </div>
        );
    }

    private renderCSSProperties(): React.ReactNode {
        return Object.entries((properties as unknown) as CSSPropertiesDictionary).map(
            ([cssPropertyName, cssProperty]: [string, CSSProperty]): React.ReactNode => {
                return this.renderCSSProperty(cssProperty, cssPropertyName);
            }
        );
    }

    private renderCSSProperty(
        cssProperty: CSSProperty,
        cssPropertyName: string
    ): React.ReactNode {
        if (!cssProperty || !cssProperty.name || !cssProperty.syntax) {
            return null;
        }

        return (
            <fieldset key={cssPropertyName}>
                <label>{cssProperty.name}</label>
                <CSSRef
                    syntax={cssProperty.syntax}
                    onChange={this.handleOnChange(cssPropertyName)}
                    mapsToProperty={cssPropertyName}
                />
            </fieldset>
        );
    }

    private handleOnChange = (propertyName: string): ((value: string) => void) => {
        return (value: string): void => {
            this.setState(
                {
                    [propertyName]: value,
                },
                this.resolveCSS
            );
        };
    };

    private resolveCSS = (): void => {
        this.props.onChange({
            value:
                `${Object.keys(this.state)
                    .reduce((previousValue: string, propertyName: string) => {
                        if (!this.state[propertyName]) {
                            return previousValue;
                        }

                        return `${previousValue} ${propertyName}: ${this.state[propertyName]};`;
                    }, "")
                    .trim()}` || undefined,
        });
    };
}

export { CSSControl };
export default manageJss(styles)(CSSControl);
