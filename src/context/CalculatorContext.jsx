import { createContext, useReducer } from "react"
import { initState, CalculatorReducer } from "../reducers/CalculatorReducer"

const defaultValueType = {
    calcul: initState,
    calculDispatch: () => null
}

export const CalculatorContext = createContext(defaultValueType)

const CalculatorProvider = ({ children }) => {
    const [calcul, calculDispatch] = useReducer(CalculatorReducer, initState)

    return (
        <CalculatorContext.Provider value={{ calcul, calculDispatch }}>
            { children }
        </CalculatorContext.Provider>
    )
}

export default CalculatorProvider
