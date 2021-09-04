import styled from "styled-components"
import { device } from "../../utils/responsive"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    font-size: 30px;
    font-weight: 500;
    cursor: pointer;
    background-color: ${props => props.theme.btn[`${props.type}`].backgroundColor};  
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    color: ${props => props.theme.btn[`${props.type}`].color};

    &:active {
        opacity:0.2;
        box-shadow: 0px;
    }

    -webkit-user-select: none; 
    -webkit-touch-callout: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none; 

    @media ${device.mobileL} { 
        width: 90px;
        height: 90px;
        font-size: 37px;
    }

    @media ${device.tablet} { 
        width: 90px;
        height: 90px;
        font-size: 37px;
    }
    @media ${device.laptop} { 
        width: 90px;
        height: 90px;
        font-size: 37px;
    }
    @media ${device.laptopL} { 
        width: 90px;
        height: 90px;
        font-size: 37px;
    }
    @media ${device.desktop} { 
        width: 90px;
        height: 90px;
        font-size: 37px;
    }
    @media ${device.desktopL} { 
        width: 90px;
        height: 90px;
        font-size: 37px;
    }
`