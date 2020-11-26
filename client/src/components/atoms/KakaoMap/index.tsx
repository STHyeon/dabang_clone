import React, { useEffect, useRef } from 'react';

import * as S from './style';
declare const kakao: any; // for using kakao map sdk

interface PositionProps {
    title: string;
    latitude: number;
    longitude: number;
}

export interface KakaoMapProps {
    address?: string;
    positions?: Array<PositionProps>;
    height?: string;
}

export function KakaoMap({
    address,
    positions,
    height = '100%'
}: KakaoMapProps): React.ReactElement {
    const kakaoMapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const kakaoMapElement = kakaoMapRef.current;
        const options = {
            center: new kakao.maps.LatLng(37.566826, 126.9786567),
            level: 3
        };
        const kakaoMap = new kakao.maps.Map(kakaoMapElement, options);
        const ps = new kakao.maps.services.Places();

        function placesSearchCB(data: any, status: any, pagination: any) {
            if (status === kakao.maps.services.Status.OK) {
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가합니다
                var bounds = new kakao.maps.LatLngBounds();

                for (var i = 0; i < data.length; i++) {
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                kakaoMap.setBounds(bounds);
            }
        }

        ps.keywordSearch(address, placesSearchCB);

        var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

        if (positions) {
            for (var i = 0; i < positions.length; i++) {
                // 마커 이미지의 이미지 크기 입니다
                var imageSize = new kakao.maps.Size(24, 35);

                // 마커 이미지를 생성합니다
                var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

                // 마커를 생성합니다
                new kakao.maps.Marker({
                    map: kakaoMap, // 마커를 표시할 지도
                    position: new kakao.maps.LatLng(positions[i].latitude, positions[i].longitude), // 마커를 표시할 위치
                    title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                    image: markerImage // 마커 이미지
                });
            }
        }
    }, [address, positions]);

    return <S.Container ref={kakaoMapRef} height={height} />;
}
