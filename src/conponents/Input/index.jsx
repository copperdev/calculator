import { ThemeProvider } from "styled-components"
import { Text } from "./styles"
import { theme } from "./theme"

const Input = ({ text, result, state }) => (
    <ThemeProvider theme={theme}>
        <Text state={state}>{text}{result}</Text>
    </ThemeProvider>
)

export default Input