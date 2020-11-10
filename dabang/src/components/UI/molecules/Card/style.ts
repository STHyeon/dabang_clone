import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
    imgHeight?: string;
    FlagValid?: boolean;
    type1?: boolean;
    type2?: boolean;
    type3?: boolean;
    type4?: boolean;
    styleroom?: boolean;
}

export const CardWrapper = styled.div<Props>`
    position: relative;

    ${(props) =>
        props.type1 &&
        css`
            width: 580px;
        `}

    ${(props) =>
        props.type2 &&
        css`
            width: 216px;
        `}

    ${(props) =>
        props.type3 &&
        css`
            width: 280px;
        `}

    ${(props) =>
        props.type4 &&
        css`
            width: 185px;
        `}
`;

export const SubWrapper = styled.div<Props>`
    ${(props) =>
        props.type2 &&
        css`
            padding: 0 0 30px;
        `}
    
    ${(props) =>
        props.type3 &&
        css`
            padding: 0 0 15px;
        `}

    ${(props) =>
        props.type4 &&
        css`
            padding: 10px 14px;
            border: 1px solid #eeeeee;
        `}
`;

export const LinkWrapper = styled(Link)``;

export const ImgWrapper = styled.div<Props>`
    width: 100%;
    height: ${(props) => props.imgHeight};
    border-radius: 10px 10px 0 0;
    font-size: 0;

    ${(props) =>
        props.type1 &&
        css`
            border-radius: 0;
        `}
`;

export const FlagWrapper = styled.div`
    margin: 10px 0 0;
`;

export const Flag = styled.div<Props>`
    display: inline-block;
    margin: 0 5px 0 0;
    padding: 0 5px;
    border: 1px solid #326cf9;
    border-radius: 3px;
    font-size: 11px;
    color: #326cf9;

    ${(props) =>
        props.FlagValid &&
        css`
            border-color: #cdaf84;
            color: #fff;
            background: #cdaf84;
        `}
`;

export const RoomInfoWrapper = styled.div<Props>`
    display: inline-block;
    font-size: 14px;
    color: #787878;

    ${(props) =>
        props.styleroom &&
        css`
            color: #000000;
        `}
`;

export const DetailWrapper = styled.div<Props>`
    font-size: 14px;
    color: #666666;

    ${(props) =>
        props.type4 &&
        css`
            font-size: 15px;
            color: #444444;
        `}
`;

export const AndWrapper = styled.span`
    display: inline-block;
    padding: 0 5px;
`;

export const TitleWrapper = styled.div<Props>`
    ${(props) =>
        props.type1 &&
        css`
            position: absolute;
            left: 20px;
            bottom: 28px;
            font-size: 26px;
            color: #ffffff;
        `}

    ${(props) =>
        (props.type2 || props.type3) &&
        css`
            margin: 0 0 6px;
            font-size: 18px;
        `}

    ${(props) =>
        (props.type1 || props.type2) &&
        css`
            font-weight: bold;
        `}
`;

export const InfoListWrapper = styled.div`
    position: relative;
    padding: 5px 0;
    border-bottom: 1px solid #d8d8d8;

    &:first-of-type {
        border-top: 1px solid #d8d8d8;
    }
`;

export const InfoDataWrapper = styled.div`
    position: absolute;
    top: 5px;
    right: 0;
    line-height: 1.1;
`;

export const AddressWrapper = styled.div`
    font-size: 14px;
    color: #dedede;
`;

// export const Wrapper = styled.div``;
