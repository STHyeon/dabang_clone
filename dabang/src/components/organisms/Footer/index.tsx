import React from 'react';

import * as S from './style';
import { Img } from 'components/atoms/Img';
import KS from 'assets/images/k55qi.png';
import { FOOTERDETAIL, PROUDTXT, Footer1 } from 'utils/contents/String';

export function Footer(): React.ReactElement {
    return (
        <S.Container>
            <div className="inner clearfix">
                <div className="fl_l">
                    <S.Detail dangerouslySetInnerHTML={{ __html: FOOTERDETAIL }}></S.Detail>
                    <S.Btns styletype="gray">자주 묻는 질문</S.Btns>
                    <S.Btns styletype="gray">1:1 문의</S.Btns>
                    <S.Right>Station3, Inc. All rights reserved.</S.Right>
                </div>
                <div className="fl_r">
                    <div>
                        <S.AuthIcon>
                            <Img src={KS} alt="아이콘" />
                        </S.AuthIcon>
                        <S.ProudTxt dangerouslySetInnerHTML={{ __html: PROUDTXT }}></S.ProudTxt>
                    </div>
                </div>
            </div>
        </S.Container>
    );
}
