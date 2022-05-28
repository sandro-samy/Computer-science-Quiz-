// import dependencies
import styled, { createGlobalStyle } from "styled-components";
// import image
import background from "./images/background.jpg";

export const GlobalStyle = createGlobalStyle`

html {
  height: 100%
}
body {
  background-image: url(${background}) ;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}
*{
  box-sizing: border-box;
  font-family: 'Catamaran',sans-serif;
  color: #fdfdfd;

}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  > p {
    color: #fff;
  }
  > .score {
    color: #fff;
    font-size: 2rem;
    margin: auto;
  }
  > h1 {
    font-family: "Baloo", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

    background: linear-gradient(135deg, #30cfff 0%, #ff0866 110%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    color: transparent;
    --webkit-background-clip: text;
    --moz-background-clip: text;
    --webkit-text-fill-color: transparent;
    --moz-text-fill-color: transparent;
    filter: drop-shadow(0px 0px 10px #0006);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  > .start,
  .next {
    color: #fff;
    margin: auto;
    padding: 6px 40px;
    border: 4px solid #fff;
    background-color: #0005;
    font-size: 1.5rem;
    transition: background-color .29s ease-in-out ,color  .2s ease-in-out;
    :hover {
      color: #000;
      background-color: #fff;
    }
  }
`;
