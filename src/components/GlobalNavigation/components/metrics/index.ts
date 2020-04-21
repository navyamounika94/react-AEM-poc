/**
 * Type definitions for react-metrics objects
 */

export interface PageViewParams {
    events?: string;
    page?: string;
    registration_type?: string;
    section?: string;
    subsection?: string;
}


export interface ReactMetricsHandler {
    // Called when a page is loaded / shown to the user
    pageView: (eventId: string, params: PageViewParams) => void;

    // Called for all other events (button clicks, input)
    // Each event has it's own set of parameters, defined by the analytics requirements of that event.
    track: (eventId: string, params: object) => void;
}

export interface ExposeMetricsProps {
    metrics: ReactMetricsHandler;
}