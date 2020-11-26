import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: calc(100% - 70px);
`;

export const AddressBox = styled.div`
    border-bottom: 1px solid #cdcdcd;

    input[type='text'] {
        border: 0;
    }
`;

export const FindRoomBox = styled.div`
    position: relative;
    width: 512px;
    height: 100%;
    border-right: 1px solid #cdcdcd;
`;

export const MapBox = styled.div`
    width: calc(100% - 512px);
    height: 100%;
`;

export const TotalRoom = styled.div`
    height: 57px;
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
