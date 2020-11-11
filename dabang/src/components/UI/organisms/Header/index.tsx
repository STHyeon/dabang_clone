import React from 'react';

import logo from 'assets/images/logo.png';
import * as S from './style';
import { GNBType1, GNBType2, GNBType3, ImgBtn } from 'components/UI';
import { HEADER1, HEADER2, HEADER3 } from 'utils/contents/String';

export function Header(): React.ReactElement {
    return (
        <S.Container className="clearfix">
            <div className="fl_l">
                <S.HeaderWrapper fl_l>
                    <ImgBtn src={logo} alt="로고 사진" />
                </S.HeaderWrapper>
                <S.HeaderWrapper fl_l>
                    <GNBType1 items={HEADER1} />
                </S.HeaderWrapper>
            </div>
            <div className="fl_r">
                <S.HeaderWrapper fl_r>
                    <GNBType2 items={HEADER2} />
                </S.HeaderWrapper>
                <S.HeaderWrapper fl_r>
                    <GNBType3 items={HEADER3} />
                </S.HeaderWrapper>
            </div>
        </S.Container>
    );
}
