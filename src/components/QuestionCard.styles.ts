import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  font-size: 1.2rem;
  padding: 40px;
  min-width: 300px;
  max-width: 80%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #0005;
  > .number {
    /* color: #30cfff; */
  }
  > .question {
    /* background: linear-gradient(135deg, #30cfff 0%, #ff0866 110%); */
    color: #30cfff;
    /* -webkit-background-clip: text; */
    /* -webkit-text-fill-color: transparent; */
    /* filter: drop-shadow(0px 0px 10px #000a);   */
  }
  > p {
    color: #000;
  }
  > div > div > button {
    background-color: transparent;
    border: none;
    color: #000;
    cursor: pointer;
    font-size: 1.3rem;
    filter: drop-shadow(0px 0px 10px #0006);

    /* :hover {
      color: #30cfff;
    } */
  }
  .correct {
    color: green;
  }
  .wrong {
    color: red;
  }
`;
