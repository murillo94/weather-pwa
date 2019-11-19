import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

	body {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    color: #474747;
  }

  input[type=search]::-ms-clear { display: none; width : 0; height: 0; }
  input[type=search]::-ms-reveal { display: none; width : 0; height: 0; }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration { display: none; }

  .tooltipCustom {
    font-weight: 500;
    border-radius: 8px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  border: 1px solid #e7e7e7;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  width: 70vw;
  height: 75vh;
  box-shadow: 0 2px 30px rgba(102, 102, 102, 0.09);
  transition: all 0.1s ease-out;
  will-change: auto;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    border: none;
    border-radius: 0;
  }
`;

export { GlobalStyle, Wrapper, Container };
