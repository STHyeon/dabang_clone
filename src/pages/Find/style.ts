import styled, { css } from 'styled-components';

interface Props {
    setFindRoom?: boolean;
}

export const Container = styled.div`
    width: 100%;
    height: calc(100% - 66px);
`;

export const AddressBox = styled.div`
    border-bottom: 1px solid #cdcdcd;

    input[type='text'] {
        border: 0;
    }
`;

export const FindRoomBox = styled.div<Props>`
    position: absolute;
    z-index: 20;
    width: 512px;
    height: calc(100% - 68px - 70px - 100px);
    border-right: 1px solid #cdcdcd;
    background: #fff;
    transform: translateX(-100%);
    transition: transform 500ms ease-in;

    ${(props) =>
        props.setFindRoom &&
        css`
            transform: translateX(0%);
        `}
`;

export const MapBox = styled.div`
    width: 100%;
    height: 100%;
`;

export const TotalRoom = styled.div`
    height: 57px;
    padding: 0 20px;
    border-bottom: 1px solid #eeeeee;
    font-weight: bold;
    font-size: 14px;
    line-height: 57px;
`;

export const RoomBox = styled.div`
    overflow: scroll;
    height: calc(100% - 56px);
    padding: 20px 20px 0;

    li + li {
        margin: 0 0 30px 20px;

        &:nth-child(2n - 1) {
            margin: 0 0 30px 0;
        }
    }
`;

export const IconBox = styled.div`
    position: absolute;
    top: 50%;
    right: -33px;
    z-index: 10;
    padding: 10px;
    border: 1px solid #cdcdcd;
    border-left: 0;
    background: #fff;
    cursor: pointer;
`;
