import { useContext } from "react"
import { CalculatorContext } from "../../context/CalculatorContext"
import { ThemeProvider } from "styled-components"
import { getTypeBtn } from "../../utils/utils"
import { Container } from "./styles"
import { theme } from "./theme"

const Button = ({ type, children }) => {
    const { calculDispatch } = useContext(CalculatorContext)
    
    const handleClick = () => {
        const type = typeof children === "string" ? getTypeBtn(children) : "backspace"
        switch(type) {
            case "number":
                calculDispatch({
                    type: "ADD_INPUT",
                    payload:  {
                        value: children
                    }
                })
                break
            case "operation":
                calculDispatch({ 
                    type: "ADD_OPERATION",
                    payload:  {
                        value: children
                    }
                })
                break
            case "result":
                calculDispatch({ type: "RESULT" })
                break
            case "backspace":
                calculDispatch({ type: "BACKSPACE" })
                break
            case "reset":
                calculDispatch({ type: "RESET" })
                break
            case "sign":
                calculDispatch({ type: "SIGN" })
                break
            case "percent":
                calculDispatch({ type: "PERCENT" })
                break
            default:
                break
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container type={type} onClick={handleClick}>
                {children}
            </Container>
        </ThemeProvider>
    )
}

export default Button