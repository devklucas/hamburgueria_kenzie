import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline: 0;
        list-style: none;
    }
    :root{
        --color-primary:#3FE864;
        --color-secondary:#E0E0E0;
        --color-primary-bg: #27AE60;
        --color-secondary-bg:#F5F5F5;
        --color-white:#fff;
        --color-textCart:#828282;
        font-family: 'Inter', serif;
    }
    button{
        cursor:pointer;
    }
`;