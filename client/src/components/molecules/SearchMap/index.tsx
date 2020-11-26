import React, { useState, useEffect } from 'react';
import { KakaoMap } from 'components';
declare const kakao: any;

interface Location {
    latitude: number;
    longitude: number;
}

interface CoordinateProps {
    [index: number]: { x: string; y: string };
}

export interface SearchMapProps {
    address: string;
}

export function SearchMap({ address }: SearchMapProps): React.ReactElement {
    const [location, setLocation] = useState<Location>({
        latitude: 37.4921311495846,
        longitude: 127.029771111346
    });

    useEffect(() => {
        var geocoder = new kakao.maps.services.Geocoder();

        geocoder.addressSearch(address, function (result: CoordinateProps, status: string) {
            if (status === kakao.maps.services.Status.OK) {
                setLocation({ latitude: Number(result[0].y), longitude: Number(result[0].x) });
            }
        });
    }, [address]);

    return <KakaoMap {...location} />;
}
