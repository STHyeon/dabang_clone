import styled from 'styled-components';

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
