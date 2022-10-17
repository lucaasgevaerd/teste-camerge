import styled from "styled-components";
import ArrowDown from "../assets/images/arrow-down.svg";

export const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 90px 10px 20px;
  @media (min-width: 768px) {
    padding: 100px 20px 30px;
  }
  @media (min-width: 1200px) {
    padding: 110px 30px 40px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--blue-tertiary);
  max-width: 400px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0px 1px 4px #333;
  @media (min-width: 576px) {
    max-width: 500px;
  }
  @media (min-width: 768px) {
    max-width: 600px;
  }
  @media (min-width: 992px) {
    max-width: 700px;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
    margin-bottom: 30px;
  }
  @media (min-width: 1400px) {
    max-width: 1200px;
    margin-bottom: 40px;
  }
`;

export const CustomSelect = styled.select`
  width: 100%;
  max-width: 320px;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 6px;
  :focus {
    outline: none;
  }
  appearance: none;
  background-image: url(${ArrowDown});
  background-size: 16px;
  background-repeat: no-repeat;
  background-position: right 10px center;
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: var(--blue-primary);
  font-size: 18px;
  font-weight: bold;
  border-radius: 10px 10px 0 0;
  border-radius: 10px;
  transition: background-color 0.3s;
  color: white;
  cursor: pointer;
  :hover {
    background-color: var(--blue-glow);
  }
  @media (min-width: 576px) {
    font-size: 20px;
  }
  @media (min-width: 768px) {
    font-size: 22px;
  }
  @media (min-width: 1200px) {
    font-size: 24px;
    height: 70px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 350px;
  @media (min-width: 768px) {
    max-width: 450px;
  }
  @media (min-width: 1200px) {
    max-width: 500px;
  }
`;

type Active = {
  isActive: boolean;
};

export const Button = styled.button<Active>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  background-color: ${(p: Active) =>
    p.isActive ? "var(--blue-primary)" : "#bbb"};
  font-weight: bold;
  color: ${(p: Active) => (p.isActive ? "white" : "#999")};
  height: 40px;
  cursor: ${(p: Active) => (p.isActive ? "pointer" : "default")};
  border-radius: 6px;
  border: none;
  transition: background-color 0.3s;
  font-size: 16px;
  box-shadow: 0px 1px 4px #333;
  :hover {
    background-color: ${(p: Active) =>
      p.isActive ? "var(--blue-glow)" : "none"};
  }
  @media (min-width: 768px) {
    height: 50px;
    width: 160px;
  }
`;

export const CardDetails = styled.div`
  display: flex;
  height: 150px;
  flex-direction: column;
  margin: 10px;
  flex-grow: 1;
  border-radius: 10px;
  border: 1px solid #000;
`;

export const CardDetailsTitle = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: var(--blue-secondary);
  font-size: 15px;
  font-weight: bold;
  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid #000;
  @media (min-width: 576px) {
    font-size: 16px;
  }
  @media (min-width: 768px) {
    font-size: 18px;
    height: 50px;
  }
  @media (min-width: 1400px) {
    font-size: 20px;
    height: 60px;
  }
`;

export const CardDetailsContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: var(--blue-fourth);
  padding: 5px;
  border-radius: 0 0 10px 10px;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-right: 1px solid #000;
  :last-child {
    border-right: none;
  }
`;

export const ItemTitle = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  height: 30px;
  @media (min-width: 576px) {
    font-size: 16px;
  }
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1400px) {
    font-size: 20px;
  }
`;

export const ItemContent = styled.div`
  text-align: center;
  font-size: 15px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 576px) {
    font-size: 16px;
  }
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1400px) {
    font-size: 20px;
  }
`;

export const CardDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;
