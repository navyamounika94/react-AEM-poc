import * as React from 'react';
import ReactAI from 'react-appinsights';

export interface SafePureComponentState {
    hasError?: boolean;
}

/**
 * A generic React superclass that wraps the render method in a try-catch, which will prevent any client-side runtime errors
 * from breaking the entire page.
 *
 * When extending this class, subclasses should implement safeRender() instead of render(), and can optionally implement renderErrorView()
 * Anywhere in the subclass, this.state.hasError can be set to true, which will force rendering of the error view.
 */
export abstract class SafePureComponent<P, S extends SafePureComponentState> extends React.PureComponent<P, S> {
    protected abstract componentName: string;
    private hasError: boolean = false;

    public componentDidMount() {
        this.setState({ hasError: this.hasError });
    }

    public render() {
        // componentDidCatch doesn't work in React 16's renderToString
        // https://github.com/facebook/react/issues/10442
        // Due to streaming nature of renderToString in React 16, need to wrap each render method in try/catch
        try {
            // Using error boundaries for client-side rendering
            if (this.state && this.state.hasError) {
                return this.renderErrorView();
            }

            return this.safeRender();
        } catch (error) {
            console.error(error);
            // this allows to differentiate server vs client rendering
            if (typeof window !== 'undefined') {
                // used to avoid side-effects via setState()
                this.hasError = true;
                console.error('Error inside', this.componentName, 'is', error);

                const ai: any = ReactAI.ai();
                ai.trackException(`LDNG: Exception in ${this.componentName}: ` + error);
            }

            return this.renderErrorView();
        }
    }

    // this method should be overridden in nested classes
    protected safeRender(): React.ReactNode {
        return null;
    }

    protected renderErrorView(): React.ReactNode {
        return null;
    }
}
