import styled, { css } from 'styled-components';

import { Input, Btn, Icon } from 'components';

interface Props {
    invalid?: boolean;
    bgIcon?: boolean;
    type01?: boolean;
    type02?: boolean;
}

export const FormInputContainer = styled.div``;

export const FormInput = styled(Input)<Props>`
    width: calc(100% - 97px - 5px);
    height: 42px;
    border: 0;

    ${(props) =>
        props.type02 &&
        css`
            width: calc(100% - 51px - 97px - 5px);
        `}
`;

export const FormBtn = styled(Btn)<Props>`
    ${(props) =>
        props.type02 &&
        css`
            width: 97px;
            height: 34px;
            border-radius: 2px;
            line-height: 1.1;
        `}
`;

export const FormCaption = styled.div<Props>`
    margin: 0.3rem 0;
    font-size: 12px;
    color: red;
`;

export const IncludeBtn = styled.div<Props>`
    position: relative;
    height: 44px;
    border: 1px solid #d0d2d6;
`;

export const IconWrapper = styled(Icon)`
    display: inline-block;
    /* width: 18px; */
    height: 18px;
    /* margin: 0 0 0 16px; */
    padding: 0 16px;
    border-right: 1px solid #d0d2d6;
`;
