import React, { useState } from 'react';
import logo from 'assets/images/logo.png';
import mene_all from 'assets/images/btn_mene_all.png';
import mene_all_close from 'assets/images/btn_mene_all_close.png';
import * as S from './style';
import { GNB, ImgBtn } from 'components';
import { HEADER1, HEADER2, HEADER3 } from 'utils/contents/string';

export function Header(): React.ReactElement {
    const [isSideNav, setIsSideNav] = useState<boolean>(false);

    const handleSide = (): void => {
        setIsSideNav(!isSideNav);
    };

    return (
        <S.Container>
            <div className="pc clearfix">
                <div className="fl_l">
                    <S.HeaderWrapper fl_l>
                        <ImgBtn src={logo} alt="로고 사진" />
                    </S.HeaderWrapper>
                    <S.HeaderWrapper fl_l>
                        <GNB GNBType="type01" items={HEADER1} />
                    </S.HeaderWrapper>
                </div>
                <S.NavBox>
                    <S.HeaderWrapper fl_r>
                        <GNB GNBType="type02" items={HEADER2} />
                    </S.HeaderWrapper>
                    <S.HeaderWrapper fl_r>
                        <GNB GNBType="type03" items={HEADER3} />
                    </S.HeaderWrapper>
                </S.NavBox>
            </div>
            <div className="mobile clearfix">
                <div className="fl_l">
                    <ImgBtn src={logo} alt="로고 사진" />
                </div>
                <div className="fl_r">
                    <ImgBtn src={mene_all} alt="햄버거 메뉴" onClick={handleSide} />
                </div>
            </div>

            <S.SideNavBox isSideNav={isSideNav}>
                <S.UserTop>
                    <S.AuthBtn styletype="none">{HEADER3[0]}</S.AuthBtn>
                </S.UserTop>
                <S.MNavBox>
                    <GNB GNBType="none" items={HEADER2} hoverColor="initial" />
                </S.MNavBox>
                <S.SideNavClose>
                    <ImgBtn src={mene_all_close} alt="닫기" onClick={handleSide} />
                </S.SideNavClose>
            </S.SideNavBox>
        </S.Container>
    );
}
