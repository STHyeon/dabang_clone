import styled from 'styled-components';
import { Input, Label, Btn } from 'components';
import CheckIcon from 'assets/images/checkmark.svg';

export const ModalOverlay = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
`;

export const ModalInner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 600px;
    width: 90%;
    padding: 50px 35px 40px;
    transform: translate(-50%, -50%);
    background: #fff;
`;

export const ModalTitle = styled.h2`
    margin: 0 0 20px;
    font-size: 25px;
    text-align: center;
`;

export const ModalInput = styled(Input)`
    & + & {
        margin: 10px 0 0;
    }
`;

export const ModalLabel = styled(Label)`
    margin: 0 0 0 10px;
    color: #888888;
`;

export const ModalCheckWrap = styled.div`
    position: relative;
    margin: 18px 0;
    font-size: 14px;
    line-height: 22px;
    text-align: right;

    label {
        display: inline-block;
        position: absolute;
        left: 0;
        margin: 0;

        &::before {
            display: inline-block;
            vertical-align: bottom;
            content: '';
            width: 22px;
            height: 22px;
            margin: 0 10px 0 0;
            border: 1px solid rgb(211, 211, 211);
            border-radius: 3px;
        }
    }

    input[type='checkbox'] {
        width: 1px;
        height: 1px;
        opacity: 0;
        visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;

        &:checked + label::before {
            background: url(${CheckIcon}) #1374f8 no-repeat center center/13px;
        }
    }
`;

export const ModalBtn = styled(Btn)`
    width: 100%;
    height: 60px;
`;

export const ModalAddMem = styled.div`
    padding: 24px 0 40px;
    font-size: 14px;
    text-align: center;

    span {
        color: #1564f9;
    }
`;

export const ModalLinkState = styled.span`
    cursor: pointer;
`;
