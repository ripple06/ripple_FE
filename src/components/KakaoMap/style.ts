import styled from "@emotion/styled";

export const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const CoordBox = styled.div`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  pointer-events: none;
  border: 1px solid rgba(115, 100, 254, 0.2);

  span {
    font-size: 0.85rem;
    font-weight: 600;
    color: #7364FE;
  }

  strong {
    font-size: 0.9rem;
    color: #212121;
    font-family: 'monospace';
  }
`;
