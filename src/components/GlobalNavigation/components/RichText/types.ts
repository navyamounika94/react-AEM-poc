/**
 * Node objects as used by the react-html-parser library.
 */
export type Node = TagNode | TextNode;

export interface TagNode {
    type: 'tag';
    name: string; // The tag name (e.g. 'a', 'br', 'h1')
    children: Node[];
    attribs: any;
}

export interface TextNode {
    type: 'text';
    data: string;
}