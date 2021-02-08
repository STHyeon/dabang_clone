import styled, { css } from 'styled-components';
import { Btn } from 'components';

interface Props {
    fl_l?: boolean;
    fl_r?: boolean;
    isSideNav?: boolean;
}

export const Container = styled.div`
    width: 100%;
    height: 70px;
    padding: 0 16px;
    border-bottom: 1px solid #ebebeb;
    line-height: 70px;
`;

export const HeaderWrapper = styled.div<Props>`
    display: inline-block;

    li {
        display: inline-block;

        & + li {
            margin: 0 0 0 20px;
        }
    }

    ${(props) =>
        props.fl_l &&
        css`
            & + div {
                margin: 0 0 0 22px;
            }
        `}

    ${(props) =>
        props.fl_r &&
        css`
            & + div {
                margin: 0 0 0 9.1%;
            }
        `}
`;

export const NavBox = styled.nav`
    float: right;
    width: calc(100% - 400px);
    text-align: right;
`;

export const SideNavBox = styled.div<Props>`
    position: fixed;
    top: 0;
    right: -100%; /* default -100% */
    z-index: 30;
    width: 100%;
    height: 100%;
    background: #fff;
    transition: right 0.25s ease-in;

    ${(props) =>
        props.isSideNav &&
        css`
            right: 0;
        `}
`;

export const UserTop = styled.div`
    padding: 60px 18px 20px;
    background: #1c0883;
`;

export const AuthBtn = styled(Btn)`
    width: 100%;
    height: 44px;
    border: 1px solid #3983fe;
`;

export const MNavBox = styled.nav`
    padding: 0 16px;

    li {
        display: block;
        width: 100%;
        padding: 7px 0;

        & + li {
            border-top: 1px solid #e3e3e3;
        }
    }
`;

export const SideNavClose = styled.div`
    position: absolute;
    top: 10px;
    right: 17px;
    width: 24px;
    height: 25px;
    line-height: 0;
`;
