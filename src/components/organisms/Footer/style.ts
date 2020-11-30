import styled from 'styled-components';
import { Btn } from 'components';

export const Container = styled.div`
    padding: 30px 0 40px;
    font-size: 12px;
    background: #373737;

    span + span {
        padding: 0 0 0 15px;
    }

    .mb10 {
        margin: 0 0 18px;
    }
`;

export const Detail = styled.div`
    line-height: 18px;
    color: #a0a0a0;
`;

export const Btns = styled(Btn)`
    height: 30px;
    padding: 0 9px;
    font-size: 12px;

    & + & {
        margin: 9px 0 0 8px;
    }
`;

export const Right = styled.div`
    margin: 20px 0 0;
    color: #858585;
`;

export const ProudTxt = styled.div`
    display: inline-block;
    margin: 0 0 0 10px;
    color: #a0a0a0;
`;

export const AuthIcon = styled.div`
    display: inline-block;
    width: 51px;
    height: 39px;
    vertical-align: top;
`;
