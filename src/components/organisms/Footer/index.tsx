import React from 'react';

import * as S from './style';
import { Img } from 'components/atoms/Img';
import KS from 'assets/images/k55qi.png';

export function Footer(): React.ReactElement {
    return (
        <S.Container className="inner clearfix">
            <S.DetailBox>
                <S.Detail>
                    <div>(주)스테이션</div>
                    <div>대표: 한유순, 유형석</div>
                    <div>
                        <span>사업자 번호: 220-88-59156</span>
                        <span>통신판매업신고번호: 88제2013-서울 강남-02884호</span>
                    </div>
                    <div className="mb10">주소 : 서울시 서초구 서초대로 301 동익 성봉빌딩 10층 (주)스테이션3</div>
                    <div>
                        <span>고객센터: 02-1899-6840</span>
                        <span>(평일 10:00 ~ 18:30 토•일요일, 공휴일 휴무)</span>
                    </div>
                    <div>
                        <span>팩스 : 02-554-9774</span>
                        <span>프로모션/사업 제휴문의 : biz@station3.co.kr</span>
                        <span>허위매물 신고 : clean@dabangapp.com</span>
                    </div>
                </S.Detail>

                <S.Btns btnType="border_none">자주 묻는 질문</S.Btns>
                <S.Btns btnType="border_none">1:1 문의</S.Btns>
                <S.Right>Station3, Inc. All rights reserved.</S.Right>
            </S.DetailBox>
            <S.Certify>
                <S.AuthIcon>
                    <Img src={KS} alt="아이콘" />
                </S.AuthIcon>
                <S.ProudTxt>
                    다방, 2019년 한국서비스품질지수
                    <br />
                    부동산 중개 앱 1위 선정
                </S.ProudTxt>
            </S.Certify>
        </S.Container>
    );
}
