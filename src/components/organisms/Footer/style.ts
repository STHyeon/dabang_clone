import styled from 'styled-components';
import { Btn } from 'components';

export const Container = styled.div`
    padding: 30px 16px 40px;
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

    > div,
    span {
        font-size: 12px;
    }
`;

export const Btns = styled(Btn)`
    width: auto;
    height: 30px;
    margin: 9px 0 0;
    padding: 0 9px;
    border-radius: 2px;
    font-size: 12px;
    line-height: 30px;
    background: rgb(81, 81, 81);
    color: rgb(204, 204, 204);

    & + & {
        margin: 9px 0 0 8px;
    }
`;

export const Right = styled.div`
    margin: 20px 0 0;
    font-size: 12px;
    color: #858585;
`;

export const ProudTxt = styled.div`
    display: inline-block;
    margin: 0 0 0 10px;
    padding: 6px 0 0;
    color: #a0a0a0;
`;

export const AuthIcon = styled.div`
    display: inline-block;
    width: 51px;
    height: 39px;
    vertical-align: top;
`;

export const DetailBox = styled.div`
    float: left;
`;

export const Certify = styled.div`
    float: right;
    margin: 10px 0 0;
    font-size: 12px;
`;
