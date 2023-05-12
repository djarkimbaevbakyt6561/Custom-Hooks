import { useCounter } from "../hooks/counter"
import { Button } from "../UI/Button"
import CounterInput from "./CounterInput"
import styled from "styled-components"

const Counter = () => {
    const { count, inc, dec, reset, } = useCounter()

    return (
        <Container>
            <h1>{count}</h1>
            <InputsContainer>
                <CounterInput onClick={inc}>+</CounterInput>
                <CounterInput onClick={dec}>-</CounterInput>
            </InputsContainer>
            <Button circle={true} onClick={reset}>Reset</Button>
        </Container>
    )
}
export default Counter
const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 background-color: goldenrod;
 height: 260px;
 border-radius:7px;
 margin-top: 20px;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const InputsContainer = styled.div`
 display: flex;
 width: 200px;
 justify-content: space-around;
 margin-bottom: 15px;
`