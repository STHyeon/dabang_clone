import React from 'react';

import * as S from './style';
import { Img, EventDate } from 'components';
import TabIcon from 'assets/images/tab.svg';

export interface CardProps {
    CardType?: string; // 카트 유형 선택
    to?: string; // 이동 페이지
    imgSrc?: string; // 이미지 주소
    alt?: string; // 이미지 설명
    title?: string | number; // 제목
    noneTitle?: string; // 제목
    address?: string; // 상품 주소
    description1?: string; // 상세설명1
    description2?: string; // 상세설명2
    chkDate?: Date; // 확인 날짜
    FlagValid?: boolean; // 태그광고 on/off
    Flag?: string; // 태그내용
    room?: string; // 건물유형
    roomInfo?: string; // 건물 추가 정보
    ableRoom?: number; // 거래가능한 방 개수
    complexData?: boolean; // 단지정보 on/off
    boxWidth?: string; // 박스 크기
    cardImgHeight?: string; // 이미지 크기
}

export function Card({
    CardType,
    noneTitle,
    to,
    imgSrc,
    alt,
    title,
    address,
    description1,
    description2,
    FlagValid,
    Flag,
    chkDate,
    room,
    roomInfo,
    complexData,
    ableRoom,
    boxWidth,
    cardImgHeight,
    ...props
}: CardProps) {
    return (
        <S.CardWrapper CardType={CardType} boxWidth={boxWidth} {...props}>
            {to ? (
                <S.LinkWrapper to="">
                    {imgSrc && alt && (
                        <S.ImgWrapper cardImgHeight={cardImgHeight}>
                            <Img src={imgSrc} alt={alt} />
                        </S.ImgWrapper>
                    )}

                    {(FlagValid || Flag) && (
                        <S.FlagWrapper>
                            {FlagValid && <S.Flag FlagValid>플러스+</S.Flag>}
                            {Flag && (
                                <S.Flag>
                                    {Flag}
                                    {chkDate && <EventDate eventDateType="type01" dateAt={chkDate} />}
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

                    {title && (
                        <S.TitleWrapper CardType={CardType}>
                            {address && <S.AddressWrapper>{address}</S.AddressWrapper>}
                            {title}
                        </S.TitleWrapper>
                    )}

                    {(description1 || description2) && (
                        <S.SubWrapper CardType={CardType}>
                            {description1 && <S.DetailWrapper>{description1}</S.DetailWrapper>}
                            {description2 && <S.DetailWrapper> {description2}</S.DetailWrapper>}
                        </S.SubWrapper>
                    )}

                    {(complexData || ableRoom) && (
                        <>
                            {ableRoom && (
                                <S.InfoListWrapper>
                                    거래가능한 방<S.InfoDataWrapper>{ableRoom} 개</S.InfoDataWrapper>
                                </S.InfoListWrapper>
                            )}
                            {complexData && (
                                <S.InfoListWrapper>
                                    단지 정보
                                    <S.InfoDataWrapper>
                                        <Img src={TabIcon} alt="탭 아이콘" height="18px" />
                                    </S.InfoDataWrapper>
                                </S.InfoListWrapper>
                            )}
                        </>
                    )}

                    {CardType === 'type05' && (
                        <S.SeeWrapper>
                            <S.SeeText hasLink>{noneTitle}</S.SeeText>
                            <svg width="35" height="35" viewBox="0 0 35 35">
                                <g fill="none" fillRule="evenodd">
                                    <circle cx="17.5" cy="17.5" r="17.5" fill="#3185F8"></circle>
                                    <g fill="#FFF">
                                        <path d="M10 17h15v1H10z"></path>
                                        <path d="M17 10h1v15h-1z"></path>
                                    </g>
                                </g>
                            </svg>
                        </S.SeeWrapper>
                    )}
                </S.LinkWrapper>
            ) : (
                <>
                    {CardType === 'type05' && (
                        <S.SeeWrapper>
                            <S.SeeText>{noneTitle}</S.SeeText>
                        </S.SeeWrapper>
                    )}
                </>
            )}
        </S.CardWrapper>
    );
}
