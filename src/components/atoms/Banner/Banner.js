import styled from 'styled-components';
import { space } from 'styled-system';
import { rgba } from 'polished';

const Banner = styled.div`
    display: ${props => (props.shouldShow ? 'flex' : 'none')};
    align-items: center;
    justify-content: space-between;
    background-color: ${rgba(0,0,0,0.9)};
    bottom: 0;
    position: fixed;
    width: 100%;
    z-index: 1;

    ${space};
`;

/** @component */
export default Banner;
