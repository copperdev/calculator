import styled from "styled-components"
import { device } from "../utils/responsive"

export const RootContainer = styled.div`
    margin: auto;
    width: 100%;

    @media ${device.mobileL} { 
        width: 100%;
    }

    @media ${device.tablet} { 
        width: 60%;
    }
    @media ${device.laptop} { 
        width: 40%;
    }
    @media ${device.laptopL} { 
        width: 30%;
    }
    @media ${device.desktop} { 
        width: 20%;
    }
    @media ${device.desktopL} { 
        width: 15%;
    }
`