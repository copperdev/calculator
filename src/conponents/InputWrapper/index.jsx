import { useContext } from "react"
import { CalculatorContext } from "../../context/CalculatorContext"
import Input from "../Input"
import { Container } from "./styles"

const InputWrapper = () => {
    const { calcul } = useContext(CalculatorContext)
    return (
        <Container>
            <Input text={calcul.inputText} state={calcul.state.input} />
            <Input result={calcul.result} state={calcul.state.result} />
        </Container>
    )
}

export default InputWrapper