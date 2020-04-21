export interface JSSText {
    value: string;
}

export interface JSSRichText {
    value: string;
}

export interface JSSLink {
    value: {
        href: string;
        anchor?: string;
        class?: string;
        id?: string;
        linktype?: 'internal' | 'external';
        querystring?: string;
        text?: string;
        title?: string;
    };
}

export interface JSSImage {
    value: {
        alt?: string;
        src: string;
        height?: string;
        width?: string;


        // Sometimes Sitecore images come with style attributes.
        // In 99% of all cases, these inline styles are removed at runtime.
        style?: React.StyleHTMLAttributes<HTMLImageElement>;
        // Identify if it is Vizualiser image of nav image
        isVizImg?: boolean;
    };
}

export interface JSSVideo {
    value: {
        description?: string;
        displayName?: string;
        extension: string;
        keyworks?: string;
        mimeType: string;
        name?: string;
        size?: string;
        src: string;
        title?: string;
    };
}

export interface JSSBoolean {
    value: boolean;
}

export interface SitecoreField {
    // tslint:disable-next-line: max-union-size
    jss: JSSLink | JSSText | JSSImage | JSSVideo | JSSRichText | JSSBoolean;
}

export const isSitecoreField = (d: any): d is SitecoreField => (d.jss !== undefined && d.jss.value !== undefined);

export interface SitecoreLink {
    jss: JSSLink;
}

export interface SitecoreTextField {
    jss: JSSText;
}

export interface SitecoreImage {
    jss: JSSImage;
}

export interface SitecoreVideo {
    jss: JSSVideo;
}

export interface SitecoreRichText {
     jss: JSSRichText;
}

export interface SitecoreBoolean {
    jss: JSSBoolean;
}

export interface FormValidationRule {
    fields: {
        message: JSSText;
        regEx: JSSText;
        id: string;
        name: string;
    };
}