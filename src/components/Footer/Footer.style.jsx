import { styled } from 'styled-components';

export const FooterComponent = styled.footer`
    border: 2px solid black;
    
    width: 100%;
    height: 10%;

    & div {
        display: flex;
        flex-direction: column;
        justify-content: baseline;
        align-items: center;
        color: #fff;
        letter-spacing: .7px;

        & h3 {
            margin-bottom: .2em;
        }

        & h4 {
            margin-bottom: .2em;
        }

    }

    background: #202020;
    padding: 1em;
`;