import styled from "styled-components"

export const Text = styled.p`
    margin: 0;
    display: flex;
    flex-direction: row-reverse;
    overflow: overlay;
    overflow-x: scroll;
    padding: 0 15px;
    font-size: ${props => props.theme.input[`${props.state}`].fontSize};
    color: ${props => props.theme.input[`${props.state}`].color};
    transition: font-size 1s;
    ::-webkit-scrollbar { 
        display: none; 
    }
`