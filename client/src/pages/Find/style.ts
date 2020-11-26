import styled, { css } from 'styled-components';

export const AddressBox = styled.div`
    border-bottom: 1px solid #cdcdcd;

    input[type='text'] {
        border: 0;
    }
`;

export const FindRoomBox = styled.div`
    width: 512px;
    padding: 0 30px;
`;

export const MapBox = styled.div`
    width: calc(100% - 512px);
`;

export const TotalRoom = styled.div`
    height: 57px;
    border-bottom: 1px solid #eeeeee;
    font-weight: bold;
    font-size: 14px;
    line-height: 57px;
`;
