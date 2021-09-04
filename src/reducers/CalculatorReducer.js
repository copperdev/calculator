import { getMatchWithOperator, getResult, getValidResult } from "../utils/utils"

export const initState = {
    inputText: "",
    result: "",
    lastIsOperator: false,
    lastIsResult: false,
    lastIsComma: false,
    state: {
        input: "on",
        result: "off",
    }
}

export const CalculatorReducer = (st, action) => {
    switch (action.type) {
    case "ADD_INPUT":
        const value = `${st.inputText}${action.payload.value}`
        if (st.lastIsResult) {
            return { 
                ...st,
                inputText: `${action.payload.value}`,
                result: "",
                lastIsOperator: false,
                lastIsResult: false,
                state: {
                    input: "on",
                    result: "off",
                }
            }
        }
        return { 
            ...st,
            inputText: value,
            result: getResult(value),
            lastIsOperator: false,
            lastIsResult: false,
            state: {
                input: "on",
                result: "off",
            }
        }
    case "ADD_OPERATION":
        const operation = action.payload.value
        if (st.lastIsResult && st.result !== "Error") {
            return { 
                inputText: `${st.result}${operation}`,
                result: "",
                lastIsOperator: true,
                lastIsResult: false,
                lastIsComma: false,
                state: {
                    input: "on",
                    result: "off",
                }
            }
        } else if (!st.lastIsComma && operation === ".") {
            return { 
                ...st, 
                inputText: `${st.inputText}${operation}`,
                lastIsOperator: false,
                lastIsResult: false,
                lastIsComma: true,
                state: {
                    input: "on",
                    result: "off",
                }
            }
        } else if (!st.lastIsOperator && st.lastIsComma && operation !== "." ) {
            return { 
                ...st, 
                inputText: `${st.inputText}${operation}`,
                lastIsOperator: true,
                lastIsResult: false,
                lastIsComma: false,
                state: {
                    input: "on",
                    result: "off",
                }
            }
        } else if (!st.lastIsOperator && !st.lastIsComma && (st.inputText.length || operation === "-")) {
            return { 
                ...st, 
                inputText: `${st.inputText}${operation}`,
                lastIsOperator: true,
                lastIsResult: false,
                state: {
                    input: "on",
                    result: "off",
                }
            }
        } else if (st.lastIsOperator && operation === "-" && st.inputText[st.inputText.length-1] !== "-") {
            return { 
                ...st, 
                inputText: `${st.inputText}${operation}`,
                lastIsOperator: true,
                lastIsResult: false,
                state: {
                    input: "on",
                    result: "off",
                }
            }
        }
        return { ...st }
    case "RESULT":
        if (!st.lastIsOperator && getMatchWithOperator(st.inputText)) {
            return { 
                ...st, 
                lastIsResult: true,
                state: {
                    input: "off",
                    result: "on",
                }
            }
        }
        return { ...st }
    case "BACKSPACE" :
        return { 
            ...st,
            inputText: st.inputText.slice(0, -1),
            result: getResult(getValidResult(st.inputText.slice(0, -1))),
            lastIsOperator: !st.lastIsOperator,
            lastIsResult: false,
            state: {
                input: "on",
                result: "off",
            }
        }
    case "RESET":
        return { 
            ...st,
            inputText: "",
            result: "",
            lastIsOperator: false,
            lastIsResult: false,
            state: {
                input: "on",
                result: "off",
            }
        }
    case "SIGN":
        if (st.lastIsResult) {
            return { 
                ...st,
                result: (st.result * -1),
            }
        }
        return { ...st }
    case "PERCENT":
        if (st.lastIsResult) {
            return { 
                ...st,
                inputText: `${st.result}%`,
                result: getResult(`${st.inputText}%`),
                lastIsOperator: false,
                state: {
                    input: "on",
                    result: "off",
                }
            }
        }
        return { 
            ...st, 
            inputText: `${st.inputText}%`,
            result: getResult(`${st.inputText}%`),
            lastIsOperator: false,
            state: {
                input: "on",
                result: "off",
            }
        }

    default:
        return initState
    }
}
