import React from 'react';
import * as S from './style';

import { Card } from 'components';
import { CardProps } from '../../molecules/Card';

export interface CardGridProps {
    data?: CardProps[];
}

export function CardGrid({ data }: CardGridProps): React.ReactElement {
    return (
        <>
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
                            <S.GridItem>
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
                                />
                            </S.GridItem>
                        );
                    })}
                </>
            )}
        </>
    );
}
