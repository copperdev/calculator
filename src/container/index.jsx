import InputWrapper from "../conponents/InputWrapper"
import ButtonWrapper from "../conponents/ButtonWrapper"
import { RootContainer } from "./styles"
import CalculatorProvider from "../context/CalculatorContext"

import "./global.css"

const App = () => (
    <CalculatorProvider>
        <RootContainer>
            <InputWrapper />
            <ButtonWrapper />
        </RootContainer>
    </CalculatorProvider>
)

export default App