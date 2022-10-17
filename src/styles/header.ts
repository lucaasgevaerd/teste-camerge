import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  position: fixed;
  background-color: var(--blue-primary);
  width: 100%;
  top: 0;
  height: 70px;
  z-index: 1;
  padding: 0 10px;
  box-shadow: 0px 1px 4px #333;
  z-index: 1;
  @media (min-width: 576px) {
    padding: 0 20px;
  }
  @media (min-width: 768px) {
    padding: 0 30px;
  }
  @media (min-width: 992px) {
    padding: 0 40px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const LogoNavbar = styled.h1`
  font-size: 20px;
  color: #fff;
  transition: 0.3s;
  :hover {
    padding: 5px 0;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    transform: scale(110%);
  }
  a {
    text-decoration: none;
    color: unset;
  }
`;

export const IconNavbar = styled.div`
  transition: 0.3s;
  color: #fff;
  :hover {
    padding: 5px 0;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    transform: scale(110%);
  }
`;

export const DropDown = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 70px;
  left: 0;
  z-index: -1;
  background-color: var(--blue-fifth);
`;

export const BarChartContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  color: var(--blue-primary);
  margin-bottom: 60px;
  @media (min-width: 576px) {
    margin-bottom: 80px;
    font-size: 32px;
  }
  @media (min-width: 576px) {
    font-size: 34px;
  }
  @media (min-width: 768px) {
    font-size: 38px;
  }
`;
