import React from 'react';
import Slider from 'react-slick';
import * as S from './style';
import { setSlick } from 'utils/settings/setSlick';
import { Card } from 'components';
import { CardProps } from '../../molecules/Card';

import { RECENTLYROOMTEXT, RECENTLYCOMPLEXTEXT } from 'utils/contents/string';

export interface SlickProps {
    data?: CardProps[]; // 카드 데이터
    boxWidth?: string; // 카드 크기
    cardImgHeight?: string; // 카드 이미지 크기
    cardGroup?: string; // 방/단지 구분
    slidesToScroll?: number; // 슬라이드 보여줄 수
    slidesToShow?: number; // 슬라이드 넘길 수
}

export function Slick({
    data,
    boxWidth,
    cardGroup,
    cardImgHeight,
    slidesToScroll = 4,
    slidesToShow = 4
}: SlickProps): React.ReactElement {
    if (slidesToScroll || slidesToShow) {
        setSlick.slidesToScroll = slidesToScroll;
        setSlick.slidesToShow = slidesToShow;
    }

    return (
        <S.GridItem boxWidth={boxWidth}>
            {data && (
                <Slider {...setSlick}>
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
                    {cardGroup === 'room' && (
                        <Card CardType="type05" to="/" noneTitle={RECENTLYROOMTEXT} />
                    )}
                    {cardGroup === 'complex' && (
                        <Card CardType="type05" to="/" noneTitle={RECENTLYCOMPLEXTEXT} />
                    )}
                </Slider>
            )}
        </S.GridItem>
    );
}
