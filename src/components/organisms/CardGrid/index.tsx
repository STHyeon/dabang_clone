import React from 'react';
import * as S from './style';

import { Card } from 'components';
import { CardProps } from '../../molecules/Card';

export interface CardGridProps {
    data?: CardProps[]; // 카드 데이터
    boxWidth?: string; // 카드 크기
    cardImgHeight?: string; // 카드 이미지 크기
    cardGroup?: string; // 방/단지 구분
}

export function CardGrid({ data, boxWidth, cardGroup, cardImgHeight }: CardGridProps): React.ReactElement {
    return (
        <S.GridItem boxWidth={boxWidth}>
            {data && (
                <>
                    {data.map((CardData: CardProps, index: number) => {
                        return <Card {...CardData} />;
                    })}
                </>
            )}
            {cardGroup === 'room' && <Card CardType="type05" to="/" noneTitle="최근 본 지역의 다른 방을 찾아보세요" />}
            {cardGroup === 'complex' && <Card CardType="type05" to="/" noneTitle="최근 본 지역의 다른 단지를 찾아보세요" />}
        </S.GridItem>
    );
}
