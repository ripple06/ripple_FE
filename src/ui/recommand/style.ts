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
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const BackButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    color: #000;
    margin: 20px 24px;
    line-height: 1.4;
    white-space: pre-wrap;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    padding: 0 24px;
    margin-top: 20px;
`;

export const RegionButton = styled.button<{ selected?: boolean }>`
    width: 100%;
    height: 50px;
    border-radius: 8px;
    border: 1px solid ${props => props.selected ? "#7B61FF" : "#E0E0E0"};
    background-color: ${props => props.selected ? "#ECE6FF" : "#FFFFFF"};
    color: ${props => props.selected ? "#7B61FF" : "#000000"};
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.1s;
    
    &:hover {
        background-color: ${props => props.selected ? "#ECE6FF" : "#F9F9F9"};
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const NextButton = styled.button`
    margin: 24px;
    margin-top: auto;
    margin-bottom: 120px;
    height: 52px;
    background-color: #7B61FF;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.1s;
    
    &:active {
        background-color: #6A4FEF;
        transform: scale(0.95);
    }
`;
