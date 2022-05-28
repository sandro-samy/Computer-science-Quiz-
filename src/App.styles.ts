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
    margin: 0;
  }
  > h1 {
    font-family: "Baloo", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

    background: linear-gradient(135deg, #30cfff 0%, #aa08ff 130%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    color: transparent;
    --webkit-background-clip: text;
    --moz-background-clip: text;
    --webkit-text-fill-color: transparent;
    --moz-text-fill-color: transparent;
    filter: drop-shadow(0px 0px 10px #0007);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
`;
