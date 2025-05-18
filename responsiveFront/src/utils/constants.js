// src/utils/constants.js

export const ELEMENTS = [
  { type: 'text', label: 'Text', defaultProps: { text: 'Sample Text' } },
  { type: 'image', label: 'Image', defaultProps: { src: 'https://via.placeholder.com/150' } },
  { type: 'button', label: 'Button', defaultProps: { text: 'Click Me', href: '#' } },
];

export const LAYOUTS = {
  DEFAULT: 'default',
  TWO_COLUMN: 'two-column',
  HEADER_CONTENT_FOOTER: 'header-content-footer',
};
