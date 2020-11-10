import React from 'react';

import * as S from './style';
import { Img, Icon, EventDate1, EventDate2 } from 'components/UI';
import TestImg from 'assets/images/test.png';
import TabIcon from 'assets/images/tab.svg';

export interface CardProps {
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
    to: string; // 이동 페이지
    imgSrc?: string; // 이미지 주소
    chkDate?: Date; // 확인 날짜
    address?: string; // 상품 주소
    price?: string; // 상품 가격
}

export function Card1({
    to,
    title,
    chkDate,
    room,
    description1,
    description2,
    address,
    imgSrc
}: CardProps): React.ReactElement {
    return (
        <S.CardWrapper type1>
            <S.LinkWrapper to={to}>
                <S.ImgWrapper type1>
                    <Img src={TestImg} alt="테스트 이미지" />
                </S.ImgWrapper>

                {title && (
                    <S.TitleWrapper type1>
                        {address && <S.AddressWrapper>{address}</S.AddressWrapper>}
                        {title}
                    </S.TitleWrapper>
                )}

                {(description1 || description2) && (
                    <S.SubWrapper>
                        {description1 && <S.DetailWrapper>{description1}</S.DetailWrapper>}
                        {description2 && <S.DetailWrapper> {description2}</S.DetailWrapper>}
                    </S.SubWrapper>
                )}
            </S.LinkWrapper>
        </S.CardWrapper>
    );
}

export function Card2({
    title,
    description1,
    description2,
    room,
    roomInfo,
    FlagValid,
    Flag,
    to,
    chkDate,
    imgSrc
}: CardProps): React.ReactElement {
    return (
        <S.CardWrapper type2>
            <S.LinkWrapper to={to}>
                <S.ImgWrapper>
                    <Img src={TestImg} alt="테스트 이미지" />
                </S.ImgWrapper>

                {(FlagValid || Flag) && (
                    <S.FlagWrapper>
                        {FlagValid && <S.Flag FlagValid>플러스+</S.Flag>}
                        {Flag && (
                            <S.Flag>
                                {Flag} {chkDate && <EventDate1 dateAt={chkDate} />}
                            </S.Flag>
                        )}
                    </S.FlagWrapper>
                )}

                {(room || roomInfo) && (
                    <>
                        {room && <S.RoomInfoWrapper styleroom>{room}</S.RoomInfoWrapper>}
                        {roomInfo && (
                            <S.RoomInfoWrapper>
                                <S.AndWrapper>·</S.AndWrapper>
                                {roomInfo}
                            </S.RoomInfoWrapper>
                        )}
                    </>
                )}

                {title && <S.TitleWrapper type2>{title}</S.TitleWrapper>}

                {(description1 || description2) && (
                    <S.SubWrapper type2>
                        {description1 && <S.DetailWrapper>{description1}</S.DetailWrapper>}
                        {description2 && <S.DetailWrapper> {description2}</S.DetailWrapper>}
                    </S.SubWrapper>
                )}
            </S.LinkWrapper>
        </S.CardWrapper>
    );
}

export function Card3({
    to,
    title,
    room,
    roomInfo,
    description1,
    description2,
    imgSrc,
    chkDate,
    complexData,
    ableRoom
}: CardProps): React.ReactElement {
    return (
        <S.CardWrapper type3>
            <S.LinkWrapper to={to}>
                <S.ImgWrapper>
                    <Img src={TestImg} alt="테스트 이미지" />
                </S.ImgWrapper>

                {title && <S.TitleWrapper type3>{title}</S.TitleWrapper>}

                {(room || roomInfo) && (
                    <>
                        {room && <S.RoomInfoWrapper styleroom>{room}</S.RoomInfoWrapper>}
                        {roomInfo && (
                            <S.RoomInfoWrapper>
                                <S.AndWrapper>·</S.AndWrapper>
                                {roomInfo}
                            </S.RoomInfoWrapper>
                        )}
                        {chkDate && (
                            <S.RoomInfoWrapper>
                                <S.AndWrapper>·</S.AndWrapper>
                                <EventDate2 dateAt={chkDate} />
                            </S.RoomInfoWrapper>
                        )}
                    </>
                )}

                {(description1 || description2) && (
                    <S.SubWrapper type3>
                        {description1 && <S.DetailWrapper>{description1}</S.DetailWrapper>}
                        {description2 && <S.DetailWrapper> {description2}</S.DetailWrapper>}
                    </S.SubWrapper>
                )}

                {(complexData || ableRoom) && (
                    <div>
                        {ableRoom && (
                            <S.InfoListWrapper>
                                거래가능한 방<S.InfoDataWrapper>{ableRoom} 개</S.InfoDataWrapper>
                            </S.InfoListWrapper>
                        )}
                        {complexData && (
                            <S.InfoListWrapper>
                                단지 정보
                                <S.InfoDataWrapper>
                                    <Icon src={TabIcon} alt="탭 아이콘" height="18px" />
                                </S.InfoDataWrapper>
                            </S.InfoListWrapper>
                        )}
                    </div>
                )}
            </S.LinkWrapper>
        </S.CardWrapper>
    );
}

export function Card4({ to, description1, description2, imgSrc }: CardProps): React.ReactElement {
    return (
        <S.CardWrapper type4>
            <S.LinkWrapper to={to}>
                <S.ImgWrapper>
                    <Img src={TestImg} alt="테스트 이미지" />
                </S.ImgWrapper>

                {(description1 || description2) && (
                    <S.SubWrapper type4>
                        {description1 && <S.DetailWrapper type4>{description1}</S.DetailWrapper>}
                        {description2 && <S.DetailWrapper type4> {description2}</S.DetailWrapper>}
                    </S.SubWrapper>
                )}
            </S.LinkWrapper>
        </S.CardWrapper>
    );
}
