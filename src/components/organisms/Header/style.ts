import styled, { css } from 'styled-components';
import { device } from 'utils/style/media';
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

    @media ${device.mb} {
        height: 44px;
        padding: 0 16px;
        line-height: 44px;

        .fl_l img {
            width: 50px;
        }

        .fl_r img {
            width: 24px;
        }
    }
`;

export const HeaderWrapper = styled.div<Props>`
    display: inline-block;

    li {
        display: inline-block;
    }

    ${(props) =>
        props.fl_l &&
        css`
            & + div {
                margin: 0 0 0 22px;

                @media ${device.pc} {
                    margin: 0;

                    span {
                        padding: 0 6px 0 8px;
                        font-size: 12px;
                    }
                }
            }
        `}

    ${(props) =>
        props.fl_r &&
        css`
            & + div {
                margin: 0 0 0 9.1%;

                @media ${device.pc} {
                    margin: 0 0 0 4%;
                }
            }

            @media ${device.pc} {
                span {
                    padding: 0 8px;
                    font-size: 12px;
                }
            }
        `}
`;

export const NavBox = styled.nav`
    float: right;
    width: calc(100% - 400px);
    text-align: right;

    @media ${device.pc} {
        width: calc(100% - 275px);
    }
`;

export const SideNavBox = styled.div<Props>`
    position: fixed;
    top: 0;
    right: -100%; /* default -100% */
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
