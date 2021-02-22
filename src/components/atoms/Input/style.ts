import styled, { css } from 'styled-components';

interface InputProps {
    invalid?: boolean;
    height?: string;
}

export const Input = styled.input<InputProps>`
    height: ${(props) => (props.height ? props.height : '33px')};
    border-radius: 2px;
    background: #ffffff;

    &:focus {
        outline: none;
    }

    &:disabled {
        background: #eeeeee;
    }

    ${(props) =>
        props.invalid &&
        css`
            border: 1px solid red;
        `}
`;
