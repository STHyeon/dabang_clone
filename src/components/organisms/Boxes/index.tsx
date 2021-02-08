import React from 'react';

import * as S from './style';

import { CardProps } from '../../molecules/Card';

export interface BoxesProps extends CardProps {
    BoxesType?: string; // 박스 유형 선택
    ListText?: string;
    StrongListText?: string;
    ListDescription?: string;
}

export function Boxes({ BoxesType, ListText, StrongListText, ListDescription }: BoxesProps): React.ReactElement {
    return (
        <S.Container>
            {BoxesType === 'type01' && (
                <>
                    <S.MainText>
                        <S.MainStrongText>어떤 동네, 어떤 방</S.MainStrongText>에서
                        <br />
                        살고 싶으신가요?
                    </S.MainText>

                    <S.MainSearchInput inputTitle="검색어 입력" placeholder="검색어를 입력해주세요." buttonContent="방 찾기" />
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
