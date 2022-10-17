import styled, { keyframes } from "styled-components";

const LdsEllipsis1 = keyframes`
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
`;
const LdsEllipsis2 = keyframes`
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
`;
const LdsEllipsis3 = keyframes`
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
`;
export const CirclesMovingHorizontallyLoaderContainer = styled.div`
  transform: scale(100%);
`;

export const DivLoader = styled.div`
  position: absolute;
  top: 0px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--blue-primary);
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
`;

export const LdsEllipsis = styled.div`
  display: flex;
  position: relative;
  margin: 15px auto 10px;
  width: 80px;

  ${DivLoader}:nth-child(1) {
    left: 8px;
    animation: ${LdsEllipsis1};
    animation-duration: 0.6s;
    animation-iteration-count: infinite;
  }
  ${DivLoader}:nth-child(2) {
    left: 8px;
    animation: ${LdsEllipsis2};
    animation-duration: 0.6s;
    animation-iteration-count: infinite;
  }
  ${DivLoader}:nth-child(3) {
    left: 32px;
    animation: ${LdsEllipsis2};
    animation-duration: 0.6s;
    animation-iteration-count: infinite;
  }
  ${DivLoader}:nth-child(4) {
    left: 56px;
    animation: ${LdsEllipsis3};
    animation-duration: 0.6s;
    animation-iteration-count: infinite;
  }
`;
