const { useState } = require("react")

export const useCounter = () => {
    const [count, setCount] = useState(0)

    function inc(inputState) {
        setCount((prev) => prev + Number(inputState))
    }
    function dec(inputState) {
        if (count <= 0) {
            setCount(0)

        } else {
            setCount((prev) => prev - Number(inputState))
        }
    }
    function reset() {
        setCount(0)
    }
    return {
        count,
        inc,
        dec,
        reset,
    }
}