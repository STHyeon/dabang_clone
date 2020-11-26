import React from 'react';

import logo from 'assets/images/logo.png';
import * as S from './style';
import { GNB, ImgBtn } from 'components';
import { HEADER1, HEADER2, HEADER3 } from 'utils/contents/string';

export function Header(): React.ReactElement {
    return (
        <S.Container className="clearfix">
            <div className="fl_l">
                <S.HeaderWrapper fl_l>
                    <ImgBtn src={logo} alt="로고 사진" />
                </S.HeaderWrapper>
                <S.HeaderWrapper fl_l>
                    <GNB GNBType="type01" items={HEADER1} />
                </S.HeaderWrapper>
            </div>
            <div className="fl_r">
                <S.HeaderWrapper fl_r>
                    <GNB GNBType="type02" items={HEADER2} />
                </S.HeaderWrapper>
                <S.HeaderWrapper fl_r>
                    <GNB GNBType="type03" items={HEADER3} />
                </S.HeaderWrapper>
            </div>
        </S.Container>
    );
}
