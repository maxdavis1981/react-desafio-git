import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    a.remover {
        color: #FF0000;
        margin-top:20px;
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
     

    .button-group {
    display: flex;
    gap: 20px;
    margin: 0;
    flex-wrap: wrap; /* permite quebrar quando necessário */
    justify-content: flex-start;
    }

    .button-group a {
        background-color: #FAFAFA;
        border: 1px solid #FAFAFA;
        border-radius: 20px;
        height: 32px;
        width: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #000;
        font-weight: 600;
        font-size: 12px;
        transition: background-color 0.3s ease;
        cursor: pointer;
        user-select: none;
        white-space: nowrap;
    }

    /* Hover effect */
    .button-group a:hover {
    background-color: #FAFAFA40;
    }

    /* 🔻 Responsivo: empilha os botões em telas pequenas */
    @media (max-width: 400px) {
        .button-group {
            flex-direction: column;
            align-items: flex-start;
        }

        .button-group a {
            width: 100%; /* ocupa largura total do container */
        }
    }




`
