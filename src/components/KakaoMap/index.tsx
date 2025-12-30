"use client";

import { useEffect, useRef, useState } from "react";
import * as S from "./style";

declare global {
    interface Window {
        kakao: any;
    }
}

export default function KakaoMap() {
    const mapContainer = useRef<HTMLDivElement>(null);
    const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);

    useEffect(() => {
        const onLoadKakaoMap = () => {
            window.kakao.maps.load(() => {
                const defaultCenter = new window.kakao.maps.LatLng(37.566826, 126.9786567);

                const initializeMap = (center: any) => {
                    const options = {
                        center: center,
                        level: 3
                    };
                    if (mapContainer.current) {
                        const map = new window.kakao.maps.Map(mapContainer.current, options);

                        // 현재 중심 좌표 초기화
                        setCoords({
                            lat: center.getLat(),
                            lng: center.getLng()
                        });

                        // 클릭 이벤트 리스너 등록
                        window.kakao.maps.event.addListener(map, 'click', (mouseEvent: any) => {
                            const latlng = mouseEvent.latLng;
                            setCoords({
                                lat: latlng.getLat(),
                                lng: latlng.getLng()
                            });
                        });

                        // 중심 좌표 변경 시 업데이트
                        window.kakao.maps.event.addListener(map, 'center_changed', () => {
                            const latlng = map.getCenter();
                            setCoords({
                                lat: latlng.getLat(),
                                lng: latlng.getLng()
                            });
                        });
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

    return (
        <S.MapWrapper>
            <S.MapContainer ref={mapContainer} />
            {coords && (
                <S.CoordBox>
                    <span>현재 위치 좌표</span>
                    <strong>{coords.lat.toFixed(6)}, {coords.lng.toFixed(6)}</strong>
                </S.CoordBox>
            )}
        </S.MapWrapper>
    );
}