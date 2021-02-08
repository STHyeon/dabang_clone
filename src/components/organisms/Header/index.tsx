import React, { useState } from 'react';
import logo from 'assets/images/logo.png';
import mene_all from 'assets/images/btn_mene_all.png';
import mene_all_close from 'assets/images/btn_mene_all_close.png';
import * as S from './style';
import { Btn, Img } from 'components';

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
                        <Btn btnType="border_none">
                            <Img src={logo} alt="로고" />
                        </Btn>
                    </S.HeaderWrapper>
                    <S.HeaderWrapper fl_l>
                        <ul>
                            <li>프로중개사 사이트</li>
                            <li>다방허브 사이트</li>
                        </ul>
                    </S.HeaderWrapper>
                </div>
                <S.NavBox>
                    <S.HeaderWrapper fl_r>
                        <ul>
                            <li>방찾기</li>
                            <li>분양</li>
                            <li>관심목록</li>
                            <li>방내놓기</li>
                            <li>알림</li>
                        </ul>
                    </S.HeaderWrapper>
                    <S.HeaderWrapper fl_r>
                        <ul>
                            <li>회원가입 · 로그인</li>
                        </ul>
                    </S.HeaderWrapper>
                </S.NavBox>
            </div>
            <div className="mobile clearfix">
                <div className="fl_l">
                    <Btn btnType="border_none">
                        <Img src={logo} alt="로고" />
                    </Btn>
                </div>
                <div className="fl_r">
                    <Btn btnType="border_none" btnOnClick={handleSide}>
                        <Img src={mene_all} alt="햄버거 메뉴" />
                    </Btn>
                </div>
            </div>

            <S.SideNavBox isSideNav={isSideNav}>
                <S.UserTop>
                    <S.AuthBtn btnType="default">회원가입 · 로그인</S.AuthBtn>
                </S.UserTop>
                <S.MNavBox>
                    <ul>
                        <li>방찾기</li>
                        <li>분양</li>
                        <li>관심목록</li>
                        <li>방내놓기</li>
                        <li>알림</li>
                    </ul>
                </S.MNavBox>
                <S.SideNavClose>
                    <Btn btnType="border_none" btnOnClick={handleSide}>
                        <Img src={mene_all_close} alt="닫기" />
                    </Btn>
                </S.SideNavClose>
            </S.SideNavBox>
        </S.Container>
    );
}
