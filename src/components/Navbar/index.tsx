import React, { useState } from "react";
import {
  DropDown,
  Header,
  IconNavbar,
  LogoNavbar,
  Nav,
} from "../../styles/header";

import { FaChartBar } from "react-icons/fa";
import BarChart from "../BarChart";

function Navbar() {
  const [showContent, setShowContent] = useState(false);

  const showChartBar = () => {
    setShowContent(!showContent);
  };

  return (
    <>
      <Header>
        <Nav>
          {showContent && (
            <DropDown>
              <BarChart />
            </DropDown>
          )}
          <LogoNavbar>
            <a href="/">CAMERGE</a>
          </LogoNavbar>
          <IconNavbar>
            <FaChartBar
              color="white"
              size={25}
              onClick={() => showChartBar()}
              cursor={"pointer"}
            />
          </IconNavbar>
        </Nav>
      </Header>
    </>
  );
}

export default Navbar;
