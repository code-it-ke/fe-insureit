import { string, oneOf } from 'prop-types';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.gradient &&
    css`
      background: linear-gradient(
        to top right,
        ${rgba(props.theme.colors.brand1, 0.2)},
        ${rgba(props.theme.colors.brand2, 0.2)}
      );
    `};

  ${(props) =>
    props.gray &&
    css`
      background: rgba(0, 0, 0, 0.15);
    `};

  ${(props) =>
    props.blue &&
    css`
      background: linear-gradient(to bottom right, #221f6d, ${props.theme.colors.background.dark});
    `};

  ${(props) =>
    props.brand1 &&
    css`
      background: ${rgba(props.theme.colors.brand1, 0.9)};
    `};

  ${(props) =>
    props.white &&
    css`
      background-color: ${rgba('#fff', 0.7)};
    `};

  ${(props) =>
    props.dark &&
    css`
      background-color: rgba(0, 0, 0, 0.2);
    `};

  ${(props) =>
    props.blendmode &&
    css`
      background-blend-mode: ${props.blendmode};
    `};

  ${(props) =>
    props.bg &&
    css`
      background: ${props.bg};
    `};
`;

Overlay.propTypes = {
  background: string,
  blendmode: oneOf(['color', 'multiply', 'screen', 'soft-light']),
};

/** @component */
export default Overlay;