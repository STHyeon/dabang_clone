import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    IconSize?: string;
}

export const IconStyle = styled(FontAwesomeIcon)<Props>`
    font-size: ${(props) => props.IconSize};
`;
