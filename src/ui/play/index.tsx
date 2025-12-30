"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BottomNav from "@/components/BottomNav";
import * as S from "./style";

const QUESTIONS = [
    {
        id: 1,
        question: "바다의 물은 왜 짠맛이 날까요?",
        options: ["소금이 들어 있어서", "설탕이 들어 있어서", "물고기 때문", "햇빛 때문"]
    },
    {
        id: 2,
        question: "지구에서 가장 넓은 바다는 어디일까요?",
        options: ["태평양", "대서양", "인도양", "북극해"]
    },
    {
        id: 3,
        question: "바다 속에서 가장 큰 포유류는?",
        options: ["흰긴수염고래", "상어", "돌고래", "바다거북"]
    },
    {
        id: 4,
        question: "바다의 밀물과 썰물은 무엇 때문에 생길까요?",
        options: ["달의 인력", "바람", "물고기의 이동", "지구의 자전"]
    },
    {
        id: 5,
        question: "바다 밑에 있는 아주 깊은 지형을 무엇이라 부를까요?",
        options: ["해구", "해수욕장", "대륙붕", "해령"]
    }
];

export default function QuizPlay() {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    const currentQuestion = QUESTIONS[currentIndex];
    const progress = ((currentIndex + 1) / QUESTIONS.length) * 100;

    const handleNext = () => {
        if (currentIndex < QUESTIONS.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedOption(null);
        } else {
            router.push("/finish");
        }
    };

    return (
        <S.Layout>
            <S.Container>
                <S.Header>
                    <S.BackButton onClick={() => router.back()}>
                        <Image src="/arrow.svg" alt="back" width={26} height={40} />
                    </S.BackButton>
                    <S.ProgressBar>
                        <S.ProgressFill progress={progress} />
                    </S.ProgressBar>
                </S.Header>
                <S.Content>
                    <S.QuestionNumber>Q{currentQuestion.id}. {currentQuestion.question}</S.QuestionNumber>
                    <S.OptionList>
                        {currentQuestion.options.map((option, index) => (
                            <S.OptionItem
                                key={index}
                                selected={selectedOption === index}
                                onClick={() => setSelectedOption(index)}
                            >
                                <span>A.</span>
                                <span>{option}</span>
                            </S.OptionItem>
                        ))}
                    </S.OptionList>
                </S.Content>

                <S.BottomButton
                    disabled={selectedOption === null}
                    onClick={handleNext}
                >
                    {currentIndex === QUESTIONS.length - 1 ? "완료" : "다음"}
                </S.BottomButton>

                <BottomNav />
            </S.Container>
        </S.Layout>
    );
}
