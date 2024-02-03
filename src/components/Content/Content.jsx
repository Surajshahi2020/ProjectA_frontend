import React from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiTitle, EuiText, EuiButton } from '@elastic/eui';
import './Content.css';

const Content = () => {
  return (
    <EuiFlexGroup justifyContent="center" alignItems="center" className="hero-section">
      <EuiFlexItem>
        <div className="text-container">
          <EuiTitle size="l">
            <h1 style={{ fontWeight: 'bold', color: 'white' }}>Welcome to the Nepal Army Confidential Sites</h1>
          </EuiTitle>
          <EuiText size="m" style={{ fontWeight: 'bold', color: 'white' }}>
            Access is restricted to <span style={{ color: 'white' }}>Nepal Army Members only</span>
          </EuiText>
          <EuiText size="m" style={{ fontWeight: 'bold', color: 'white' }}>
            Nepal Army <span style={{ color: 'white' }}>IT Department</span>
          </EuiText>
          <div className="buttons-container">
            <EuiButton fill>Emergency</EuiButton>
          </div>
        </div>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default Content;
