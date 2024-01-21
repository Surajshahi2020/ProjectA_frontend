import React from "react";
import {
  EuiHeader,
  EuiHeaderSectionItem,
  EuiText,
  EuiFlexGroup,
  EuiFlexItem,
} from "@elastic/eui";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <EuiHeader>
        <EuiFlexGroup justifyContent="center" alignItems="center">
          <EuiFlexItem grow={false}>
            <EuiText size="s">
              © Nepal Army Technical Department 2023 | All Rights Reserved
            </EuiText>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiHeader>
    </div>
  );
};

export default Footer;
