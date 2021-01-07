import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IconProps {
    iconSize?: string;
}

export const Icon = styled(FontAwesomeIcon)<IconProps>`
    font-size: ${(props) => (props.iconSize ? props.iconSize : '16px')};
`;
