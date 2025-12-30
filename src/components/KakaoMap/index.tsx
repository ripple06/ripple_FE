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
                const defaultCenter = new window.kakao.maps.LatLng(37.566826, 126.9786567); // Seoul City Hall default

                const initializeMap = (center: any) => {
                    const options = {
                        center: center,
                        level: 3
                    };
                    if (mapContainer.current) {
                        new window.kakao.maps.Map(mapContainer.current, options);
                    }
                };

                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            const lat = position.coords.latitude;
                            const lon = position.coords.longitude;
                            const currentCenter = new window.kakao.maps.LatLng(lat, lon);
                            initializeMap(currentCenter);
                        },
                        (error) => {
                            console.error("Geolocation error:", error);
                            initializeMap(defaultCenter);
                        }
                    );
                } else {
                    initializeMap(defaultCenter);
                }
            });
        };

        if (window.kakao && window.kakao.maps) {
            onLoadKakaoMap();
        }
    }, []);

    return <S.MapContainer ref={mapContainer} />;
}