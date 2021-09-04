/* eslint-disable no-eval*/
export const getTypeBtn = (value) => {
    switch (value) {
        case "+":
        case "-":
        case "÷":
        case "×":
        case ".":
            return "operation";
        case "=":
            return "result"
        case "AC" :
            return "reset"
        case "+/-":
            return "sign"
        case "%":
            return "percent"
        default:
            return "number"
    }
}

export const getResult = (value) => {
    try {
        if (getMatchWithOperator(value)) {
            const result = eval(
                getValidStartOperation(
                    getPercent(value)
                        .replace(/×/g, "*")
                        .replace(/÷/g, "/")
                        .replace(/-0+/g, "-")
                )
            )
            return !isNaN(result) ? result : ""
        }
    } catch(e) {
        return "Error"
    }
    return ""
}

export const getValidStartOperation = (value) => /\*|\//g.test(value[0]) ?`0${value}` : value

export const getValidResult = (value) => getMatchWithOperator(value) ? getValidResult(value.slice(0, -1)) : value

export const getMatchWithOperator = (value) => /\+|-|÷|×|%|\.|\*|\//g.test(value)

export const getPercent = (value) => {
    if (/%/g.test(value)) {
        const match = value.split(/%/g)
        if (match.length > 2 && match[match.length-1] !== "") {
            match.splice(1, 0, "")
        }
        for (let i = 0; i < match.length; i++) {
            if (i === 0) {
                if (match[0] !== "" && match[1] === "") {
                    if (/(\+|-|÷|×|%|\.|\*|\/)$/g.test(match[0])) {
                        match[0] = `${match[0]}+(1/100)`
                    } else {
                        match[0] = `${match[0]}/100*1`
                    }
                } else if (match[0] !== "" && match[1] !== "") {
                    match[0] = `${match[0]}/100*`
                }
            }
            else if (i > 1) {
                if (i === match.length-1 && match[i] !== "") {
                    match[i] = `${match[i]}`
                } else {
                    match[i] = `${match[i]}%`
                }
            }
        }
        return getPercent(match.join(""))
    }
    return value
}