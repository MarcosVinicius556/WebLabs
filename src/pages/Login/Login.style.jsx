import { styled } from 'styled-components';
import loginBack from '../../assets/loginback.png';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background: url(${loginBack});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    backdrop-filter: blur(10px);

`;

export const LoginCard = styled.div`

        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1em;
        width: 50%;
        max-width: 450px;
        height: 50%;
        max-height: 450px;
        background: #ffffffb2;
        backdrop-filter: blur(10px);
        
        & h3 {
            margin-top: 1em;
            font-size: 28px;
        }

        & form {
            width: 100%;
            height: 65%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 1em;
            & span {
                max-height: 80px;
                align-items: center;
                display: flex;
                flex-direction: column;
                margin-bottom: 5px;
                & label {
                    width: 100%;
                    height: 2em;
                    font-size: 1.2em;
                    font-weight: bold;
                    display: flex;
                    justify-content: baseline;
                    align-items: center;
                }

                & input {
                    width: 100%;
                    border: none;
                    border-radius: 5px;
                    outline: none;
                    font-size: 34px;
                    padding: 5px;
                }
            }

            & input[type="submit"] {
                border: none;
                width: 70%;
                height: 52px;
                cursor: pointer;
                background: #6196fa;
                transition: all .5s;
                font-size: 22px;
                font-weight: bold;
                position: absolute;
                bottom: 1em;
                color: #fff;
                
                &:hover{
                    background: #4d78c9;
                }
            }
        }

`;

export const Error = styled.div`
    color: #fff;
    letter-spacing: 1px;
    font-weight: bold;
    background: #e08585ca;
    width: 50%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    margin-top: 5px;
    border: 2px solid gray;
    border-radius: 5px;
    transition: all .5s;
    backdrop-filter: blur(5px);

`;