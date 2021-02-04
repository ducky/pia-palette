import React from 'react';
import styled from 'styled-components';

const StyledColor = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 15px;

  &:last-child {
    margin: 0;
  }

  .Color__swatch {
    display: inline-flex;
    background: black;
    width: 100px;
    height: 100px;
    border-radius: 5px;
    margin-right: 10px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;

    ${props => props.color && `background: ${props.color.toHexString()}`};
    ${props => props.color && `color: ${props.color.toHexString()}`};
  }

  .Color__body {
    display: flex;
    flex-flow: column;
    flex: 1 1 auto;
  }

  .Color__name {
  }

  .Color__details {
    display: flex;
    flex-flow: column;
    flex: 1 1 auto;
  }

  .Color__detail {
    width: 180px;
    padding: 3px 5px;
    border-radius: 3px;
    margin: 0 0 5px;
    background: rgba(0, 0, 0, 0.05);
    box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: background 300ms;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    &:last-child {
      margin: 0;
    }
  }
`;

const Color = ({ value }) => {
  const copyToClipboard = e => {
    navigator.clipboard.writeText(e.target.innerText);
  };

  return (
    <StyledColor color={value}>
      <div className="Color__swatch" onClick={copyToClipboard}>
        {value.toHexString()}
      </div>
      <div className="Color__body">
        <div className="Color__name">{value.toName()}</div>
        <div className="Color__details">
          <div className="Color__detail" onClick={copyToClipboard}>
            {value.toHexString()}
          </div>
          <div className="Color__detail" onClick={copyToClipboard}>
            {value.toRgbString()}
          </div>
          <div className="Color__detail" onClick={copyToClipboard}>
            {value.toHslString()}
          </div>
        </div>
      </div>
    </StyledColor>
  );
};

export default Color;
