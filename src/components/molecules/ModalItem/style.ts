import styled from 'styled-components';
import { Input, Label, Btn } from 'components';
import CheckIcon from 'assets/images/checkmark.svg';
import CheckOff from 'assets/images/checkoff.svg';
import CheckOn from 'assets/images/checkon.svg';

export const ModalCommonTitle = styled.h2`
    /* height: 80px; */
    margin: 0 0 30px;
    padding: 0 0 15px;
    border-bottom: 1px solid #ebebeb;
    font-size: 22px;
    /* line-height: 80px; */
`;

export const ModalLoginTitle = styled.h2`
    margin: 0 0 20px;
    font-size: 25px;
    text-align: center;
`;

export const ModalInput = styled(Input)`
    height: 46px;

    & + & {
        margin: 10px 0 0;
    }
`;

export const ModalLabel = styled(Label)`
    margin: 0 0 0 10px;
    color: #888888;
`;

export const ModalLoginCheckWrap = styled.div`
    position: relative;
    margin: 18px 0;
    font-size: 14px;
    line-height: 22px;

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

    label {
        display: inline-block;

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

    span {
        position: absolute;
        right: 0;
        margin: 0;
    }
`;

export const ModalCommonWrap = styled.div`
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

export const ModalAgreeWrap = styled(ModalCommonWrap)`
    width: 150px;
    margin: 0 auto;
`;

export const ModalInputWrap = styled.div`
    &::after {
        display: block;
        content: '';
        clear: both;
    }

    & + & {
        margin: 20px 0 0;
    }
`;

export const ModalRegisterLabel = styled(Label)`
    float: left;
    width: 100px;
    margin: 0;
    font-size: 15px;
    line-height: 46px;
    cursor: default;
`;

export const ModalRegisterInput = styled(Input)`
    float: left;
    width: calc(100% - 100px);
    height: 46px;
`;

export const ModalRegisterEmail = styled(Input)`
    width: 128px;
`;

export const ModalEmailAt = styled.span`
    display: inline-block;
    width: 25px;
    text-align: center;
`;

export const ModalEmailTail = styled.select`
    width: calc(100% - 25px - 100px - 128px);
    height: 46px;
    border: 1px solid #dddfe1;
`;

export const ModalTelInput = styled(Input)`
    width: 92px;
    height: 46px;
`;

export const ModalTelInputCheck = styled(Input)`
    width: 320px;
    height: 46px;
    margin: 0 0 0 100px;
`;

export const ModalTelAt = styled.span`
    display: inline-block;
    width: 22px;
    text-align: center;
`;

export const ModalTelConfirm = styled(Btn)`
    /* width: calc(100% - 100px - 44px - 276px - 10px); */
    width: calc(100% - 100px - 320px - 10px);
    height: 46px;
    margin: 0 0 0 10px;
    padding: 0 10px;
`;

export const TermsTxt = styled(Label)`
    display: block;
    position: relative;
    width: 100%;
    height: 30px;
    margin: 30px 0 6px;
    line-height: 30px;
    color: #000000;
    cursor: default;

    &::after {
        display: block;
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 30px;
        height: 30px;
        background: url(${CheckOff}) no-repeat;
    }

    input[type='checkbox']:checked + &::after {
        background: url(${CheckOn}) no-repeat;
    }
`;

export const TermsRequired = styled.span`
    color: #1564f9;
`;

export const ModalBtn = styled(Btn)`
    width: 100%;
    height: 60px;
    margin: 10px 0 0;
`;

export const ModalAddMem = styled.div`
    padding: 24px 0 0;
    font-size: 14px;
    text-align: center;

    span {
        color: #1564f9;
    }
`;

export const ModalLinkState = styled.span`
    cursor: pointer;
`;

export const ModalTermWrap = styled.div`
    /* margin: 0 0 30px; */
`;

export const ModalTermContent = styled.div`
    overflow-y: auto;
    width: 100%;
    height: 120px;
    padding: 15px;
    background: #eee;

    pre {
        font-size: 13px;
        color: #212121;
        white-space: pre-wrap;
    }
`;
