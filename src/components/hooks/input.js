import { useState } from "react"

export const useInput = () => {
    const [inputState, setInputState] = useState(0)
    function getInputValue(e) {
        setInputState(e.target.value)
    }
    function resetValue() {
        setInputState(0)
    }
    return {
        inputState,
        getInputValue,
        resetValue
    }
}