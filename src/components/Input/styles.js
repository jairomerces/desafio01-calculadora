import styled from 'styled-components';

export const InputContainer = styled.div`
    max-width: 100%;
    height: 135px;
    background-color: #CACACA;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';
    

    input {
        width: 100%;
        margin: 3%;
        height: 75px;
        background-color: #7FFFD4;
        border-radius: 10px;
        border: solid #CACACA;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 10px;
        font-size: 24px;
        font-family: 'Roboto';
        color: #2F4F4F;
        text-align: right;
    }
`