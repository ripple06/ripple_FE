"use client";

import { useEffect, useRef } from "react";
import * as S from "./style";

declare global {
    interface Window {
        kakao: any;
    }
}

export default function KakaoMap() {
    const mapContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onLoadKakaoMap = () => {
            window.kakao.maps.load(() => {
                const center = new window.kakao.maps.LatLng(37.566826, 126.9786567); // Seoul City Hall default
                const options = {
                    center: center,
                    level: 3
                };

                if (mapContainer.current) {
                    new window.kakao.maps.Map(mapContainer.current, options);
                }
            });
        };

        if (window.kakao && window.kakao.maps) {
            onLoadKakaoMap();
        } else {
            // Retry or wait - relying on script `beforeInteractive` should make it available usually,
            // but `autoload=false` means we need to call load.
            // If it's not existing yet, it might be loading.
            // A simple way is to check interval or hook into script onLoad, but next/script handles loading.
            // Since we use 'beforeInteractive', it should be there.
            // If not, we can add an event listener or simple retry.
            // For now simple checking.
        }
    }, []);

    return <S.MapContainer ref={mapContainer} />;
}
