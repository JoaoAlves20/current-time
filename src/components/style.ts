import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    background: linear-gradient(to right, #0ea5e9, #6366f1);

    div {
        background: rgba(0, 0, 0, 0.5);
        width: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        border-radius: 10px;
        
        h1 {
            font-size: 80px;
            font-weight: bold;
        }
    }

    p {
        padding-bottom: 100px;
        font-size: 50px;
    }
`;