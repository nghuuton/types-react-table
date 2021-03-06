import * as React from "react";
import {
    ButtonAnchorProps,
    ButtonDefaultProps,
    ButtonIntrinsicProps,
    ButtonCustomComponentProps,
} from '../Button';
import { FCReturn, FCProps, ReactComponentConstructor } from "../../../typings/shared";

declare function SecondaryButton(props: FCProps<ButtonDefaultProps>): FCReturn;
// tslint:disable:unified-signatures breaks certain usages
declare function SecondaryButton(props: FCProps<ButtonAnchorProps>): FCReturn;
declare function SecondaryButton<T extends keyof JSX.IntrinsicElements>(props: FCProps<ButtonIntrinsicProps<T>>): FCReturn;
declare function SecondaryButton<T extends ReactComponentConstructor<never>>(props: FCProps<ButtonCustomComponentProps<T>>): FCReturn;

export default SecondaryButton;
