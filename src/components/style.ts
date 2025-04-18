import styled from "styled-components";

interface Colors {
    from?: string,
    to?: string
}

export const Container = styled.div<{ colors: Colors }>`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    background: linear-gradient(to right, ${props => props.colors.from}, ${props => props.colors.to});

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
        font-size: 50px;
    }
`;