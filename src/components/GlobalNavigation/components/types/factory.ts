import { JSSImage, JSSLink, JSSRichText, JSSText, JSSVideo } from '../types';

export const RichText = (value: string): JSSRichText => ({ value });

export const Text = (value: string): JSSText => ({ value });

export const Link = (href: string, linktype: 'internal' | 'external'): JSSLink => ({
    value: {
        href,
        linktype,
    }
});

export const Image = (src: string, alt: string = ''): JSSImage => ({
    value: {
        alt,
        src,
    }
});

export const Video = (src: string, extension: string = 'mp4', mimeType: string = 'mp4'): JSSVideo => ({
    value: {
        extension,
        mimeType,
        src,
    }
});