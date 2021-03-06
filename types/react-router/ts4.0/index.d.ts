import * as React from 'react';
import * as H from 'history';

// This is the type of the context object that will be passed down to all children of
// a `Router` component:
export interface RouterChildContext<Params extends { [K in keyof Params]?: string } = {}> {
    router: {
        history: H.History;
        route: {
            location: H.Location;
            match: match<Params>;
        };
    };
}
export interface MemoryRouterProps {
    children?: React.ReactNode;
    initialEntries?: H.LocationDescriptor[];
    initialIndex?: number;
    getUserConfirmation?: (message: string, callback: (ok: boolean) => void) => void;
    keyLength?: number;
}

export class MemoryRouter extends React.Component<MemoryRouterProps, any> {}

export interface PromptProps {
    message: string | ((location: H.Location, action: H.Action) => string | boolean);
    when?: boolean;
}
export class Prompt extends React.Component<PromptProps, any> {}

export interface RedirectProps {
    to: H.LocationDescriptor;
    push?: boolean;
    from?: string;
    path?: string;
    exact?: boolean;
    strict?: boolean;
}
export class Redirect extends React.Component<RedirectProps, any> {}

export interface StaticContext {
    statusCode?: number;
}

export interface RouteComponentProps<
    Params extends { [K in keyof Params]?: string } = {},
    C extends StaticContext = StaticContext,
    S = H.LocationState
> {
    history: H.History<S>;
    location: H.Location<S>;
    match: match<Params>;
    staticContext?: C;
}

export interface RouteChildrenProps<Params extends { [K in keyof Params]?: string } = {}, S = H.LocationState> {
    history: H.History;
    location: H.Location<S>;
    match: match<Params> | null;
}

export interface RouteProps {
    location?: H.Location;
    component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    render?: (props: RouteComponentProps<any>) => React.ReactNode;
    children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode;
    path?: string | string[];
    exact?: boolean;
    sensitive?: boolean;
    strict?: boolean;
}
export class Route<T extends RouteProps = RouteProps> extends React.Component<T, any> {}

export interface RouterProps {
    children?: React.ReactNode;
    history: H.History;
}
export class Router extends React.Component<RouterProps, any> {}

export interface StaticRouterContext extends StaticContext {
    url?: string;
    action?: 'PUSH' | 'REPLACE';
    location?: object;
}
export interface StaticRouterProps {
    basename?: string;
    children?: React.ReactNode;
    location?: string | object;
    context?: StaticRouterContext;
}

export class StaticRouter extends React.Component<StaticRouterProps, any> {}
export interface SwitchProps {
    children?: React.ReactNode;
    location?: H.Location;
}
export class Switch extends React.Component<SwitchProps, any> {}

export interface match<Params extends { [K in keyof Params]?: string } = {}> {
    params: Params;
    isExact: boolean;
    path: string;
    url: string;
}

// Omit taken from https://github.com/Microsoft/TypeScript/issues/28339#issuecomment-467220238
export type Omit<T, K extends keyof T> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;

export function matchPath<Params extends { [K in keyof Params]?: string }>(
    pathname: string,
    props: string | string[] | RouteProps,
    parent?: match<Params> | null,
): match<Params> | null;

export function generatePath(
    pattern: string,
    params?: { [paramName: string]: string | number | boolean | undefined },
): string;

export type WithRouterProps<C extends React.ComponentType<any>> = C extends React.ComponentClass
    ? { wrappedComponentRef?: React.Ref<InstanceType<C>> }
    : {};

export interface WithRouterStatics<C extends React.ComponentType<any>> {
    WrappedComponent: C;
}

// There is a known issue in TypeScript, which doesn't allow decorators to change the signature of the classes
// they are decorating. Due to this, if you are using @withRouter decorator in your code,
// you will see a bunch of errors from TypeScript. The current workaround is to use withRouter() as a function call
// on a separate line instead of as a decorator.
export function withRouter<P extends RouteComponentProps<any>, C extends React.ComponentType<P>>(
    component: C & React.ComponentType<P>,
): React.ComponentClass<Omit<P, keyof RouteComponentProps<any>> & WithRouterProps<C>> & WithRouterStatics<C>;

export const __RouterContext: React.Context<RouteComponentProps>;

export function useHistory<HistoryLocationState = H.LocationState>(): H.History<HistoryLocationState>;

export function useLocation<S = H.LocationState>(): H.Location<S>;

export function useParams<Params extends { [K in keyof Params]?: string } = {}>(): Params;

export function useRouteMatch<Params extends { [K in keyof Params]?: string } = {}>(): match<Params>;
export function useRouteMatch<Params extends { [K in keyof Params]?: string } = {}>(
    path: string | string[] | RouteProps,
): match<Params> | null;
