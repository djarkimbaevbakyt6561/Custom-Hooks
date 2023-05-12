import { useCallback, useState } from "react"
import styled from "styled-components"
import { useInput } from "../hooks/input"
import { useTimer } from "../hooks/timer"
import { Button } from "../UI/Button"
import { Input } from "../UI/Input"

const Timer = () => {
    const [start, setStart] = useState(false)
    const toggleStartHandler = useCallback(() => {
        setStart((prev) => !prev)
    }, [])
    const { timer, startTimer, restartTimer, stopTimer, startTimerAfterStop } = useTimer(toggleStartHandler)
    const { getInputValue, inputState, resetValue } = useInput()
    return (
        <Container>
            <h1>{timer}</h1>
            <Input type="number" onChange={getInputValue} value={inputState}></Input>
            <ButtonContainer>
                {start ? <Button onClick={() => {
                    startTimerAfterStop()
                }} circle={true}>Start</Button> :
                    <Button onClick={() => {
                        startTimer(inputState)
                        resetValue()
                    }} circle={true}>Start</Button>}

                <Button circle={true} onClick={restartTimer}>Restart</Button>
                <Button circle={true} onClick={stopTimer}>Stop</Button>
            </ButtonContainer>

        </Container>
    )
}
export default Timer
const Container = styled.div`
 margin-top: 10px;
 background-color: darkgray;
 height: 200px;
 border-radius: 10px;

`
const ButtonContainer = styled.div`
  display: flex;
  width: 380px;
  justify-content: space-around;
`