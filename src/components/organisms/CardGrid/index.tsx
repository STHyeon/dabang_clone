import React from 'react';
import * as S from './style';

import { Card } from 'components';
import { CardProps } from '../../molecules/Card';

import { RECENTLYROOMTEXT, RECENTLYCOMPLEXTEXT } from 'utils/contents/string';

export interface CardGridProps {
    data?: CardProps[]; // 카드 데이터
    boxWidth?: string; // 카드 크기
    cardImgHeight?: number; // 카드 이미지 크기
    cardGroup?: string; // 방/단지 구분
}

export function CardGrid({
    data,
    boxWidth,
    cardGroup,
    cardImgHeight
}: CardGridProps): React.ReactElement {
    return (
        <S.GridItem boxWidth={boxWidth}>
            {data && (
                <>
                    {data.map((CardData: CardProps, index: number) => {
                        const {
                            CardType,
                            to,
                            title,
                            chkDate,
                            description1,
                            description2,
                            address,
                            room,
                            roomInfo,
                            FlagValid,
                            Flag,
                            imgSrc,
                            alt,
                            complexData,
                            ableRoom
                        } = CardData;
                        return (
                            <Card
                                key={index}
                                CardType={CardType}
                                to={to}
                                title={title}
                                chkDate={chkDate}
                                description1={description1}
                                description2={description2}
                                address={address}
                                room={room}
                                roomInfo={roomInfo}
                                FlagValid={FlagValid}
                                Flag={Flag}
                                imgSrc={imgSrc}
                                alt={alt}
                                complexData={complexData}
                                ableRoom={ableRoom}
                                cardImgHeight={cardImgHeight}
                            />
                        );
                    })}
                </>
            )}
            {cardGroup === 'room' && <Card CardType="type05" to="/" noneTitle={RECENTLYROOMTEXT} />}
            {cardGroup === 'complex' && (
                <Card CardType="type05" to="/" noneTitle={RECENTLYCOMPLEXTEXT} />
            )}
        </S.GridItem>
    );
}
