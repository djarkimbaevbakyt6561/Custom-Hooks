import { useInput } from "../hooks/input"
import { Button } from "../UI/Button"
import { Input } from "../UI/Input"
import styled from "styled-components"

const CounterInput = ({ onClick, children }) => {
    const { inputState, getInputValue, resetValue } = useInput()
    return (
        <InputContainer>
            <Input type="number" onChange={getInputValue} value={inputState} />
            <Button square={true} onClick={() => {
                onClick(inputState)
                resetValue()
            }}>{children}</Button>
        </InputContainer>
    )
}
export default CounterInput
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`