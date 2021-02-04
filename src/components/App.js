import React from 'react';
import color from 'tinycolor2';
import styled from 'styled-components';

import GlobalStyle from 'styles/global';
import NormalizeStyle from 'styles/normalize';
import Color from './Color';

const StyledPalette = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const PALETTE = ['#00283e', '#8ed2df', '#f1f689', '#ff8286', '#2896ad', '#b0bb17', '#b2494d'];

const App = () => {
  const renderPalette = colors => {
    return colors.map(c => {
      const tColor = color(c);
      return <Color value={tColor} />;
    });
  };

  return (
    <>
      <StyledPalette>{renderPalette(PALETTE)}</StyledPalette>
      <GlobalStyle />
      <NormalizeStyle />
    </>
  );
};

export default App;
