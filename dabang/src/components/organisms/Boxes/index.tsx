import React from 'react';

import * as S from './style';
import { FormInput } from 'components';
import { CardProps } from '../../molecules/Card';

export interface BoxesProps extends CardProps {
    BoxesType?: string; // 박스 유형 선택
    to?: string; // 이동 페이지
    ListText?: string;
    StrongListText?: string;
    ListDescription?: string;
    title?: string | number; // 제목
    description1?: string; // 상세설명1
    description2?: string; // 상세설명2
    room?: string; // 건물유형
    roomInfo?: string; // 건물 추가 정보
    Generation?: number; // 세대수
    FlagValid?: boolean; // 태그광고 on/off
    Flag?: string; // 태그내용
    ableRoom?: number; // 거래가능한 방 개수
    complexData?: boolean; // 단지정보 on/off
    imgSrc?: string; // 이미지 주소
    alt?: string; // 이미지 설명
    chkDate?: Date; // 확인 날짜
    address?: string; // 상품 주소
    price?: string; // 상품 가격
}

export function Boxes({
    BoxesType,
    ListText,
    StrongListText,
    ListDescription
}: BoxesProps): React.ReactElement {
    return (
        <S.Container>
            {BoxesType === 'type01' && (
                <>
                    <S.MainText>
                        <S.MainStrongText>어떤 동네, 어떤 방</S.MainStrongText>에서
                        <br />
                        살고 싶으신가요?
                    </S.MainText>

                    <FormInput
                        FormInputType="type02"
                        btnText="방 찾기"
                        styletype="secondary"
                        description="검색어를 입력해주세요."
                        inputHeight="58px"
                        bgIcon
                    />
                </>
            )}

            {BoxesType === 'type02' && (
                <>
                    <S.ListText type01>
                        {ListText} <S.SideMainText>{StrongListText}</S.SideMainText>
                    </S.ListText>
                    <S.ListText type02>{ListDescription}</S.ListText>
                </>
            )}
        </S.Container>
    );
}
