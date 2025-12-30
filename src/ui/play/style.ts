import styled from "@emotion/styled";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #f0f0f0;
  overflow: hidden;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 430px;
  height: 100vh;
  max-height: 932px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
    padding: 20px;
    padding-top: 40px;
    display: flex;
    align-items: center;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const ProgressBar = styled.div`
    flex: 1;
    height: 6px;
    background-color: #F0F0F0;
    border-radius: 3px;
    overflow: hidden;
`;

export const ProgressFill = styled.div<{ progress: number }>`
    height: 100%;
    width: ${props => props.progress}%;
    background-color: #7364FE;
    transition: width 0.3s ease-in-out;
`;

export const Content = styled.div`
    padding: 24px 20px;
`;

export const QuestionNumber = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    color: #212121;
    margin-bottom: 1.75rem;
`;

export const OptionList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const OptionItem = styled.div<{ selected: boolean }>`
    width: 100%;
    padding: 18px 20px;
    border: 1px solid ${props => props.selected ? '#7364FE' : '#E0E0E0'};
    border-radius: 8px;
    background-color: ${props => props.selected ? '#F3F0FF' : '#FFFFFF'};
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: all 0.2s ease;

    span:first-of-type {
        font-size: 1.25rem;
        font-weight: 700;
        color: ${props => props.selected ? '#7364FE' : '#212121'};
    }

    span:last-of-type {
        font-size: 1rem;
        font-weight: 500;
        color: ${props => props.selected ? '#7364FE' : '#212121'};
    }

    &:hover {
        border-color: #7364FE;
    }
`;

export const BottomButton = styled.button`
  width: calc(100% - 40px);
  height: 56px;
  background-color: #7364FE;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  position: absolute;
  bottom: 120px;
  left: 20px;
  
  &:active {
    transform: scale(0.98);
    opacity: 0.9;
  }
  
  &:disabled {
    background-color: #E0E0E0;
    cursor: not-allowed;
  }
`;
