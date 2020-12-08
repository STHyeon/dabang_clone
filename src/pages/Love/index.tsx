import React from 'react';
import { BaseTemplate } from '../../templates';
import { GNB, CardGrid } from 'components';
import { LOVEMENU } from 'utils/contents/string';
import { Type02CardData } from 'utils/contents/data';
import * as S from './style';

export function Love() {
    return (
        <BaseTemplate>
            <S.LoveTitle>관심목록</S.LoveTitle>
            <S.List>
                <GNB
                    items={LOVEMENU}
                    GNBType="type02"
                    itemWidth="20%"
                    hoverColor="#000000"
                    fontColor="#888888"
                />
            </S.List>
            <S.AlertBox className="clearfix">
                <S.RecData className="fl_l">
                    총 <S.RecDataNum>1개</S.RecDataNum>의 최근 본 방이 있습니다
                </S.RecData>
                <S.MaxData className="fl_r">최근 본 방은 최대 50개까지 저장됩니다.</S.MaxData>
            </S.AlertBox>
            <S.CardGridBox>
                <CardGrid data={Type02CardData} boxWidth="23.5%" cardImgHeight={186} />
            </S.CardGridBox>
        </BaseTemplate>
    );
}
