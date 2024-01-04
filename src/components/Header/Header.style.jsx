import { styled } from 'styled-components';

export const HeaderComponent = styled.header`
    border: 2px solid black;
    
    width: 100%;
    height: 8%;

    & nav {
        display: flex;
        flex-direction: row;
        justify-content: baseline;
        align-items: center;

        & h1 {
            color: #fff;
            margin-left: .5em;
            font-size: 2em;
        }
    }

    background: #202020;
    padding: 1em;
`;