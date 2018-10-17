import { css } from 'styled-components';
import { breakpoints } from './index'; // this has to be able to be overriden by a custom theme in other projects

// Iterate through the breakpoints and create a media template
const size = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

// Iterate through the orientation options and create a media template
const options = { landscape: 'landscape', portrait: 'portrait' };
const orientation = Object.keys(options).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (orientation: ${options[label]}) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

const media = Object.assign({}, size, orientation);

export default media;