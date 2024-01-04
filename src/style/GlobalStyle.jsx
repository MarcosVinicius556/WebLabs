import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

`;

export const Page = styled.div`

    background: #f7fcff;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 3;

    & span {
        flex: 1;

        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;