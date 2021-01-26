import styled from 'styled-components';
import { Input, Btn, Img, Label } from 'components';

interface Props {
    invalid?: boolean;
}

export const FormInputContainer = styled.div`
    position: relative;
`;

export const FormLabel = styled(Label)``;

export const FormInput = styled(Input)<Props>`
    width: 100%;
    border: 0;
`;

export const FormBtn = styled(Btn)<Props>`
    position: absolute;
    right: 0;
    width: 35px;
    max-height: 35px;
    height: 100%;
`;

export const FormCaption = styled.div<Props>`
    margin: 0.3rem 0;
    font-size: 12px;
    color: red;
`;

export const SearchIcon = styled(Img)`
    width: 100%;
    height: 100%;
`;
