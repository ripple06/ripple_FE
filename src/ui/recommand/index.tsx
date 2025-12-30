"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import BottomNav from "@/components/BottomNav";
import * as S from "./style";

export default function Recommand() {
    const router = useRouter();
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

    const regions = ["사하구", "기장군", "영도구", "남구", "서구"];

    const handleRegionClick = (region: string) => {
        if (selectedRegion === region) {
            setSelectedRegion(null);
        } else {
            setSelectedRegion(region);
        }
    };

    return (
        <S.Layout>
            <S.Container>
                <S.Header>
                    <S.BackButton onClick={() => router.back()}>
                        <Image src="/arrow.svg" alt="arrow" width={26} height={40} />
                    </S.BackButton>
                </S.Header>
                <S.Title>
                    원하시는 부산 내 지역을{"\n"}선택해주세요.
                </S.Title>
                <S.GridContainer>
                    {regions.map((region) => (
                        <S.RegionButton
                            key={region}
                            selected={selectedRegion === region}
                            onClick={() => handleRegionClick(region)}
                        >
                            {region}
                        </S.RegionButton>
                    ))}
                </S.GridContainer>
                <S.NextButton>다음</S.NextButton>
                <BottomNav />
            </S.Container>
        </S.Layout>
    );
}
